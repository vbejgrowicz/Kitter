const express = require('express');
const path = require('path');
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const middleware = require('../middleware');
const bucketName = require('../config');
const User = require('../models/user');

const router = express.Router();

// AWS CONFIG
aws.config.loadFromPath(path.resolve(__dirname, '..', 'config', 's3_config.json'));
const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3,
    bucket: bucketName,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key(req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

// ADD USER PROFILE IMAGE
router.post('/profile', middleware.isLoggedin, upload.array('photo', 1), (req, res) => {
  const uploadedImage = req.files[0].location;
  User.findByIdAndUpdate(req.user._id, { $set: { userImage: uploadedImage } }, (err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ userImage: uploadedImage });
    }
  });
});

module.exports = router;
