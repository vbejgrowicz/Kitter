const express = require('express');
const path = require('path');
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const middleware = require('../middleware');
const bucketName = require('../config');

const router = express.Router();

// AWS CONFIG
aws.config.loadFromPath(path.resolve(__dirname, '..', 'config', 's3_config.json'));
const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3,
    bucket: bucketName,
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    },
  }),
});

// ADD USER PROFILE IMAGE
router.post('/profile', middleware.isLoggedin, upload.array('photo', 1), (req, res) => {
  console.log(req.files);
  res.send(`Successfully uploaded ${req.files.length} files!`);
});

module.exports = router;
