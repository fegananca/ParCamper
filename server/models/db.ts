import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const key = process.env.MONGO_KEY;
//const key = process.env.MONGO_TEST;

if (key) {
  mongoose.connect(key, (err) => {
    if (!err) console.log('mongoDB connection succeeded');
    else console.log('Error in DB connection');
  });
}

export default { mongoose, key };
