"use strict";
let word = null;
const num = 10;
if (num > 5) {
    word = 'abc';
}
console.log(word.toLowerCase());
function printName1(name) {
    const fullName = name;
}
function printName2(person) {
    console.log(person.name);
}
const people = [
    { name: 'Gran', age: 70, sex: 'female' },
    { name: 'Papa', age: 72, sex: 'male' },
    { name: 'Mom', age: 35, sex: 'female' },
];
const femalePeople = people.find((person) => person.sex === 'female');
