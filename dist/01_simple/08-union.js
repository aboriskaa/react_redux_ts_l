"use strict";
const x5 = 'ok'; // one of the literals
const arr = [];
function printId(id) {
    if (typeof id === 'string')
        console.log(id.toUpperCase);
    else
        console.log(id);
}
function welcome(person) {
    if (Array.isArray(person)) {
        console.log('Hi!', person.join(' '));
        return 1;
    }
    else
        console.log('Hello', person);
    return person;
}
