"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function example1(x) {
    if (typeof x === 'string') {
        x.toUpperCase;
    }
    else if (typeof x === 'number') {
        x.toFixed;
    }
    else if (x === undefined) {
        console.log('no value');
    }
    else {
        x; // TS type "never"
    }
}
function example2(str) {
    // if (str && typeof str === 'object')
    if (Array.isArray(str)) {
        str.concat([]);
    }
    else if (typeof str === 'string') {
        str.toLowerCase();
    }
}
function example3(x) {
    if (x instanceof Date) {
        x.getHours();
    }
    else {
        x.concat([]);
    }
}
function move(animal) {
    if ('swim' in animal) {
        return animal.swim();
    }
    return animal.fly();
}
