const path = require('path');
const fs = require('fs');
const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const bodyParser = require('body-parser')
const app = express();
const Busboy = require('busboy');
const router = express.Router();
const upload = require("./uploadMiddleware.js"); 
const mongoose = require('mongoose');
const moment = require('moment');
const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: "<>",
  secretAccessKey: "<>",
  region: "ap-southeast-1"
});

s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  Bucket: "<>",
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://posuser:85JLJ4545jk@cluster0-4ma44.mongodb.net/epanthiya", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});


mongoose.connection.on('connected', function () {  
    console.log(`Database connection open to ${mongoose.connection.host} ${mongoose.connection.name}`);
}); 

mongoose.connection.on('error',function (err) {  
console.log('Mongoose default connection error: ' + err);
}); 

mongoose.connection.on('disconnected', function () {  
console.log('Mongoose default connection disconnected'); 
});

  
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
 
app.get('/api', function (req, res) {
  res.end('file catcher example');
});
 
app.post('/api/upload', upload.single('attachment'), function (request, response) {
    if(request.file){
        const mimeType = request.file.mimetype;
        const file_name = Date.now() + path.extname(request.file.originalname);
        const s3Params = {
          Bucket: "<>",
          Body: request.file.buffer,
          Key: file_name,
          Expires: 60,
          ContentType: mimeType,
          ACL: 'public-read'
        };
        s3.upload(s3Params, (err, data) => {
          if(err){
            response.status(400).json({
              type: "error",
              message : err
            });
            return 
          }else{
            return response.status(200).json({
              type : 'success',
              message:  {
                'file_path' : data.Location,
                'file_name' : file_name
              }
            });
          }
        });
    }else{
      response.status(400).json({
        type: "error",
        message : "Something went wrong please try again"
      });
      return
    }
});

app.delete('/api/delete_file', function (request, response, next) {
  const params = {
    Bucket: "<>", 
    Key: "1601539866980-logo.png"
  };
  s3.deleteObject(params, function(err, data) {
    if(err){
      response.status(400).json({
        type: "error",
        message : err
      });
      return
    }else{
      return response.status(200).json({
        type : 'success',
        message: data
      });
    }
  });
});


const PORT = process.env.PORT || 3000;
 
app.listen(PORT, function () {
  console.log('Node.js server is running on port ' + PORT);
});