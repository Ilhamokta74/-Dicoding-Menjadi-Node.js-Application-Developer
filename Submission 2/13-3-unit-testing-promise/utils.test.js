const { generateRandomStringProm } = require('./utils')

describe('generateRandomStringProm function', () => {
    // Skenario Negatif
    test('should reject when length is not a number', () => {
        return expect(generateRandomStringProm('1')).rejects.toThrow('Length must be a number');
    });

    test('should reject when length is less than 1', () => {
        return expect(generateRandomStringProm(0)).rejects.toThrow('Length must be greater than 0');
    });

    // Skenario Positif
    test('should resolve with a string of the specified length', () => {
        const length = 10;
        return generateRandomStringProm(length).then(result => {
            expect(typeof result).toBe('string');
            expect(result).toHaveLength(length);
        });
    });

    test('should only contain characters from the specified charset', () => {
        const length = 10;
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        return generateRandomStringProm(length).then(result => {
            for (let char of result) {
                expect(charset).toContain(char);
            }
        });
    });
});