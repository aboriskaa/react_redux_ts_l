"use strict";
// Array<string>
// string[]
//Promise<number>
Object.defineProperty(exports, "__esModule", { value: true });
exports.toArray = void 0;
function toArray(...arg) {
    return arg;
}
exports.toArray = toArray;
toArray(1, 2, 3);
toArray('dsf', 'dfd');
function head(value) {
    return value[0];
}
head(['12', '232dsf3']);
const head1 = (value) => value[0];
const obj1 = {
    title: 'dsfsd',
    value: 12,
};
const obj2 = {
    title: 'sdfasdf',
    value: [2342],
};
