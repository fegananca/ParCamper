const { mongoose } = require('./db');

const placesList = new mongoose.Schema({
  id: { type: String },
  title: { type: String },
  numberOfReviews: { type: Number },
  rating: { type: Number },
  lat: { type: Number },
  lon: { type: Number },
  price: { type: Number },
});

const topics = mongoose.model('Placeslist', placesList);

module.exports = topics;
