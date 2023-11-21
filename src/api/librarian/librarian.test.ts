import request from 'supertest';

import app from '../../app';



describe('GET /api/v1/librarians', () => {
  it('should return all librarians and a status of 200',  async () => {
    request(app)
      .get('/api/v1/librarians')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response)=> {
        expect(response.body).toHaveProperty('length');
        expect(response.body).toHaveLength(1);
        //loop through the array and check if all the books have the properties of a book
        for (let i = 0;i < response.body.length;i++) {
          expect(response.body[i]).toHaveProperty('id');
          expect(response.body[i]).toHaveProperty('name');
          expect(response.body[i]).toHaveProperty('email');
          expect(response.body[i]).toHaveProperty('phone');
          expect(response.body[i]).toHaveProperty('address');
          expect(response.body[i]).toHaveProperty('status');
          expect(response.body[i]).toHaveProperty('available');
        }
      },
      (error)=>{
        console.log(error);
      });
  });
});
