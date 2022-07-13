const places = require('../models/schema');
const { uploadFile, getFileStream } = require('../s3');

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
  try {
    let result = await places.create({
      _source: {
        subtitle: req.body.subtitle,
        location: {
          lat: req.body.location.lat,
          lon: req.body.location.lon,
        },
        filters: {
          //numberOfReviews: ,
          rating: req.body.rating,
          review: req.body.review,
          // prices: req.body.prices,
        },
        thumbnail: req.body.thumbnail,
      },
    });

    console.log(result);
    res.status(201);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const getImages = async (req, res) => {
  const key = req.params.key;
  const readStream = getFileStream(key);
  readStream.pipe(res);
};

const postImages = async (req, res) => {
  try {
    const file = req.file;
    console.log(file);
    const result = await uploadFile(file);
    console.log(result);
    // const postimage = await places.create({
    //   _source: {
    //     thumbnail: result.Location,
    //   },
    // });
    res.status(200);
    res.send(result.Location);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = { getPlaces, postPlaces, postImages, getImages };
