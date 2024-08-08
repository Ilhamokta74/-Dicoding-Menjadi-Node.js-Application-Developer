const os = require('os');
const { execSync } = require('child_process');

// Mendapatkan informasi platform yang digunakan
const platform = os.platform();

// Mendapatkan informasi UNIX Name (uname)
const unixName = execSync('uname').toString().trim();

// Mendapatkan informasi total kapasitas memori
const totalMemory = os.totalmem();

console.log(`Platform: ${platform}`);
console.log(`UNIX Name: ${unixName}`);
console.log(`Total Memory: ${totalMemory}`);
