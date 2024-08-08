/**
 * @TODO:
 * 1. Baca semua nama folder yang ada di dalam direktori ini
 * 2. Tulis semua nama folder yang ada di dalam direktori ini ke dalam file `out.txt`
 * 3. Pastikan direktori yang ditulis pada `out.txt` diurutkan secara ascending (A-Z).
 *
 * Contoh:
 * Jika dalam direktori ini terdapat folder `aaa`, `bbb`, dan `ccc`,
 * maka file `out.txt` akan berisi -> aaa,bbb,ccc
 *
 * Catatan:
 * - Anda bisa men-generate kembali folder-folder dengan menjalankan berkas `generate-folders.js`
 * - Hindari untuk mengubah kode yang sudah ada sebelumnya
 */

const fs = require('fs');
const path = require('path');

function readDirAndWriteFile() {
    // Tulis jawaban di bawah ini
    const directoryPath = __dirname;

    // Step 1: Read all items in the current directory
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return console.error('Unable to scan directory: ' + err);
        }

        // Step 2: Filter only directories
        const folders = files.filter(file => {
            const filePath = path.join(directoryPath, file);
            return fs.statSync(filePath).isDirectory();
        });

        // Step 3: Sort folders in ascending order
        folders.sort((a, b) => a.localeCompare(b));

        // Step 4: Write the folder names into 'out.txt'
        fs.writeFile('out.txt', folders.join(','), err => {
            if (err) {
                return console.error('Error writing to file: ' + err);
            }
            console.log('Folder names written to out.txt');
        });
    });

}

readDirAndWriteFile();