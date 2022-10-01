// numbers
let x = 10;
// let y = 1234n
let z = NaN;

//string
let str1: string;
str1 = 'Hello world';
let sym1 = Symbol('as');

//boolean
let o = true;
o = false;

//nothing
let h: undefined = undefined;
let g: null = null;

//literal
export const num = 108;
const str2 = 'str';

// universal
let mm: any = 1;
mm = 'str';
mm = [];
// can use only after correction
let xx: unknown = 2;
if (typeof xx === 'string') xx.toUpperCase();
xx = 'str';
