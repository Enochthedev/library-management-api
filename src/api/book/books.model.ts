import * as z from 'zod';

import { db } from '../../db';
import { WithId } from 'mongodb';

export const Book = z.object({
  id: z.string().min(1),
  title: z.string(),
  isbn: z.string().min(10),
  genre: z.string().optional(),
  publicationDate: z.date().optional(),
  language: z.string().optional(),
  summary: z.string().optional(),
  pageCount: z.number().nonnegative().optional(),
  status: z.string().optional(),
  available: z.boolean().default(true),
});

export type Book = z.infer<typeof Book>;
export type BookWithId = WithId<Book>;

export const Books = db.collection<Book>('books');


