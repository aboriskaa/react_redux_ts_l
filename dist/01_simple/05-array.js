"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cars = void 0;
const numbers = [1, 2, 3, 4, true, ''];
const strs = [];
const strs2 = [];
strs.push('asv');
exports.cars = [];
exports.cars.push({ brand: 'Audi', wheels: 3 });
const arrOfArr = [];
arrOfArr.push(['', '']);
function printArr(arr) {
    arr.forEach((el, index) => {
        console.log(index);
    });
}
