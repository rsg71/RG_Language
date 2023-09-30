import { determineSeedToUse } from '../../utils/seederFunctions';

describe('seederFunctions', () => {
    it('should return the correct seeder for french', () => {
        const seedResult = determineSeedToUse('french');
        expect(seedResult).not.toBe(null);
    });

    it('should return the correct seeder for german', () => {
        const seedResult = determineSeedToUse('german');
        expect(seedResult).not.toBe(null);
    });

    it('should return the correct seeder for italian', () => {
        const seedResult = determineSeedToUse('italian');
        expect(seedResult).not.toBe(null);
    });

    it('should return the correct seeder for portuguese', () => {
        const seedResult = determineSeedToUse('portuguese');
        expect(seedResult).not.toBe(null);
    });

    it('should return the correct seeder for spanish', () => {
        const seedResult = determineSeedToUse('spanish');
        expect(seedResult).not.toBe(null);
    });
})