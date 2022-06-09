const { mongoose } = require('./db');

const placesList = new mongoose.Schema({
  _id: { String },
  _source: {
    subtitle: { String },
    location: { lon: { Number }, lat: { Number } },
    filters: { numberOfReviews: { Number }, rating: { Number } },
  },
});

const places = mongoose.model('hits', placesList);

module.exports = places;
