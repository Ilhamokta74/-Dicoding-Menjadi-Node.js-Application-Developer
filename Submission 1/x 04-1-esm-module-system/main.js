// @TODO: impor fungsi unword dan reword dari utils.js
const {unword, reword} = require( "./utils");
// @TODO: impor class UniqueArray dari UniqueArray.js
const UniqueArray = require( "./UniqueArray" );

console.log(unword('Hello'));
console.log(reword('H', 'e', 'l', 'l', 'o'));

const uniqueIntegers = new UniqueArray(1, 1, 2, 3, 3, 4, 5, 5);
console.log(uniqueIntegers);