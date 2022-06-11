const places = require('../models/schema');

const getPlaces = async (req, res) => {
  try {
    const placesList = await places.find();
    res.status(200);
    res.send(placesList);
  } catch (error) {
    res.sendStatus(500);
  }
};

const postPlaces = async (req, res) => {
  console.log(req.body);
  try {
    let result = await places.create({
      _source: {
        subtitle: req.body._source.subtitle,

        location: {
          lat: req.body._source.location.lat,
          lon: req.body._source.location.lon,
        },
        filters: {
          numberOfReviews: req.body._source.filters.numberOfReviews,
          rating: req.body._source.filters.rating,
          prices: req.body._source.filters.prices,
        },
      },
    });
    res.status(200);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports = { getPlaces, postPlaces };
