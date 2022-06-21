import express from 'express';
import router from '../router/router';
import mockdata from './mockdata';
import placesList from '../models/schema';
import supertest from 'supertest';

describe('Integration tests', () => {
  const app = express();
  app.use(express.json());
  app.use(router);

  const request = supertest(app);

  afterEach(async () => {
    await placesList.deleteMany();
  });

  it('Should save a place in the db', async () => {
    const place = mockdata.place;
    await request.post('/places').send(place);
    const placeCreated = await placesList.findOne({
      subtitle: 'Beautiful place',
    });

    expect(placeCreated._source.subtitle).toBe(place.subtitle);
  });

  it('Should return data from db', async () => {
    const placeOne = mockdata.place;
    await request.post('/places').send(placeOne);

    const placeTwo = mockdata.placeTwo;
    await request.post('/places').send(placeTwo);

    await request.get('/places');
    const placeCreated = await placesList.find({});

    const arr = mockdata.places;
    placeCreated.forEach((element, index) => {
      expect(element._source.subtitle).toBe(arr[index].subtitle);
    });
  });
});
