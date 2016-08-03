// Assert 03 throws and doesNotThrow

const assert = require('assert');

'use strict';

function doMathCorrectly() {
  return 2 + 2;
}

function doMathIncorrectly() {
  3 + three;
}

assert.doesNotThrow(doMathCorrectly);
assert.throws(doMathIncorrectly);

// The following two calls will throw assertion errors
assert.throws(doMathCorrectly, 'doMathCorrectly was expected to throw an error and does not');
// assert.doesNotThrow(doMathIncorrectly, 'doMathIncorrectly throws an error and should not');
