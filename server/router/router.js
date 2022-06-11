const router = require('express').Router();
const {
  getPlaces,
  postPlaces,
  postImages,
} = require('../controller/controller.js');

router.get('/places', getPlaces);
// router.get('/topics/:id', getTopicsByid);
// router.delete('/topics/:id', removeTopic);
router.post('/places', postPlaces);
// router.put('/topics/:id/up', voteUp);
// router.put('/topics/:id/down', voteDown);
router.post('/images', postImages);

module.exports = router;
