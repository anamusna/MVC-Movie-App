const multer = require('multer')

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, callback) => {
    if (!file.mimetype.match(/jpeg|jpg|png|gif/)) {
      callback(new Error('This is not supported'), false)
      return
    }
    callback(null, true)
  }
})
