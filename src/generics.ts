// Generics lesson

// Standart Array
const myArrayS: Array<number> = [1,2,3];

let variableS = myArrayS[1];

myArrayS.map((f) => f + 1);
myArrayS.map<string>((f) => `f + ${f}`);
myArrayS.map((f, index, arr) => f + 1);



// Generics Array
const myArrayG: MyArrayG<number> = [1,2,3];

interface MyArrayG<T> {
	[N: number]: T

	map<U>(fn: (el: T, index: number, arr: MyArrayG<T>) => U): MyArrayG<U>
}

let variableG = myArrayG[1]; // type variable is number - it is good

myArrayG.map((f) => f + 1); // good
// myArrayG.map<number>((f) => `f + ${f}`); // error, return string
myArrayG.map<string>((f) => `f + ${f}`); // явно задали тип возвращаемого занчения, но это не обязательно

myArrayG.map((f, index, arr) => f + 1); // good



// Generics Function
function identity<T>(arg: T): T {
	return arg;
}

let resultGF = identity(12);

function getLen<T extends Array<any>>(arr: T): number {
	return arr.length;
}

// getLen('text'); // error type, not array
getLen(['test', 1, null]); // good

interface IValueWidthType<T> {
	type: string,
	value: T
}

function widthType<U>(arg: U): IValueWidthType<U> {
	return {
		type: typeof arg,
		value: arg
	}
}

const result2 = widthType(123);

// Inside generics
interface IExample<T> {
	type: string;
	value: T;
	isEmpty: boolean
}

// Omit
const omittedObject: Omit<IExample<string>, 'isEmpty' | 'value'> = {
	type: 'test-type',
	// value: 'test' // error (исключен)
	// isEmpty: true, // error (исключен)
}

// Pick
const picked: Pick<IExample<number>, 'isEmpty'> = {
	// type: 'test-type', // error (исключен)
	// value: 'test', // error (исключен)
	isEmpty: true,
}

const picked2: Pick<IExample<number>, 'isEmpty' | 'value'> = {
	// type: 'test-type', // error (исключен)
	// value: 'test', // error type, need number
	value: 10,
	isEmpty: true,
}

// Partial is dangerous! - normal for boolean types
const partial: Partial<IExample<object>> = {
	// add '?' for all values (type?: string ...)
	type: 'test-type',
	isEmpty: false,
}
