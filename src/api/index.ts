import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import emojis from './emojis';
import Book from './books/books.route';
import Librarian from './librarian/librarian.route';


const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});


router.use('/emojis', emojis);
router.use('/books', Book);
router.use('/librarians', Librarian);


export default router;
