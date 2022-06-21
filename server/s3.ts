import dotenv from 'dotenv';
import S3 from 'aws-sdk/clients/s3';
import uniqId from 'uniqid';

dotenv.config();

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY as string;
const secretAccessKey = process.env.AWS_SECRET_KEY as string;

//creating connection with AWS s3
const s3 = new S3({
  region,
  apiVersion: 'latest',
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

function uploadFile(file: Buffer) {
  const uploadParams = {
    Bucket: bucketName as string,
    Body: file,
    Key: uniqId(),
  };
  return s3.upload(uploadParams).promise();
}

// function getFileStream(fileKey: string) {
//   const downloadParams = {
//     Key: fileKey,
//     Bucket: bucketName as string,
//   };
//   return s3.getObject(downloadParams).createReadStream();
// }

export default { uploadFile };
