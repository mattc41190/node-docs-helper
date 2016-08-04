// Assert 02
'use strict';
const assert = require('assert');

let obj1 = { a: 1 };
let obj2 = { a: 1 };
let obj3 = { a: "1" };

// Shallow equality
assert.equal(1, 1);
assert.equal(1, "1");
// assert.equal(1, 2); // throws error

assert.strictEqual(1, 1);
assert.strictEqual(1, "1");
// This will throw an error as strictEqual cares about type.

// deepEqual or '=='
assert.deepEqual(obj1, obj2);
assert.deepEqual(obj1, obj3);
// It's okay deepEqual doesn't care about type!

// deepStrictEqual or '==='
assert.deepStrictEqual(obj1, obj3, "Objects not deepStrictEqual");
