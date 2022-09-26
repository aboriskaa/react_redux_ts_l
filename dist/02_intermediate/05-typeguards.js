"use strict";
function isFish(pet) {
    return pet.swim !== undefined;
}
function isFish2(pet) {
    return true;
}
function move(animal) {
    if (isFish(animal)) {
        return animal.swim();
    }
    return animal.fly();
}
