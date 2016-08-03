// Assert non-equality tests.
'use strict';
const assert = require('assert');

let obj1 = { a: 1 };
let obj2 = { a: 1 };
let obj3 = { a: "1" };
let obj4 = { b: 2 };

// Shallow equality
// assert.notEqual(1, 1); // throws error
// assert.notEqual(1, "1"); // throws error
assert.notEqual(1, 2);

// notDeepEqual or '!='
// assert.notDeepEqual(obj1, obj2); // throws error becuase the two objects are equal.
// assert.notDeepEqual(obj1, obj3); // throws error becuase deepEqual doesn't care about type
assert.notDeepEqual(obj1, obj4);

// notDeepStrictEqual or '==='
assert.notDeepStrictEqual(obj1, obj3, "Objects are deepStrictEqual");
