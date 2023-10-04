import { handleError } from '../../services/user';

describe('User service', () => {
    it('should throw an error if we pass an error', async () => {
        const msg = 'something has gone wrong';
        const error = new Error(msg);

        await expect(handleError(error)).rejects.toThrow();
    });

    it('should throw an error if we pass something that is not a tyepof error', async () => {
        const arg = 123;

        await expect(handleError(arg)).rejects.toThrow();
    })
})