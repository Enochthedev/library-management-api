import { Router, Request, Response } from 'express';
import Librarian from './librarian.model';

const router = Router();

router.get<{}, Librarian[]>('/', (req: Request, res: Response) => {
  res.json({ 
    id: '1',
    name: 'John Doe',
    email: 'JohnDoe@gmail.com',
    phone: '1234567890',
    address: '123 Main St',
    status: 'Available',
    available: true,
  });
});


export default router;
