import request from 'supertest';

import app from '../../app';



describe('GET /api/v1/librarians', () => {
  it('should return all books and a status of 200',  async () => {
    request(app)
      .get('/api/v1/books')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response)=> {
        expect(response.body).toHaveProperty('length');
        expect(response.body).toHaveLength(1);
        //loop through the array and check if all the books have the properties of a book
        for (let i = 0;i < response.body.length;i++) {
          expect(response.body[i]).toHaveProperty('id');
          expect(response.body[i]).toHaveProperty('title');
          expect(response.body[i]).toHaveProperty('isbn');
          expect(response.body[i]).toHaveProperty('genre');
          expect(response.body[i]).toHaveProperty('publicationDate');
          expect(response.body[i]).toHaveProperty('language');
          expect(response.body[i]).toHaveProperty('summary');
          expect(response.body[i]).toHaveProperty('pageCount');
          expect(response.body[i]).toHaveProperty('status');
          expect(response.body[i]).toHaveProperty('available');
        }
      },
      (error)=>{
        console.log(error);
      });
  });
});
