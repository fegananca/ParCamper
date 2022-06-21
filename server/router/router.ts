import { Router } from 'express';
import multer from 'multer';
import controller from '../controller/controller';
//multer is used as middleware to transform the file into memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = Router();

router.get('/places', controller.getPlaces);
router.post('/places', controller.postPlaces);
router.post('/images', upload.single('image'), controller.postImages);

//created only for test
router.delete('/places/remove', controller.removeAllTestData);

export default router;
