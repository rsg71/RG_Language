//During the test the env variable is set to test
process.env.NODE_ENV = 'test';


require('dotenv').config();

//Require the dev-dependencies
let chai_ = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai_.should();



// // Authenticated Tests
var request = require('supertest');
var expect = chai_.expect;


chai_.use(chaiHttp);



describe('--- HEALTH CHECK of API', () => {

    describe('GET /test', () => {
        it('should return a 200 response and status with date time', function (done) {
            request(server)
                .get('/test')
                .end(function (err: any, res: any) {
                    if (err) {
                        throw new Error('error getting /test endpoint')
                    }
                    res.text.should.be.a('string');
                    expect(res.text).to.include('/test working as of');
                    res.should.have.status(200);
                    done();
                })
        });
    });

});
