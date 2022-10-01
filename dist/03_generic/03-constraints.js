"use strict";
function len(arg) {
    return arg.length;
}
len('abc');
len(['dsf']);
len({ length: 12 });
// len(123)
// len(true)
// const obj1 = { a: 1 }; not correct (does not have length)
const obj1 = { a: 1, length: 12 };
len(obj1);
