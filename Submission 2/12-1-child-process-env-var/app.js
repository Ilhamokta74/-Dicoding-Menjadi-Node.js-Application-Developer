/**
 * @TODO
 * 1. Kembalikan fungsi `main` dengan child process yang menjalankan berkas `run-me.js`.
 * 2. Di mana, child process tersebut **hanya** menetapkan environment variable dengan nama `MY_ENV_VAR`.
 * 3. Nilai dari environment variable tersebut diambil dari argumen `myEnvVar`.
 *
 * Catatan:
 * 1. Jangan ubah kode apa pun di luar dari tanda yang diberikan.
 * 2. Jangan menuliskan "node" secara hard-coded, gunakanlah `process.execPath`.
 * 3. Anda bisa menggunakan varian fungsi `spawn` atau `exec` untuk menyelesaikan tantangan ini.
 */

// Tulis kode impor di bawah ini

const { spawnSync } = require('child_process');

function main(myEnvVar) {
    // Tulis jawaban Anda di bawah ini
    const child = spawnSync(process.execPath, ['run-me.js'], {
        env: { MY_ENV_VAR: myEnvVar }
    });

    // Proses exit code setelah menjalankan child process
    process.exit(0);

    return child;
}

module.exports = main;