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

  beforeAll(async () => {
    const url = `mongodb://localhost:27017/${testingDb}`;
    mongoose.createConnection(url, { useNewUrlParser: true });
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
      rating: 4,
      review: ['I love it!'],
      thumbnail:
        'https://images.unsplash.com/photo-1534338332682-8c9735c0a2f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    };
    await request.post('/places').send(place);
    const placeCreated = await placesList.findOne({
      subtitle: 'Beautiful place',
    });

    expect(placeCreated._source.subtitle).toBe(place.subtitle);
  });

  it('Should return data from db', async () => {
    const placeOne = {
      subtitle: 'Beautiful place',
      location: {
        lat: 41.00393,
        lon: 0.83686,
      },
      rating: 4,
      review: ['I love it!'],
      thumbnail:
        'https://images.unsplash.com/photo-1534338332682-8c9735c0a2f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    };
    await request.post('/places').send(placeOne);

    const placeTwo = {
      subtitle: 'Bad place',
      location: {
        lat: 40.00324,
        lon: 3.82852,
      },
      rating: 1,
      review: ['I hate it!'],
      thumbnail:
        'https://images.unsplash.com/photo-1625293961325-170b642843dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    };
    await request.post('/places').send(placeTwo);

    await request.get('/places');
    const placeCreated = await placesList.find({});

    const arr = [placeOne, placeTwo];
    placeCreated.forEach((element, index) => {
      expect(element._source.subtitle).toBe(arr[index].subtitle);
    });
  });
});
