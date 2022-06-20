import { Router } from 'express';
import multer from 'multer';
import controller from '../controller/controller';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = Router();

router.get('/places', controller.getPlaces);
router.post('/places', controller.postPlaces);
router.post('/images', upload.single('image'), controller.postImages);

export default router;
