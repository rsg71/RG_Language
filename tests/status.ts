require('dotenv').config();

//Require the dev-dependencies
import chai_ from 'chai';
const chaiHttp = require('chai-http');
import server from '../index';
chai_.should();



// // Authenticated Tests
const request = require('supertest');
const expect = chai_.expect;


chai_.use(chaiHttp);



describe('--- HEALTH CHECK of API', () => {

    describe('GET /api/status', () => {
        it('should return a 200 response and status with date time', function (done) {
            request(server)
                .get('/api/status')
                .end(function (err: any, res: any) {
                    if (err) {
                        throw new Error('error getting /api/status endpoint')
                    }
                    res.text.should.be.a('string');
                    expect(res.text).to.include('Status: API is working as of'); // this is case sensitive
                    res.should.have.status(200);
                    done();
                })
        });
    });

});

export {};