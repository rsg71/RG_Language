import request from 'supertest';
import app from '../../app';
import { credentials, testUser } from '../../utils/get-cookie';
import db from '../db';
import { gCookie } from './user-routes.test';


// Setup connection to the database
beforeAll(async () => await db.connect());
beforeEach(async () => await db.clear());
afterAll(async () => await db.close());

describe('auth endpoints', () => {



    describe('POST /api/auth/login', () => {

        test('log in', async () => {
            await request(app).post('/api/auth/login').send(credentials).expect(200);
        })

        test("don't allow user who doesn't exist to log in", async () => {
            const nonExistentUserCredentials = {
                username: '000000',
                password: '123'
            }
            await request(app).post('/api/auth/login').send(nonExistentUserCredentials).expect(400);
        })
    })


    describe('GET /api/auth/logout', () => {

        test('log out', async () => {
            await request(app).post('/api/auth/login').send(credentials).expect(200);
            await request(app).get('/api/auth/logout').expect(200)
        })
    })

    describe('POST /api/auth/signup', () => {
        test('sign up', async () => {
            const signUpCredentials = {
                username: 'damian',
                password: '123'
            }
            await request(app).post('/api/auth/signup').send(signUpCredentials).expect(200);
        })

        test('sign up user that already exists', async () => {

            const signUpCredentials = {
                username: 'damian',
                password: '123'
            }
            await request(app).post('/api/auth/signup').send(signUpCredentials).expect(200);
            // Can't sign up twice
            await request(app).post('/api/auth/signup').send(signUpCredentials).expect(422);
        })
    })


    describe('GET page load login', () => {
        test('no req user', async () => {
            await request(app).get('/api/auth/page-load-login').expect(404);
        })

        test('already logged in', async () => {

            const res = await request(app).post('/api/auth/login').send(credentials).expect(200);

            const cookie = gCookie(res);
            const res2 = await request(app).get('/api/auth/page-load-login').set('Cookie', cookie).expect(200);
            expect(res2.body).toStrictEqual({
                'username': credentials.username,
                '_id': testUser._id
            })
        })
    })

})