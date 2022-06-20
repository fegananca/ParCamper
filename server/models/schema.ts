import mongoose from './db';

const placesList = new mongoose.Schema({
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
      prices: [
        {
          price: Number,
        },
      ],
    },
    thumbnail: { type: String, required: false },
  },
});

const places = mongoose.model('hits', placesList);

export default places;
