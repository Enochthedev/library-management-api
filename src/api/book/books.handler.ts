import {  Request, Response, NextFunction } from 'express';
import { InsertOneResult } from 'mongodb';
import { Book, BookWithId, Books } from './books.model';

export async function findAll(req: Request, res: Response<BookWithId[]>, next: NextFunction) {
  try {
    const books = await Books.find();
    const result = await books.toArray();
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function createOne(req: Request<{}, InsertOneResult<Book>, Book>, res: Response<InsertOneResult<Book>>, next: NextFunction) {
  try {
    const validateBody = await Book.parse(req.body);
    const result = await Books.insertOne(validateBody);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

