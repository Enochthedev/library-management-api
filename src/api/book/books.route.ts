import { Router, Request, Response } from 'express';
import Book from './books.model';

const router = Router();

router.get<{}, Book[]>('/', (req: Request, res: Response) => {
  res.json({ 
    id: '1',
    title: 'The Lord of the Rings',
    isbn: '9780261103252',
    genre: 'Fantasy',
    publicationDate: new Date('1954-07-29'),
    language: 'English',
    summary: 'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
    pageCount: 1178,
    status: 'Available',
    available: true,
  });
});

export default router;