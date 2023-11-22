import request from 'supertest';

import app from '../../app';
import { Books } from './books.model';

beforeAll(async () => {
  try {
    jest.setTimeout(30000);
    await Books.drop();
  } catch (error) {
    // console.log(error);
  }
  
});

describe('GET /api/v1/books', () => {
  it('should return all books and a status of 200', async () => {
    const response = await request(app).get('/api/v1/books');

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(0);
    expect(response.body).toEqual([]); // Instead of manually looping through the array, use the `.toEqual()` matcher to compare it to an empty array
  });
});
