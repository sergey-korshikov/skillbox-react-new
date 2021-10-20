// ----------------------------------------------------------------------------------
// ex change types for arr
const mistakeAny = [];
mistakeAny.push(1); // good
mistakeAny.push('1'); // good

const mistakeNum = [] as Array<number>;
mistakeNum.push(1); // good (type number)
// mistakeNum.push('1'); // error type



// ----------------------------------------------------------------------------------
// test object
let bigObject = {
	'commit': {
		'id': 'fsaf7asf7867ads',
		'short_id': '24234asf',
		'title': 'JS fix',
		'author_name': 'User',
		'author_email': 'user@example.com',
		'created_at': '2014-02-27',
	},
	'commits': [{
		'id': 'fsaf7asf7867ads',
		'short_id': '24234asf',
		'title': 'JS fix',
		'author_name': 'User',
		'author_email': 'user@example.com',
		'created_at': '2014-02-27',
	}],
	'diffs': [{
		'old_path': 'files/js/spp.js',
		'new_path': 'files/js/spp.js',
		'a_mode': null,
		'b_mode': '100644',
		'new_file': false,
		'renamed_file': false,
		'deleted_file': false,
	}],
	'compare_timeot': false,
	'compare_same_ref': false,
};

bigObject.compare_same_ref = 'true'; // error type (need boolean)



// ----------------------------------------------------------------------------------
// add readonly for object
type TMyBigObject = typeof bigObject;

// test
const typedBigObject: Readonly<TMyBigObject> = bigObject;

typedBigObject.compare_same_ref = true; // error change value (object has property - readonly)
typedBigObject.commit.id = '123'; // not error



// ----------------------------------------------------------------------------------
// example work readonly ts
type ExampleReadonly = {
	readonly[N: string]: any
}

type MyExReadonly = {
	readonly [N in 'asd' | 'qwe']: N
}

// ex work in js
// for (let N of ['asd', 'qwe']) {}

const myTestSome: MyExReadonly = {
	asd: 'asd', // require
	// qwe: 'qwe', // require

	// asd: 'd', // error asd need value 'asd'
	qwe: 'asd', // error qwe need value 'qwe'
}



// ----------------------------------------------------------------------------------
// example work readonly ts
type TObjKeys = keyof TMyBigObject; // ex
type TCommitType = TMyBigObject['commit']; // ex

type MyReadonly<T> = {
	readonly [N in keyof T]: T[N]
}

const mySome: MyReadonly<TMyBigObject> = {
	// need write all values
	'compare_timeot': 'test', // error (need boolean type)
	'compare_same_ref': true // good
}



// ----------------------------------------------------------------------------------
// ex mapped types
type MyPartial<T> = {
	[N in keyof T]?: T[N]
}
// * do all keys in object not required



// ----------------------------------------------------------------------------------
// ex work Pick ts
type ExPick<T, K extends keyof T> = {
	[N in K]: T[N];
}

type pickedErr = ExPick<TMyBigObject, 'commit' | 'asdasdas'>; // error ('asdasdas' has not in object)
type picked = ExPick<TMyBigObject, 'commit'>; // good
type picked2 = ExPick<TMyBigObject, 'commit' | 'commits'>; // good



// ----------------------------------------------------------------------------------
// good work readonly
type MyReadonlyDeep<T> = {
	readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N]
	// - iteration on every key object
	// - get value and check type is object
	// - if true
	// - apply this cicle for gotten object (apply for every key)
	// - if false
	// - return gotten value
}

// test
const typedBigObjectDeep: MyReadonlyDeep<TMyBigObject> = bigObject;

const exGetValue = typedBigObjectDeep.compare_same_ref; // good, gotten value

// results
typedBigObjectDeep.compare_same_ref = true;
// error change value (object has property - readonly)

typedBigObjectDeep.commit.id = '123';
typedBigObjectDeep.diffs[0] = {};
typedBigObjectDeep.diffs[0].old_path = 'test';
// error change child value (object has property - readonly)



// ----------------------------------------------------------------------------------
// remove readonly
type TSomeType = MyReadonlyDeep<TMyBigObject>;

type RemoveReadonly<T> = T extends MyReadonlyDeep<infer E> ? E : T;
// * type inference (get arg generic: MyReadonlyDeep<infer E>)

// test
type TTest = RemoveReadonly<TSomeType>; // good readonly removed



// ----------------------------------------------------------------------------------
// ex work
function greaterThenZero(a: number, b: string) {
	return a > 0;
}

type FnReturnType<T> = T extends ((...arg: any[]) => infer R) ? R : never;
type FnParameters<T> = T extends ((...arg: infer R) => any) ? R : never;

type TReturnType = FnReturnType<typeof greaterThenZero>; // type fn return is boolean
type TArgsType = FnParameters<typeof greaterThenZero>; // type fn args is number and string (if add b in args)
