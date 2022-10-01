type NestedNumbers = number | NestedNumbers[];

const nums: NestedNumbers = [1, 2, [3, 4, 5, [6, 7, 8]]];
nums.push(1);
nums.push([1, [12]]);

//JSON
type JSONPrimitive = any;
type JSONObject = { [k: string]: any };
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

function isJSON(arg: JSONValue) {}

isJSON('dsfsadf');
isJSON(1);
isJSON({ a: [1, 2], v: { x: 1 } });
isJSON([1, { x: 1, y: [1, 2] }]);
