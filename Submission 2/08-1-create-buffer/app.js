/**
 * @TODO
 * Buatlah tiga buah buffer sebagai berikut:
 * 1. Bernama `unsafeBuffer` dan buatlah dengan cara unsafe dengan alokasi memori 100000 bytes.
 * 2. Bernama `safeBuffer` dan buatlah dengan cara safe dengan alokasi memori 100000 bytes.
 * 3. Bernama `stringBuffer` dan buatlah dari nilai string "Dicoding".
 */
// Membuat buffer dengan cara unsafe dengan alokasi memori 100000 bytes
const unsafeBuffer = Buffer.allocUnsafe(100000);

// Membuat buffer dengan cara safe dengan alokasi memori 100000 bytes
const safeBuffer = Buffer.alloc(100000);

// Membuat buffer dari nilai string "Dicoding"
const stringBuffer = Buffer.from('Dicoding');

// Untuk melihat buffer yang telah dibuat
console.log('unsafeBuffer:', unsafeBuffer);
console.log('safeBuffer:', safeBuffer);
console.log('stringBuffer:', stringBuffer);