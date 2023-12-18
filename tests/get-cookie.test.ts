import {credentials, formatCookie} from '../utils/get-cookie';
describe('get-cookie', () => {
    it('should format a cookie', () => {
        const str = 'access_token=123abc; Path=/; HttpOnly';

        expect(formatCookie(str)).toBe('access_token=123abc')
    })

    test('credentials', () => {
        expect(credentials).toStrictEqual({
            username: 'rg',
            password: '123'
        })
    })
})