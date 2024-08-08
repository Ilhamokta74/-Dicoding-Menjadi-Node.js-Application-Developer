const fs = require('fs');
const path = require('path');

// Fungsi untuk membaca file, mengubah teks menjadi uppercase, dan menulisnya ke file baru
function convertFileToUpperCase(inputFilePath, outputFilePath) {
    fs.readFile(inputFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        
        const upperCaseData = data.toUpperCase();

        fs.writeFile(outputFilePath, upperCaseData, (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            
            console.log(`File has been written to ${outputFilePath}`);
        });
    });
}

// Mendefinisikan path dari input dan output file
const inputFilePath = path.join(__dirname, 'file.js');
const outputFilePath = path.join(__dirname, 'output.txt');

// Menjalankan fungsi untuk konversi file
convertFileToUpperCase(inputFilePath, outputFilePath);
