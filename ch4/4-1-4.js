"use strict";
function greet(name) {
    if (name === undefined)
        return 'Hello';
    return "Hello " + name.toUpperCase();
}
console.log(greet());
console.log(greet('Taro'));
