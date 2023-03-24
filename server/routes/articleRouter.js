import express from 'express';
import { articleDelete, articleEdit, articlePost, getAllArticles } from '../controllers/articleController.js';

const router = express.Router();

router.post('/api/articlePost', articlePost);
router.get('/api/articleGet', getAllArticles);
router.put('/api/articleEdit/:id', articleEdit);
router.delete('/api/articleDelete/:id', articleDelete);





export default router;