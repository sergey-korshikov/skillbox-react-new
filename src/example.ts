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
const tsArrayGeneric: Array<number> = [1, 2, 3];
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

// type StrangeTsTypes = any | unknown | never; // strange ts types


// 3 lesson

// Object
// const myObj: { a: number, b: string } = { a: 1, b: 'a', c: '1' }; // bad
// const myObj: { a: number, b: string } = { a: 1 }; // bad
const myObj: { a: number, b: string } = { a: 1, b: 'a' }; // good

type myObj2Types = { a: number, b: string }
// const myObj2: myObj2Types = { a: 1, b: 'a', c: '1' }; // bad
// const myObj2: myObj2Types = { a: 1 }; // bad
const myObj2: myObj2Types = { a: 1, b: 'a' }; // good

// interface - наиболее актуален при работе с объектами

interface MyFirstInterface {
	readonly a: number;
	b: string;
	c: number[];
	d?: number[]; // ? лучше не исп без необходимости
	e: number[] | undefined; // не эквивалентна предыдущей переменной, undefined - все равно необходимо декларировать
}

const myObj3: MyFirstInterface = {
	a: 2,
	b: '123',
	c: [1],
	e: undefined // undefined - необходимо декларировать все равно
}

// Object.keys(myObj3);

// const value = myObj3.e; // error
const value = myObj3.c;

if (myObj3.d) {
	const val = myObj3.d; // type - number[] | undefined
}

myObj3.c = []; // good
// myObj3.a = 5; // error - readonly, but value obj.a changed, new value - 5

const ApiAnswer: IndexInterface = { key : 'asd', key1: 'asd' }

const val3 = ApiAnswer.randomkey; // type string

interface IndexInterface {
	[n: string]: string; // n - it is key, and may be any
	// [D: string]: string; // D - it is key
}

// 4 lesson

// functions

// calculate('add', 5, 5); // -> 10 - example
function calculate(method: 'add' | 'sub', left: number, right: number):number {
	// return type - number
	switch(method) {
		case 'add': return left + right;
		case 'sub': return left - right;
	}
}

const sum = calculate('sub', 5, 5);

// use enum
enum Methods {
	add,
	sub,
	// div = 'div' // may be use
}

function calculateEnum(method: Methods, left: number, right: number):number {
	// return type - number
	switch(method) {
		case Methods.add: return left + right;
		case Methods.sub: return left - right;
	}
}

console.log(Methods.add); // -> 0
console.log(Methods.sub); // -> 1

const ArrowFn: TypeFn = () => 2;
// const ArrowFnError: TypeFn = () => '2'; // error - '2' - not a number

type TypeFn = () => number;

// example
const ArrowFn2: FnInterface = (value) => value;

interface FnInterface {
	(a: number): void
}

const sumEnum = calculateEnum(Methods.sub, 5, 5);

// strange types (only ts)
type StrangeTsTypes = any | unknown | never; // strange ts types

// ts not helping for type any - off tipization
// better not used !
const some: any = '2';
const some2: any = 2;
some.reduce(); // ts not show error

// unknown - ts будет ругаться всегда, пока не объявим тип
const un: unknown = '2';
const un2: unknown = 2;
// un.reduce(); // error, unknown type
// un2.reduce(); // error, unknown type

if (typeof un === 'number') {
	// un.concat(); // error
}

if (typeof un === 'string') {
	un.concat();
}

// void
function voidFn():void {
	// void - fn not return
	// return 0; // error
}

const someVoidValue = voidFn(); // type void

// never - функция, которая никогда не работает до конца
function neverFn():never {
	// never - fn not return
	// return 0; // error
	throw new Error('my exception'); // good
}

const someValue = neverFn(); // type never
