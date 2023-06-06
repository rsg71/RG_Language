require('dotenv').config();

//Require the dev-dependencies
import chai_ from 'chai';
const chaiHttp = require('chai-http');
import server from '../index';
chai_.should();



// // Authenticated Tests
var request = require('supertest');
chai_.expect;


chai_.use(chaiHttp);


describe('--- AUTH TEST of API', () => {

    describe('GET /test', () => {
        it('denies the request for an authenticated route', function (done) {
            request(server)
                .get('/api/users/languages/1234')
                .end(function (err: any, res: any) {
                    if (err) {
                        throw new Error('error getting /test endpoint')
                    }
                    res.text.should.be.a('string');
                    res.should.have.status(401);
                    done();
                })
        });
    });

});

export {};