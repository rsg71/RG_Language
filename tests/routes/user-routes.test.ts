import request from 'supertest';
import app from '../../app';
import { credentials, formatCookie } from '../../utils/get-cookie';
import db from '../db';
import { languages } from '../services/userService.test';
import seedData from '../data/seedData';


const api = `/api/users/languages`;


export function gCookie(response: request.Response) {
    const cookies = response.headers['set-cookie'];
    const cookie = formatCookie(cookies[0]);
    return cookie;
}

const username = credentials.username;

/* Connecting to the database before each test. */
beforeAll(async () => await db.connect());
beforeEach(async () => await db.clear());
afterAll(async () => await db.close());


describe('users routes', () => {


    describe('POST /api/users/languages', () => {
        test('Add a language for the user', async () => {
            const response = await request(app).post('/api/auth/login').send(credentials);
            expect(response.statusCode).toBe(200);
            const cookie = gCookie(response);

            const language = languages.french;
            const url = `${api}`;
            const body = { 'language': language };
            await request(app).post(url).send(body).set('Cookie', cookie).expect(200);
        })

    })

    describe('GET /api/users/languages/{userId}', () => {
        it('Returns all languages for this user', async () => {

            const response = await request(app).post('/api/auth/login').send(credentials);
            expect(response.statusCode).toBe(200);
            const cookie = gCookie(response);


            const userId = '62bd0ef66eca0c6370c96046';
            const url = `${api}/${userId}`;
            const res = await request(app).get(url).set('Cookie', cookie);

            expect(res.statusCode).toEqual(200);
        })
    })

    test('GET /api/users/languages/{username}/languages/{language}', async () => {

        const response = await request(app).post('/api/auth/login').send(credentials);
        expect(response.statusCode).toBe(200);
        const cookie = gCookie(response);

        const language = 'spanish';
        const url = `${api}/${username}/languages/${language}`;
        const res2 = await request(app).get(url).set('Cookie', cookie);
        expect(res2.statusCode).toBe(200);
    })

    test('GET /api/users/languages/words/unlearned', async () => {
        const response = await request(app).post('/api/auth/login').send(credentials);
        expect(response.statusCode).toBe(200);
        const cookie = gCookie(response);

        const language = 'spanish';
        const url = `${api}/words/unlearned`;
        await request(app).get(url).query({ language }).set('Cookie', cookie).expect(200);
        // expect(res2.body).toBeInstanceOf(Array);
    })

    describe('GET /api/users/languages/{language}/for-review', () => {
        it('Returns words for review for given language for user', async () => {
            // authenticate, get cookie, then pass it to subsequent requests

            const response = await request(app).post('/api/auth/login').send(credentials);
            expect(response.statusCode).toBe(200);
            const cookie = gCookie(response);

            const language = 'spanish';
            const url = `${api}/${language}/for-review`;
            const res = await request(app).get(url).set('Cookie', cookie).expect(200);

            // expect(res.body).toBeInstanceOf(Array);
        })
    })

    describe('PATCH /api/users/languages/{language}/quiz/answer-word', () => {
        it('correctly answers a quiz word', async () => {
            const language = languages.spanish;
            const word = seedData.wordGroups[0].wordsLearned[0].word;
            const body = {
                word,
                language
            }
            const url = `${api}/${language}/quiz/answer-word`;

            const response = await request(app).post('/api/auth/login').send(credentials);
            expect(response.statusCode).toBe(200);
            const cookie = gCookie(response);

            await request(app).patch(url).send(body).query({ language, word }).set('Cookie', cookie).expect(200);
        })

    })

    describe('PATCH /api/users/languages/{language}/quiz/answer-word-incorrectly', () => {
        it('incorrectly answers a word', async () => {
            const language = languages.spanish;
            const word = seedData.wordGroups[0].wordsLearned[0].word;
            const body = {
                word,
                language
            }
            const url = `${api}/${language}/quiz/answer-word-incorrectly`;

            const response = await request(app).post('/api/auth/login').send(credentials);
            expect(response.statusCode).toBe(200);
            const cookie = gCookie(response);

            await request(app).patch(url).send(body).query({ language, word }).set('Cookie', cookie).expect(200);
        })
    })
})