var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');

router.post('/classify', function(req, res, next) {
  // DON'T return the hardcoded response after implementing the backend
  let response = ["shoe", "red", "nike"];

  // Your code starts here //
  const config = new AWS.Config({
    accessKeyId:"AKIARAR74F5B2ZJFROOU",
    secretAccessKey:"58t6FYfBVhi0FhEKFwxOWExsgASY3dtg6EHAPcVP",
    region:"us-east-1"
  })

  const client = new AWS.Rekognition();
  const params = {
    Image: {
      S3Object:{
        Bucket: bucket,
        Name: photo
      },
    },
    MaxLabels:10
  }

  if (err) {
    console.log(err, err.stack);
  } else {
    console.log('Detect labels: ${photo}');
    res.labels;
  }
  // Your code ends here //

  res.json({
    "labels": response
  });
});

module.exports = router;
