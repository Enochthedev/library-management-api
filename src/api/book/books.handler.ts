import {  Request, Response, NextFunction } from 'express';
import { BookWithId, Books } from './books.model';

export async function findAll(req: Request, res: Response<BookWithId[]>, next: NextFunction) {
  try {
    const books = await Books.find();
    const result = await books.toArray();
    res.json(result);
  } catch (error) {
    next(error);
  }
}

