function greet(name) {
    return `Hello, ${name}!`;
}

// @TODO: Lengkapi kode untuk mendeteksi main module
// Jika main module, cetak pesan "executing utils.js as main module" dan cetak hasil pemanggilan fungsi greet dengan argumen 'John'
if (require.main === module) {
    console.log("executing utils.js as main module");
    const cabe = greet(`John`);
    console.log(cabe);

    // Jika bukan main module, ekspor fungsi greet secara langsung
} else {
    module.exports = greet;
}