import { capitalizeFirstLetter, determineFlag } from "../../utils/helperFunctions";

describe('capitalizeFirstLetter', () => {

    it('should return a word with the first letter capitalized', () => {
        const word = 'ice';
        const result = capitalizeFirstLetter(word);
        expect(result).toBe('Ice');
    });

})

describe('determineFlag', () => {

    it('should return determine the flag based on input', () => {

        const brazil = determineFlag('portuguese');
        const france = determineFlag('french');
        const germany = determineFlag('german');
        const italy = determineFlag('italian');
        const spain = determineFlag('spanish');
        const sweden = determineFlag('swedish');
        
        expect(brazil).toBe('brazil');
        expect(france).toBe('france');
        expect(germany).toBe('germany');
        expect(italy).toBe('italy');
        expect(spain).toBe('spain');
        expect(sweden).toBe('sweden');
    });

})