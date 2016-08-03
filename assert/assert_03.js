// Assert 03 doesNotThrow

const assert = require('assert');

'use strict';

function doMathCorrectly() {
  return 2 + 2;
}

function doMathIncorrectly() {
  3 + three;
}

assert.doesNotThrow(doMathCorrectly);
assert.doesNotThrow(doMathIncorrectly, 'doMathIncorrectly throws an error and should not');
