const path = require('path');
const fs = require('fs');
const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const bodyParser = require('body-parser')
const app = express();
const router = express.Router();
//const upload = require("./uploadMiddleware.js"); 
const AWS = require('aws-sdk');

const BUCKET_NAME = "<>t";

AWS.config.update({
  accessKeyId: "<>",
  secretAccessKey: "<>",
  region: 'ap-south-1' 
});

s3 = new AWS.S3({apiVersion: '2006-03-01'});

var upload = multer({
  storage: multerS3({
      s3: s3,
      acl: 'private',
      bucket: BUCKET_NAME,
      metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
      },
      key: function (req, file, cb) {
          console.log(file);
          cb(null, file.originalname); //use Date.now() for unique file keys
      }
  })
});
// const DIR = './uploads';


// let storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, DIR);
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
//     }
// });
// let upload = multer({
//     storage: storage,
//     fileFilter: function(req, file, cb) {
//         if (file.mimetype !== 'image/png' && file.mimetype !== 'image/gif' && file.mimetype !== 'image/jpeg') {
//             //req.fileValidationError = 'Only image files are allowed!';
//             return cb('Only image files are allowed!', false);
//             cb(null, false);
//         } else {
//             cb(null, true);
//         }
//     },
//     limits: { fileSize: 1024 * 1024 },
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
 
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
 
app.post('/api/upload', upload.single('attachment'), function (req, res) {
    if (!req.file) {
        // if(req.fileValidationError) {

        // }
        console.log("No file received");
        return res.send({
          success: false
        });
    
      } else {
        const mimeType = req.file.mimetype;
        const file_name = req.file.originalname;
        console.log('file received successfully');
        return res.send({
          data : req.file,
          success: true
        });

        // const s3Params = {
        //   Bucket: "epanthiyabucket",
        //   Body: file.data,
        //   Key: file_name,
        //   Expires: 60,
        //   ContentType: mimeType,
        //   ACL: 'public-read'
        // };
        // s3.upload('putObject', s3Params, (err, data) => {
        //   if(err){
        //     console.log(err);
        //     return res.end();
        //   }
        //   const returnData = {
        //     signedRequest: data,
        //     url: `https://epanthiyabucket.s3.amazonaws.com/file_name`
        //   };
        //   res.write(JSON.stringify(returnData));
        //   res.end();
        // });

      }
});
 
const PORT = process.env.PORT || 3000;
 
app.listen(PORT, function () {
  console.log('Node.js server is running on port ' + PORT);
});