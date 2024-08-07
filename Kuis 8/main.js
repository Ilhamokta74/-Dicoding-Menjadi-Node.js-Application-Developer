function detectTriangle(a, b, c) {
    // Validasi tipe data
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      throw new TypeError('arguments should be a number');
    }
    
    // Validasi nilai
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new RangeError('arguments should be greater than 0');
    }
  
    // Penentuan jenis segitiga
    if (a === b && b === c) {
      return 'segitiga sama sisi';
    }
  
    if (a === b || a === c || b === c) {
      return 'segitiga sama kaki';
    }
  
    return 'segitiga sembarang';
  }
  
  const result = detectTriangle(1, 2, 3);
  console.log(result);
  