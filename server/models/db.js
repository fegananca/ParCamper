const mongoose = require('mongoose');
require('dotenv').config({
  path: '../.env',
});

mongoose.connect(process.env.DB_URL, (err) => {
  if (!err) console.log('mongoDB connection succeeded');
  else console.log('Error in DB connection');
});

module.exports = mongoose;
