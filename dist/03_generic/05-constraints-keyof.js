"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prop = void 0;
function prop(key, obj) {
    return obj[key];
}
exports.prop = prop;
const obj1 = { a: 1, b: 2, c: 3 };
prop('a', obj1);
// prop('d', obj1);   not correct
// interface Laptop {
// 	brand: string;
// }
// type F = Laptop['brand']
