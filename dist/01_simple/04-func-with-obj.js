"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj1 = void 0;
function printPoint(point) {
    console.log(`Coordinate of the point is: x=${point.x} y=${point.y}`);
}
exports.obj1 = {
    x: '1',
    y: '2',
};
printPoint(exports.obj1);
const obj2 = {
    x: '1',
    y: '2',
    z: '3',
};
printPoint(obj2);
function printName(user) {
    console.log('Hello', user.firstName.toUpperCase());
    if (user.lastName) {
        console.log('Nice to meet you Mr.', user.lastName.toUpperCase());
    }
}
printName({ firstName: 'Boris' });
printName({ firstName: 'Boris', lastName: 'Abramov' });
