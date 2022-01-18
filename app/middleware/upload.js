// creating a middleware

const multer = require("multer");

// create a filter so that only images get uploaded
const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

// create file storeage engine
const fileStorageEngine = multer.diskStorage({
  // destination string is the direct path from server file to where we want to save uploaded file
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
  },
});

// create a middleware
const uploadFile = multer({
  storage: fileStorageEngine,
  fileFilter: imageFilter,
});
module.exports = uploadFile;

// now create a controller for uplading images // go to the controllers
