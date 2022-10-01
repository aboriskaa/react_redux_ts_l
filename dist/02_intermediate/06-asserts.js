"use strict";
function assertDisplayName(user) {
    if (!user.displayName)
        throw new Error('User has not display name');
}
function logUserByDisplayName(user) {
    assertDisplayName(user);
    console.log(user.displayName.toUpperCase);
}
