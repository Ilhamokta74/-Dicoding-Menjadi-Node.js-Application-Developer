// @TODO: impor fungsi unword dan reword dari utils.js
import { unword, reword } from './utils.js'
// @TODO: impor class UniqueArray dari UniqueArray.js
import UniqueArray from './UniqueArray.js'

console.log(unword('Hello'));
console.log(reword('H', 'e', 'l', 'l', 'o'));

const uniqueIntegers = new UniqueArray(1, 1, 2, 3, 3, 4, 5, 5);
console.log(uniqueIntegers);
import * as assert  from 'assert';

assert.equal(typeof unword, 'function', 'you must import function `unword`');
assert.equal(typeof reword, 'function', 'you must import function `reword`');
assert.deepEqual(unword('Hello'), 'Hello'.split(''), '`unword` not working as supposed to be.');
assert.equal(reword('H', 'e', 'l', 'l', 'o'), 'Hello', '`reword` not working as supposed to be.');
assert.equal(typeof UniqueArray, 'function', 'you must "directly" import class `UniqueArray`');
assert.equal(new UniqueArray(1, 1, 2, 3, 3, 4, 5, 5).length, 5, 'UniqueArray is not working as supposed to be.');