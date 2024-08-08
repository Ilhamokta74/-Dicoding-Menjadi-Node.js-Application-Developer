const data = require('./data');
const { Readable } = require('stream');

// Membuat Readable stream dari array data
const readable = new Readable({
  read() {
    data.forEach(item => this.push(item));
    this.push(null); // Menandakan akhir dari stream
  }
});

// Membaca dan menampilkan setiap nilai dari readable stream
readable.on('data', chunk => {
  console.log(chunk.toString());
});

// Menampilkan pesan "selesai membaca" ketika proses pembacaan sudah selesai
readable.on('end', () => {
  console.log('selesai membaca');
});
