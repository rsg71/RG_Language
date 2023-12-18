require('dotenv').config();
import request from 'supertest';
import app from '../../app';
import db from '../db';


/* Connecting to the database before each test. */
beforeAll(async () => db.connect());
beforeEach(async () => db.clear());
afterAll(async () => await db.close());



describe('--- HEALTH CHECK of API', () => {

    describe('GET /api/status', () => {
        it('should return a 200 response and status with date time', async () => {
            await request(app).get('/api/status').expect(200)
            //     // res.text.should.be.a('string');
            //     // expect(res.text).to.include('Status: API is working as of'); // this is case sensitive
            // })
        });
    });

});