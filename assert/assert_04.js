// Assert 04 Fail

'use strict';

const assert = require('assert');

// Option 1
assert.fail('a', 'b', undefined, '==');

// Option 2
assert.fail('a', 'b', 'args not equal', '==');
