import express from 'express';
import { categoryPost, getAllCategories, getDetails } from '../controllers/categoryController.js';

const router = express.Router();

router.post('/api/categoryPost', categoryPost);
router.get('/api/categoryGet', getAllCategories);
router.get('/api/categoryDetails', getDetails);



export default router;  