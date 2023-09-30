require('dotenv').config();
import server from '../index';
import request from 'supertest';

//Require the dev-dependencies
// import chai_ from 'chai';
// const chaiHttp = require('chai-http');
// chai_.should();



// // Authenticated Tests
// const expect = chai_.expect;


// chai_.use(chaiHttp);



describe('--- HEALTH CHECK of API', () => {

    describe('GET /api/status', () => {
        it('should return a 200 response and status with date time', async () => {
            const res = await request(server).get('/api/status')

            expect(res.statusCode).toEqual(200);
            // .end(function (err: any, res: any) {
            //     // if (err) throw new Error(err.message);

            // });
            // .end(function (err: any, res: any) {
            //     if (err) {
            //         throw new Error('error getting /api/status endpoint')
            //     }
            //     // res.text.should.be.a('string');
            //     // expect(res.text).to.include('Status: API is working as of'); // this is case sensitive
            //     // res.should.have.status(200);
            // })
        });
    });

});