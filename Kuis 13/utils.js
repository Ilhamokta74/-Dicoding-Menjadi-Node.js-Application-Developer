const { Writable } = require('stream');

/**
 * 
 * @param {Array} data - array yang akan diisi dengan data dari writable
 */
function createWritable(data) {
  // Hindari mengubah implementasi kode di bawah ini
  return new Writable({
    decodeStrings: false,
    write(chunk, encoding, callback) {
      data.push(chunk);
      this.__writeHistories = this.__writeHistories ? [...this.__writeHistories, chunk] : [chunk];
      callback();
    }
  });
}

module.exports = { createWritable };