// @TODO: impor fungsi unword dan reword dari utils.js
import { unword, reword } from './utils.js'
// @TODO: impor class UniqueArray dari UniqueArray.js
import UniqueArray from './UniqueArray.js'

console.log(unword('Hello'));
console.log(reword('H', 'e', 'l', 'l', 'o'));

const uniqueIntegers = new UniqueArray(1, 1, 2, 3, 3, 4, 5, 5);
console.log(uniqueIntegers);