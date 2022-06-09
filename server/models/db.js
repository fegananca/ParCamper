const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/places', (err) => {
  if (!err) console.log('mongoDB connection succeeded');
  else console.log('Error in DB connection');
});

module.exports = mongoose;
