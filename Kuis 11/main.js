/**
 * @TODO
 * Lengkapi kode di dalam fungsi convertUTF8ToHex agar dapat
 * mengembalikan nilai perubahan string UTF8 menjadi hexadesimal
 */
 
function convertUTF8ToHex(str) {
    // Buat buffer dari string UTF8
    const buffer = Buffer.from(str, 'utf8');
    
    // Konversi buffer ke string hexadesimal
    return buffer.toString('hex');
  }
  
  // Contoh penggunaan:
  console.log(convertUTF8ToHex('Hello')); // 48656c6c6f
  console.log(convertUTF8ToHex('Selamat datang!')); // 53656c616d617420646174616e67
  