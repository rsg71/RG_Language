import UserService, { handleError } from '../../services/userService';
import db from '../db';
import Models from '../../models/index';
import seedData from '../data/seedData';

let userService: UserService;
const user = seedData.users[0];
const userId = user._id.toString();

export enum languages {
    spanish = 'spanish',
    french = 'french'
}


beforeAll(async () => {
    await db.connect();
    userService = new UserService(Models.UserCollection);
});

beforeEach(async () => await db.clear());
afterAll(async () => await db.close());




describe('User service', () => {

    describe('FindLanguage', () => {
        test('find language', async () => {
            const cb = async () => await userService.FindLanguage(languages.spanish, userId);
            expect(cb).not.toThrow();
        })
    })

    describe('FindAllLanguagesForUser', () => {
        test('find all languages for user', async () => {
            const cb = async () => await userService.FindAllLanguagesForUser(userId)
            expect(cb).not.toThrow();
        })
    })

    describe('CreateUserLanguage', () => {

        test('create user language', async () => {
            const cb = async () => await userService.CreateUserLanguage(languages.french)
            expect(cb).not.toThrow();
        })
    })

    describe('assembleNewLanguageForUser', () => { })

    describe('validateAndCreateLanguageForUser', () => { })

    describe('answerWordCorrectly', () => {
        test('answer word correctly', async () => {
            const wordToAnswer = seedData.wordGroups[0].wordsLearned[0].word;
            const cb = async () => await userService.answerWordCorrectly(userId, wordToAnswer, languages.spanish);
            expect(cb).not.toThrow();
        })
    })

    describe('answerWordIncorrectly', () => {
        test('answer incorrectly', async () => {
            const wordToAnswer = seedData.wordGroups[0].wordsLearned[0].word;
            const cb = async () => await userService.answerWordIncorrectly(userId, wordToAnswer, languages.spanish);
            expect(cb).not.toThrow();
        })
    })

    describe('findAllUnlearnedWordsForGivenLanguageForUser', () => {
        test('find all unlearned words in language for user', async () => {
            const cb = async () => await userService.findAllUnlearnedWordsForGivenLanguageForUser(userId, languages.french)
            expect(cb).not.toThrow();
        })
    })

    describe('getWordsForReviewForLanguageForUser', () => {
        test('get words for review for language for user', async () => {

            const cb = async () => await userService.getWordsForReviewForLanguageForUser(userId, languages.spanish)
            expect(cb).not.toThrow();
        })
    })

    describe('error handling', () => {

        it('should throw an error if we pass an error', () => {
            const msg = 'something has gone wrong';
            const error = new Error(msg);

            expect(() => handleError(error)).toThrowError(msg);
        });

        it('should throw a generic error message if we pass something that is not an error', () => {
            const arg = 123;
            expect(() => handleError(arg)).toThrowError('An error has occurred');
        })
    })
})