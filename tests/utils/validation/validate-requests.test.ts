import validationSchemas from '../../../schemas/validation-schemas';
import { validateRequest } from '../../../utils/validation/validate-requests';


describe('validate-request', () => {
    it('should return true if the data is valid', async () => {

        const inputs = {
            language: 'french',
            userId: '5099803df3f4948bd2f98391'
        }

        const schema = validationSchemas.addLanguageSchema;
        const data = { inputs, schema };

        const result = await validateRequest(data);

        expect(result).toBe(true);
    });

    it('should return false if the data is not valid', async () => {

        const inputs = {
            language: 'blah',
            userId: '123abc'
        }

        const schema = validationSchemas.addLanguageSchema;
        const data = { inputs, schema };

        const result = await validateRequest(data);

        expect(result).toBe(false);
    });

})