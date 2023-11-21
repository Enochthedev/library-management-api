import { Router, Request, Response } from 'express';
import { BookWithId, Books } from './books.model';

const router = Router();

router.get('/', async (req: Request, res: Response<BookWithId[]>) => {
  const books = await Books.find();
  const result = await books.toArray();
  res.json(result);
});

export default router; 