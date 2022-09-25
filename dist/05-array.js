"use strict";
const numbers = [1, 2, 3, 4, true, ''];
const strs = [];
const strs2 = [];
strs.push('asv');
// interface Car {
// 	wheels: number;
// 	brand: string;
// }
const cars = [];
cars.push({ brand: 'Audi', wheels: 3, type: '' });
const arrOfArr = [];
arrOfArr.push(['', '']);
function printArr(arr) {
    arr.forEach((el, index) => {
        console.log(index);
    });
}
