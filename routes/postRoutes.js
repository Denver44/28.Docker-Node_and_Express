import express from 'express';
import {
  createPost,
  deletePost,
  getAllPosts,
  getOnePost,
  updatePost,
} from '../controllers/postController.js';

// import protect from '../middleware/authMiddleware';

const router = express.Router();

router.route('/').get(getAllPosts).post(createPost);
router.route('/:id').get(getOnePost).patch(updatePost).delete(deletePost);

export default router;
