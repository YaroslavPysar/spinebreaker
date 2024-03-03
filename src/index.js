// file-uploader.js

const fs = require('fs');
const path = require('path');
const multer = require('multer');

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(__dirname, 'uploads');
    fs.mkdirSync(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Initialize multer upload
const upload = multer({ storage: storage }).single('file');

// File upload function
function fileUploader(req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    const filePath = path.join('uploads', req.file.filename);
    res.status(200).json({ message: 'File uploaded successfully', filePath });
  });
}

module.exports = fileUploader;
