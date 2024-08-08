const { createWritable } = require('./utils');

const data = [];

// Membuat writable stream dari array data
const writable = createWritable(data);

// Menangani event 'finish' yang dipicu ketika semua data telah ditulis
writable.on('finish', () => {
  console.log('selesai menulis');
});

// Menulis setiap item ke dalam writable stream
const itemsToWrite = [
  'Jakarta',
  'Bandung',
  'Surabaya',
  'Medan',
  'Bali',
  'selesai menulis'
];

itemsToWrite.forEach(item => writable.write(item));

// Menutup writable stream setelah semua data ditulis
writable.end();
