const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://fegananca:aNcTUVss7NryMBZB@cluster0.6ud5c8w.mongodb.net/places',
  (err) => {
    if (!err) console.log('mongoDB connection succeeded');
    else console.log('Error in DB connection');
  }
);

module.exports = mongoose;
