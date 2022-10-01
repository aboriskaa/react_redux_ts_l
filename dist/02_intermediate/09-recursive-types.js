"use strict";
const nums = [1, 2, [3, 4, 5, [6, 7, 8]]];
nums.push(1);
nums.push([1, [12]]);
function isJSON(arg) { }
isJSON('dsfsadf');
isJSON(1);
isJSON({ a: [1, 2], v: { x: 1 } });
isJSON([1, { x: 1, y: [1, 2] }]);
