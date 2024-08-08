const { generateRandomString } = require('./utils')


describe('generateRandomString function', () => {
    // Skenario Negatif
    test('should throw error when length is not a number', (done) => {
        generateRandomString('1', (err, result) => {
            expect(err).toBeTruthy();
            expect(err.message).toBe('Length must be a number');
            done();
        });
    });

    test('should throw error when length is less than 1', (done) => {
        generateRandomString(0, (err, result) => {
            expect(err).toBeTruthy();
            expect(err.message).toBe('Length must be greater than 0');
            done();
        });
    });

    // Skenario Positif
    test('should return a string with the specified length', (done) => {
        const length = 10;
        generateRandomString(length, (err, result) => {
            expect(err).toBeNull();
            expect(result).toBeTruthy();
            expect(result.length).toBe(length);
            done();
        });
    });

    test('should only contain characters from the specified charset', (done) => {
        const length = 10;
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        generateRandomString(length, (err, result) => {
            expect(err).toBeNull();
            for (let char of result) {
                expect(charset).toContain(char);
            }
            done();
        });
    });
});