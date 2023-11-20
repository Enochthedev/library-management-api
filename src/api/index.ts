import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import emojis from './emojis';
import Book from './books/books.route';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});


router.use('/emojis', emojis);
router.use('/books', Book);

export default router;
