import express from 'express';
import {
  createPost,
  deletePost,
  getAllPosts,
  getOnePost,
  updatePost,
} from '../controllers/postController.js';

import protect from '../MiddleWare/authMiddleware.js';

const router = express.Router();

router.route('/').get(getAllPosts).post(protect, createPost);
router
  .route('/:id')
  .get(protect, getOnePost)
  .patch(protect, updatePost)
  .delete(protect, deletePost);

export default router;
