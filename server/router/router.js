const router = require('express').Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//checkout getImages
const {
  getPlaces,
  postPlaces,
  postImages,
  getImages,
} = require('../controller/controller.js');

router.get('/places', getPlaces);
router.post('/places', postPlaces);
router.post('/images', upload.single('image'), postImages);

module.exports = router;
