import { Router } from 'express';
import * as BooksHandler from './books.handler';

const router = Router();

router.get('/', BooksHandler.findAll);
// router.get('/:id', BooksHandler.findOne);
// router.post('/', BooksHandler.create);
// router.put('/:id', BooksHandler.update);

export default router; 