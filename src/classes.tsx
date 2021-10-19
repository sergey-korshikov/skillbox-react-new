// Classes lesson

// Example old constructor
// function OldConstructor(fieldValue) {
// 	this.field = fieldValue || 123;
// }

// OldConstructor.prototype.method = function() {
// 	return this.field;
// }

// const instance = new OldConstructor();
// instance.method(); // -> 123



// Example new class
class NewConstructor {
	field: number = 123;

	constructor(arg: number) {
		this.field = arg;
	}

	method() {
		return this.field
	}
}



class Constructor {
	public publicField: number = 123;
	private privateField: number = 321;
	// * not view and use only this class, not extended

	public constructor(arg: number) {
		this.publicField = arg;
	}

	public publicMethod() {
		return this.publicField;
	}

	protected protectedMethod() {
		return this.publicField + 10;
	}
	// * not view, but extended child classes

	private privateMethod() {
		return this.publicField + 30;
	}
	// * not view and use only this class, not extended
}

const instance = new Constructor(123);
// instance.field;
// instance.publicMethod();
// * only this props is public

class Child extends Constructor {
	// constructor() {
	// 	super();
	// 	// * super obligatory, if used contructor
	// }

	public childMethod() {
		// only this props extends from Constructor
		this.publicField;
		this.publicMethod();
		this.protectedMethod();
	}

	protected protectedMethod(): number {
		return super.protectedMethod();
	}

	// private protectedMethod(): number {
	// 	return super.protectedMethod();
	// }
	// * protected -> private - not work, error (down type is bad)

	// public protectedMethod(): number {
	// 	return super.protectedMethod();
	// }
	// * protected -> public - work, good (up type is good)
}

// abstract classes
abstract class AbstractClass {
	public abstract abstractField: number;

	public abstract abstractMethod(): number;

	protected protectedMethod() {
		return this.abstractField
	}
}

// const instance2 = new AbstractClass(); // error, not instance abstract class, only extends

class NewChild extends AbstractClass {
	// need end dev abstract class, fields and methods
	public abstractField: number = 123;

	public abstractMethod(): number {
		return this.protectedMethod();
	}
}

interface MyInterface {
	field: string;
	method(): string;
}

class NewClass implements MyInterface {
	// implements work as well as abstract class
	public field: string = '123';

	method(): string {
		throw '';
	}
}

// add generic
interface MyInterface2<T> {
	field: string;
	method(): string;
}

class NewClass2<T> implements MyInterface2<T> {
	// implements work as well as abstract class
	public field: string = '123';
	public conf?: T;

	method(): string {
		throw '';
	}
}

// example from react
import * as React from 'react';

class MyComponent extends React.Component<{ prop1: number }, { state1: string }> {
	constructor(props: { prop1: number }) {
		super(props);
		this.state = {
			state1: '123'
		}
	}
	public render() {
		return (
			<div>{this.props.prop1}</div>
		)
	}
}