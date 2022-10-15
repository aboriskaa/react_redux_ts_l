import { average } from '../01_simple/02-functions';

console.log(typeof 'string');
let str = 'Hello world';
type x = typeof str;

type fn = typeof average;

const max: fn = (...numbers) => Math.max(...numbers);
max(1, 2, 3);

type returnFn = ReturnType<typeof average>;
