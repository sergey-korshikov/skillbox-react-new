// 1 lesson

// JS Types              // typeof

const str = 'string';    // typeof str     -> 'string'
const num = 2;           // typeof num     -> 'number'
const nan = NaN;         // typeof nan     -> 'number'
const obj = {};          // typeof obj     -> 'object'
const arr = [];          // typeof arr     -> 'object'
const nul = null;        // typeof nul     -> 'object'
const sym = Symbol();    // typeof sym     -> 'symbol'
const und = undefined;   // typeof und     -> 'undefined'
const _void = void 0;    // typeof _void   -> 'undefined'
const bool = true;       // typeof bool    -> 'boolean'
const fn = () => {};     // typeof fn      -> 'function'

let tsStr:string = 'str'; // type (:name_type) not necessary
// tsStr = 1; // error

let tsStr2 = 'str2';
// tsStr2 = 2; // error

// function sumJS(arr) {
// 	// правильное построение функции с проверками
// 	if (arr instanceof Array) {
// 		return arr.reduce((a, v) => a + v);
// 	}
// 	throw new Error('type mismatch');
// }

// function sumJS(arr) {
// 	// но достаточно такого
// 	return arr.reduce((a, v) => a + v);
// }

// function sumJS(arr) {
// 	// concat может принимать еще и строки
// 	return arr.concat([1]);
// }

function sumJS(arr: number[]) {
	return arr.reduce((a, v) => a + v);
}

sumJS([4, 2]); // 6

const tsNumber = 2;
const tsString = 'str';

const result = tsNumber + tsString; // string
// const resultTwo = tsString - tsNumber; // tsString it is string
const resultTwo = parseInt(tsString) - tsNumber; // преобразуем текст в число
const resultTwo2 = +tsString - tsNumber; // преобразуем текст в число

if (typeof tsString == 'number') {
	const resultTwo = tsString - tsNumber; // т.к. мы добавили проверку на число, вопросов (ошибок) нету
}

// 2 lesson

const strOrNumber: string | number = '2';

type StrOrNumber = string | number; // var type

const strOrNumber2: string | number = 2;
const strOrNumber3: string | number = '2';
const strOrNumber4: StrOrNumber = 2;
const strOrNumber5: StrOrNumber = '2';

type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol; // all js types

// Array
// const tsArray: number[] = [1, 2, '3']; // error: '3' - string
const tsArray: number[] = [1, 2, 3];
const tsArrayGeneric: Array<number> = [];
// эти записи идентичный

const unionArray: (string | number)[] = [1, 2, 's'];
const unionArray2: Array<string | number> = [1, 2, 's'];
// эти записи идентичный

// Tuple
// const myTuple: [number, string] = [1, 's', 2]; // error - only 2 elements
// const myTuple: [number, string] = [1, 's', 'a']; // error - only 2 elements
const myTuple: [number, string] = [1, 's'];
// const val = myTuple[1000]; // error - only 2 elements
const val2 = tsArray[1000];

const [Val1, Val2] = myTuple;
// const [state, setState] = useState(); // example from React

type StrangeTsTypes = any | unknown | never; // strange ts types


// 3 lesson

// Object
