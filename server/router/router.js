const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const {
  getPlaces,
  postPlaces,
  postImages,
} = require('../controller/controller.js');

router.get('/places', getPlaces);
router.post('/places', postPlaces);

router.post('/images', upload.single('image'), postImages);

module.exports = router;
