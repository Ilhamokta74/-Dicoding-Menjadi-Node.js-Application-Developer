const assert = require('assert');
const { properCase } = require('./utils');

// Fungsi helper untuk menangani fungsi async dengan callback
function testProperCase(value, expected, done) {
  properCase(value, (err, result) => {
    if (err) {
      done(err);
    } else {
      try {
        assert.strictEqual(result, expected);
        done();
      } catch (assertionError) {
        done(assertionError);
      }
    }
  });
}

// Test skenario positif
testProperCase('hello world', 'Hello World', (err) => {
  if (err) throw err;
  console.log('Test Case 1 Passed');
});

testProperCase('node.js is awesome', 'Node.js Is Awesome', (err) => {
  if (err) throw err;
  console.log('Test Case 2 Passed');
});

testProperCase('a quick brown fox', 'A Quick Brown Fox', (err) => {
  if (err) throw err;
  console.log('Test Case 3 Passed');
});

// Test skenario negatif
function testProperCaseError(value, expectedError, done) {
  properCase(value, (err, result) => {
    try {
      assert.ok(err);
      assert.strictEqual(err.message, expectedError);
      assert.strictEqual(result, undefined);
      done();
    } catch (assertionError) {
      done(assertionError);
    }
  });
}

testProperCaseError(123, 'value harus bertipe string', (err) => {
  if (err) throw err;
  console.log('Test Case 4 Passed');
});

testProperCaseError(null, 'value harus bertipe string', (err) => {
  if (err) throw err;
  console.log('Test Case 5 Passed');
});

testProperCaseError({}, 'value harus bertipe string', (err) => {
  if (err) throw err;
  console.log('Test Case 6 Passed');
});
