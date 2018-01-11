const express = require('express');
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const middleware = require('../middleware');
const User = require('../models/user');

const router = express.Router();

// AWS CONFIG
aws.config = new aws.Config();
aws.config.accessKeyId = process.env.AWS_ACCESS_KEY_ID;
aws.config.secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.S3_BUCKET_NAME,
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
  User.findByIdAndUpdate(req.user._id, { $set: { image: uploadedImage } }, (err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json({ image: uploadedImage });
    }
  });
});

module.exports = router;
