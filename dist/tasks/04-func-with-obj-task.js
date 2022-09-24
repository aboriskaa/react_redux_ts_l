"use strict";
// Create a function login with param user (with keys login and password)
// Check if login and password are not empty and then greet user
function Authentication(user) {
    if (user.login || user.password)
        console.log("Nice to meet you, " + user.login);
}
