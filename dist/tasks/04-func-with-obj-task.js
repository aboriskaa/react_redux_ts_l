"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    login: 'boris',
    email: 'boris@boris.boris',
    password: 'boris',
    isOnline: true,
    lastVisited: new Date(2022, 09, 24),
};
const admin1 = {
    login: 'boris',
    email: 'boris@boris.boris',
    password: 'boris',
    isOnline: true,
    lastVisited: new Date(2022, 09, 24),
    role: 'root',
};
// Create a function login with param user (with keys login and password)
// Check if login and password are not empty and then greet user
function Authentication(user) {
    if (user.login || user.password)
        console.log('Nice to meet you, ' + user.login);
}
Authentication(admin1);
