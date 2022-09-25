"use strict";
var ShapeKid;
(function (ShapeKid) {
    ShapeKid[ShapeKid["Circle"] = 0] = "Circle";
    ShapeKid[ShapeKid["Square"] = 1] = "Square";
})(ShapeKid || (ShapeKid = {}));
const myShape = ShapeKid.Circle;
const circle1 = {
    radius: 1,
    kind: ShapeKid.Circle,
};
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["ERROR"] = 500] = "ERROR";
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCode[StatusCode["NOT_AUTH"] = 403] = "NOT_AUTH";
})(StatusCode || (StatusCode = {}));
var Grades;
(function (Grades) {
    Grades["Junior"] = "junior";
    Grades["Middle"] = "middle";
    Grades["Senior"] = "senior";
})(Grades || (Grades = {}));
let obj4 = {
    login: 'boris',
    skills: ['JS', 'TS'],
    level: Grades.Junior,
};
// create a function that change level of incoming developer
function upGrate(user) {
    if (user.level === Grades.Junior) {
        user.level = Grades.Middle;
    }
    else if (user.level === Grades.Middle) {
        user.level = Grades.Senior;
    }
    return user;
}
