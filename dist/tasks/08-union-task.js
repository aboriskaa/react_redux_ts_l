"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let obj3 = {
    login: 'boris',
    skills: ['JS', 'TS'],
    level: 'junior',
};
// create a function that change level of incoming developer
function gradeDeveloper(user, newLevel) {
    user.level = newLevel;
    return user;
}
console.log(gradeDeveloper(obj3, 'senior'));
