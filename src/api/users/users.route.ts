import { Router, Request, Response } from 'express';
import User from './users.model';

const router = Router();

router.get<{}, User[]>('/', (req: Request, res: Response) => {
  res.json({ 
    id: '1',
    name: 'John Dan',
    email: 'JohnDan@gmail.com',
    phone: '08012345678',
    address: 'No 1, Lagos Street, Lagos',
    status: 'Active',
    available: true,
  });
});


export default router;