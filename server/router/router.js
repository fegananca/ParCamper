const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

//checkout getImages
const {
  getPlaces,
  postPlaces,
  postImages,
  getImages,
} = require('../controller/controller.js');

router.get('/places', getPlaces);
router.post('/places', postPlaces);
// router.get('/images', getImages);
router.post('/images', upload.single('image'), postImages);

module.exports = router;
