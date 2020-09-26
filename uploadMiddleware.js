const multer = require('multer');

let storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
  }
});

const upload = multer({
  //storage: storage,
  limits: {
    fileSize: 20 * 1024 * 1024,
  },
  fileFilter: function(req, file, cb) {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/gif' && file.mimetype !== 'image/jpeg') {
        //req.fileValidationError = 'Only image files are allowed!';
        return cb('Only image files are allowed!', false);
        cb(null, false);
    } else {
        cb(null, true);
    }
   },
});

module.exports = upload;