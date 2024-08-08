const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');

// Membaca perintah dari berkas command.js
const commandPath = path.join(__dirname, 'command.js');
const command = fs.readFileSync(commandPath, 'utf8').trim();

// Menjalankan perintah menggunakan child process
exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing command: ${error}`);
        return;
    }

    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }

    // Mencetak STDOUT dari child process ke terminal
    console.log(stdout);
});
