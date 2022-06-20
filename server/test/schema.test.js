const express = require('express');
const router = require('../router/router');
const placesList = require('../models/schema');

const supertest = require('supertest');

const mongoose = require('mongoose');
const testingDb = 'test';

describe('Integration tests', () => {
  const app = express();
  app.use(express.json());
  app.use(router);

  const request = supertest(app);

  //before every test
  beforeAll(async () => {
    const url = `mongodb://localhost:27017/${testingDb}`;
    await mongoose.createConnection(url, { useNewUrlParser: true });
  });

  afterEach(async () => {
    await placesList.deleteMany();
  });

  it('Should save a place in the db', async () => {
    const place = {
      subtitle: 'Beautiful place',
      location: {
        lat: 41.00393,
        lon: 0.83686,
      },
      //numberOfReviews: 3,
      rating: 4,
      review: ['I love it!'],
      //prices: [2],

      thumbnail:
        'https://images.unsplash.com/photo-1534338332682-8c9735c0a2f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    };
    await request.post('/places').send(place);
    const placeCreated = await placesList.findOne({
      subtitle: 'Beautiful place',
    });

    expect(placeCreated._source.subtitle).toBe(place.subtitle);
  });
});

// _source: {
//   subtitle: String,
//   location: {
//     lat: Number,
//     lon: Number,
//   },
//   filters: {
//     numberOfReviews: Number,
//     review: [{ type: String, required: false }],
//     rating: Number,
//     prices: [
//       {
//         price: Number,
//       },
//     ],
//   },
//   thumbnail: { type: String, required: false },
// },
