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
function identity(arg: any): any {
	return arg;
}

let resultGF = identity(12);







