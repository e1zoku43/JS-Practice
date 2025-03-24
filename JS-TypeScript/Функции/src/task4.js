"use strict";
function combine(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Arguments must be both numbers or both strings');
}
console.log(combine(2, 3));
console.log(combine("Hello, ", "World!"));
