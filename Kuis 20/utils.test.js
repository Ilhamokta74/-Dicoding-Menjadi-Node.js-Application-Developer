// utils.test.js
const assert = require('assert');
const { properCaseProm } = require('./utils');

// Unit test untuk skenario positif
(async () => {
  try {
    const result = await properCaseProm('hello world');
    assert.strictEqual(result, 'Hello World', 'Harusnya "Hello World"');
    console.log('Skenario positif berhasil!');
  } catch (error) {
    console.error('Skenario positif gagal:', error);
  }
})();

// Unit test untuk skenario negatif
(async () => {
  try {
    await properCaseProm(123); // Input bukan string
    console.error('Skenario negatif gagal: Error tidak dilempar');
  } catch (error) {
    assert.strictEqual(error.message, 'Input must be a string', 'Pesan error tidak sesuai');
    console.log('Skenario negatif berhasil!');
  }
})();
