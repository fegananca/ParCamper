require('dotenv').config();
const S3 = require('aws-sdk/clients/s3');
const uniqId = require('uniqid');

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
  region,
  apiVersion: 'latest',
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

//upload file to s3
function uploadFile(file) {
  const uploadParams = {
    Bucket: bucketName,
    Body: file,
    Key: uniqId(),
  };
  return s3.upload(uploadParams).promise();
}

exports.uploadFile = uploadFile;
//download file from s3

function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName,
  };
  return s3.getObject(downloadParams).createReadStream();
}

exports.getFileStream = getFileStream;
