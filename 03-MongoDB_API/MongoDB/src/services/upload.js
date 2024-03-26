const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp')
  },
  filename: function (req, file, cb) {
    console.log(file);
    const ext = path.extname(file.originalname);
    if (ext !== '.png') {
      cb('Only png File Upload')
    } else {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  }
})

const upload = multer({ storage: storage })

module.exports = upload;