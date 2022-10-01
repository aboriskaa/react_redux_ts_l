"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tuplePairCreator = void 0;
function tuplePairCreator(first) {
    return function (second) {
        return [first, second];
    };
}
exports.tuplePairCreator = tuplePairCreator;
const toTupleWith1 = tuplePairCreator(1);
const val1 = toTupleWith1(2);
const val2 = toTupleWith1('dfd');
