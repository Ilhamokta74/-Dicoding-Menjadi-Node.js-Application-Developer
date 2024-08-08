const assert = require('assert');
const { properCaseSync } = require('./utils');

// Test skenario positif
assert.strictEqual(properCaseSync('hello world'), 'Hello World', 'Test Case 1 Failed');
assert.strictEqual(properCaseSync('node.js is awesome'), 'Node.js Is Awesome', 'Test Case 2 Failed');
assert.strictEqual(properCaseSync('a quick brown fox'), 'A Quick Brown Fox', 'Test Case 3 Failed');

// Test skenario negatif
assert.throws(() => properCaseSync(123), {
    name: 'Error',
    message: 'value must be a string'
}, 'Test Case 4 Failed');

assert.throws(() => properCaseSync(null), {
    name: 'Error',
    message: 'value must be a string'
}, 'Test Case 5 Failed');

assert.throws(() => properCaseSync({}), {
    name: 'Error',
    message: 'value must be a string'
}, 'Test Case 6 Failed');

// Jika semua assert berhasil
console.log('Semua test case berhasil.');
