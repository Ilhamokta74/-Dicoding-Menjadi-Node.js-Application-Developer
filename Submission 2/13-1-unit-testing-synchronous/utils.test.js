const { generateRandomStringSync } = require('./utils')


describe('generateRandomStringSync function', () => {
    test('should throw error when length is not a number', () => {
        expect(() => generateRandomStringSync('1')).toThrow('Length must be a number');
    });

    test('should throw error when length is less than 1', () => {
        expect(() => generateRandomStringSync(0)).toThrow('Length must be at least 1');
    });

    test('should return a string with the specified length', () => {
        const result = generateRandomStringSync(10);
        expect(typeof result).toBe('string');
        expect(result.length).toBe(10);
    });
});