const router = require('express').Router();
const { getPlaces } = require('../controller/controller.js');

router.get('/places', getPlaces);
// router.get('/topics/:id', getTopicsByid);
// router.delete('/topics/:id', removeTopic);
// router.put('/topics', putTopics);
// router.put('/topics/:id/up', voteUp);
// router.put('/topics/:id/down', voteDown);
// router.post('/topics', postTopics);

module.exports = router;
