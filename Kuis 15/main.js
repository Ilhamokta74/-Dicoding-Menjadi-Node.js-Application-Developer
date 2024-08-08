const fs = require('fs');
const path = require('path');

// Membuat variabel readable untuk membaca file.js dengan stream, 8 bytes per pembacaan
const readable = fs.createReadStream(path.join(__dirname, 'file.js'), { highWaterMark: 8 });

// Membuat variabel writable untuk menulis ke output.txt dengan stream
const writable = fs.createWriteStream(path.join(__dirname, 'output.txt'));

// Event listener untuk readable stream ketika data dibaca
readable.on('data', (chunk) => {
    // Menambahkan baris baru ke chunk yang dibaca dan menulisnya ke writable stream
    writable.write(chunk.toString() + '\n');
});

// Event listener untuk readable stream ketika pembacaan selesai
readable.on('end', () => {
    // Menutup writable stream
    writable.end();
    console.log('Proses pembacaan dan penulisan selesai.');
});

// Event listener untuk error handling pada readable stream
readable.on('error', (err) => {
    console.error('Error reading file:', err);
});

// Event listener untuk error handling pada writable stream
writable.on('error', (err) => {
    console.error('Error writing file:', err);
});
