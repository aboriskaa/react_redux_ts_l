"use strict";
function printPoint(point) {
    console.log(`Coordinate of the point is: x=${point.x} y=${point.y}`);
}
const obj1 = {
    x: "1",
    y: "2",
};
printPoint(obj1);
const obj2 = {
    x: "1",
    y: "2",
    z: "3",
};
printPoint(obj2);
function printName(user) {
    console.log("Hello", user.firstName.toUpperCase());
    console.log("Nice to meet you Mr.", user.lastName.toUpperCase());
}
