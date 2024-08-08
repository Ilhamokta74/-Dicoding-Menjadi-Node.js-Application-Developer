const assert = require('assert');
const { properCaseProm } = require('./utils');

// Test positive scenario
assert.doesNotReject(async () => {
  const result = await properCaseProm('hello world');
  assert.strictEqual(result, 'Hello World');
  console.log('Positive scenario passed successfully');
});

// Test negative scenario
assert.rejects(async () => {
  await properCaseProm(123); // Passing a non-string value
}, {
  name: 'Error',
  message: 'value harus bertipe string'
});
console.log('Negative scenario passed successfully');