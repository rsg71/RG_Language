import validationSchemas from '../../../schemas/validation-schemas';
import { handleValidationResult, validateRequest } from '../../../utils/validation/validate-requests';


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

});

const mockResponse = () => {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.text = jest.fn().mockReturnValue(res);
  return res;
};

describe('handleValidationResult', () => {
    it('should return a 400 response', async () => {

        const res = mockResponse();
       
        handleValidationResult(res);

        expect(res.status).toHaveBeenCalledWith(400);
    });
})