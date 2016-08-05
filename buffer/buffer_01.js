// Buffer 01 What is a buffer?

'use strict';

const bufOne = new Buffer(10);
const bufTwo = new Buffer("Howdy y'all");
const bufThree = new Buffer("Hello Buffer", 'utf8');

console.log(bufOne);
console.log(bufTwo);
// Notice the length of the buffer.
console.log(bufThree);