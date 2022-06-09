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

module.exports = { getPlaces };
