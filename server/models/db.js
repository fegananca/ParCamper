const mongoose = require('mongoose');
require('dotenv').config();
const key = process.env.MONGO_KEY;
//const key = process.env.MONGO_TEST;

mongoose.connect(key, (err) => {
  if (!err) console.log('mongoDB connection succeeded');
  else console.log('Error in DB connection');
});

module.exports = mongoose;
