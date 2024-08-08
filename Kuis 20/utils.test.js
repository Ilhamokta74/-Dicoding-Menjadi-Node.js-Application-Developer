const assert = require('assert');
const { properCaseProm } = require('./utils');

// Test skenario positif
async function testProperCaseProm() {
  try {
    // Test Case 1: Positif
    let result = await properCaseProm('hello world');
    assert.strictEqual(result, 'Hello World', 'Test Case 1 Failed');

    // Test Case 2: Positif
    result = await properCaseProm('node.js is awesome');
    assert.strictEqual(result, 'Node.js Is Awesome', 'Test Case 2 Failed');

    // Test Case 3: Positif
    result = await properCaseProm('a quick brown fox');
    assert.strictEqual(result, 'A Quick Brown Fox', 'Test Case 3 Failed');

    console.log('Semua test kasus positif berhasil.');
  } catch (err) {
    console.error(err);
  }
}

// Test skenario negatif
async function testProperCasePromError() {
  try {
    // Test Case 4: Negatif - Input bukan string
    try {
      await properCaseProm(123);
      throw new Error('Test Case 4 Failed: Expected function to reject.');
    } catch (err) {
      assert.strictEqual(err.message, 'value harus bertipe string', 'Test Case 4 Failed');
    }

    // Test Case 5: Negatif - Input null
    try {
      await properCaseProm(null);
      throw new Error('Test Case 5 Failed: Expected function to reject.');
    } catch (err) {
      assert.strictEqual(err.message, 'value harus bertipe string', 'Test Case 5 Failed');
    }

    // Test Case 6: Negatif - Input objek
    try {
      await properCaseProm({});
      throw new Error('Test Case 6 Failed: Expected function to reject.');
    } catch (err) {
      assert.strictEqual(err.message, 'value harus bertipe string', 'Test Case 6 Failed');
    }

    console.log('Semua test kasus negatif berhasil.');
  } catch (err) {
    console.error(err);
  }
}

// Jalankan semua test case
async function runTests() {
  await testProperCaseProm();
  await testProperCasePromError();
}

runTests();
