// JS Types            // typeof

const str = 'string';  // typeof str   -> 'string'
const num = 2;         // typeof num   -> 'number'
const nan = NaN;       // typeof nan   -> 'number'
const obj = {};        // typeof obj   -> 'object'
const arr = [];        // typeof arr   -> 'object'
const nul = null;      // typeof nul   -> 'object'
const sym = Symbol();  // typeof sym   -> 'symbol'
const und = undefined; // typeof und   -> 'undefined'
const _void = void 0;  // typeof _void -> 'undefined'
const bool = true;     // typeof bool  -> 'boolean'
const fn = () => {};   // typeof fn    -> 'function'

let tsStr:string = 'str'; // type (:nametype) not necessary
// tsStr = 1; // error

let tsStr2 = 'str2';
// tsStr2 = 2; // error