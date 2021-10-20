// Home work TypeScript

// ----------------------------------------------------------------------------------
// 1. Write the type of a function that concatenates two strings
const concat = function(f: string, s: string) {
	return f + s;
}

const resConcat = concat('Hello ', 'World');



// ----------------------------------------------------------------------------------
// 2. Write an interface to describe the following object

const MyHometask: interfaceHometask = {
	howIDoIt: "I Do It Wel",
	simeArray: [
		"string one",
		"string two",
		42
	],
	withData: [{
		howIDoIt: "I Do It Wel",
		simeArray: [
			"string one",
			23
		]
	}],
}

interface interfaceHometask {
	howIDoIt: string;
	simeArray: (number | string)[];
	// withData: object[];
	withData: [{
		howIDoIt: string;
		simeArray: (number | string)[];
	}];
}



// ----------------------------------------------------------------------------------
// 3. Add typization for method reduce in interface array with generic
const myArray: MyArray<number> = [1,2,3];
// const myArrayArrays: MyArray<number> = [[1],[2],[3]];

interface MyArray<T> {
	[N: number]: T;

	reduce<U>(fn: (previousValue: number, currentValue: number, index: number, array: number[]) => U, initialValue?: number): number;

	// map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>;
}

let variable = myArray[1];

// myArray.map((f) => f + 1); // good
// myArray.map((f, index, arr) => f + 1); // good

myArray.reduce((a, b) => a + b + 's');

const initialValue = 0;
myArray.reduce((accumulator, value) => accumulator + value, initialValue);
// myArrayArrays.reduce((a,b) => a.concat(b));



// ----------------------------------------------------------------------------------
// 4.