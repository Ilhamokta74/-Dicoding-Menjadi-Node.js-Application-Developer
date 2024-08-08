const { Readable } = require('stream'); // Mengimpor Readable stream dari modul 'stream'
const data = require('./data'); // Mengimpor data dari file 'data.js'

// Membuat Readable stream dari array data
const readable = Readable.from(data);

// Menangani event 'data' untuk membaca dan menampilkan setiap chunk dari stream
readable.on('data', (chunkOfData) => {
  // Mengonversi chunk dari buffer ke string dan menampilkannya di console
  console.log(chunkOfData.toString());
});

// Menangani event 'end' yang dipicu ketika semua data telah dibaca
readable.on('end', () => {
  // Menampilkan pesan 'selesai membaca' ketika proses pembacaan selesai
  console.log('selesai membaca');
});
