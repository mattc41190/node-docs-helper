// Assert 05

const assert = require('assert');

assert.ifError(0); //nothing thrown
assert.ifError(false); // notthing thrown
// assert.ifError(true); // throws true
// assert.ifError(1); // throw 1
assert.ifError('error');
