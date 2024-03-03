# File Uploader Package

This package provides a simple file uploader middleware for handling file uploads in Node.js applications. It utilizes the multer middleware for handling multipart/form-data and stores uploaded files in a local directory.

## Installation

You can install this package via npm:

```bash
npm install @your-username/file-uploader
```

## Usage

```javascript
// Import the file uploader middleware
const fileUploader = require('@your-username/file-uploader');

// Example usage with Express.js
const express = require('express');
const app = express();

// Configure route for file upload
app.post('/upload', fileUploader);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

## Configuration

By default, the uploaded files are stored in the `uploads` directory within the package directory. You can customize the upload directory by modifying the `destination` function in the multer configuration within the `file-uploader.js` file.

## Contributing

Contributions are welcome! If you have any ideas for improvements or new features, feel free to open an issue or submit a pull request.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
