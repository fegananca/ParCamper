const mongoose = require('mongoose');
require('dotenv').config();
const key = process.env.MONGO_KEY;

mongoose.connect(
  key,
  (err) => {
    if (!err) console.log('mongoDB connection succeeded');
    else console.log('Error in DB connection');
  }
);

module.exports = mongoose;
