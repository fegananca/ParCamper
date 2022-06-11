const { mongoose } = require('./db');

const placesList = new mongoose.Schema({
  // _score: { type: Number, required: false },
  _source: {
    subtitle: String,
    location: {
      lat: Number,
      lon: Number,
    },
    filters: {
      numberOfReviews: Number,
      review: [{ type: String, required: false }],
      rating: Number,
      // poiType: { type: String, required: false },
      prices: [
        {
          price: Number,
          // dateTo: { type: String, required: false },
          // discount: { type: Boolean, required: false },
          // dateFrom: { type: String, required: false },
        },
        // {
        //   price: { Number },
        //   dateTo: { type: String, required: false },
        //   discount: { type: Boolean, required: false },
        //   dateFrom: { type: String, required: false },
        // },
      ],
    },
    // translatedPermalinks: [{ type: String, required: false }],
    // sitecode: { type: Number, required: false },
    thumbnail: { type: String, required: false },
    // id: { type: Number, required: false },
    // type: { type: Number, required: false },
    // title: { type: Number, required: false },
    // permalink: { type: Number, required: false },
    // oldPermalink: { Stype: Number, required: false },
  },
});

const places = mongoose.model('hits', placesList);

module.exports = places;
