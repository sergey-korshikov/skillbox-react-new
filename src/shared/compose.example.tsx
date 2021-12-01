
import * as React from 'react';
import { getValue } from '../utils/react/pickFromSyntheticEvent';
import { preventDefault } from './../utils/react/preventDefault';
import { stopPropagation } from './../utils/react/stopPropagation';

function InputExample({ value, onChange }: any) {
	return (
		<input
			value={value}
			// стандартное решение
			// onChange={preventDefault(stopPropagation(getValue(onChange)))}

			// решение с помощью функции compose, исполняет функции в обратном порядке
			// onChange={compose(onChange, getValue, stopPropagation, preventDefault)}

			// решение с помощью функции pipe, исполняет функции в нормальном порядке
			onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}

			// результаты идентичны
			/>
	)
}

// типизация упрощена
function compose<U>(...fns: Function[]) {
	return <E,>(initialValue: any): U =>
		fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}

function pipe<U>(...fns: Function[]) {
	return <E,>(initialValue: any): U =>
		fns.reduce((previousValue, fn) => fn(previousValue), initialValue);
}

// еще преимущества
function pick<K extends string>(prop: K) {
	return <O extends Record<K, any>>(obj: O) => obj[prop];
}

pick('value')({value: 1}); // -> 1

function isEqual<T>(left: T) {
	return <E extends T>(right: E) => left === right;
}

function cond(b: boolean) {
	return !b;
}

const comments = [
	{
		id: 22,
		text: 'text one'
	},
	{
		id: 44,
		text: 'text two'
	}
];

// стандартный пример фильтрации
comments.filter(({ id }) => id !== 22); // массив эл-ов с id !== 22

// пример фильтрации с использованием pipe, pick, isEqual, cond
comments.filter(pipe(pick('id'), isEqual(22))); // массив эл-ов с id === 22
comments.filter(pipe(pick('id'), isEqual(22), cond)); // массив эл-ов с id !== 22

// функция которая фильтрует по id используя в себе ранее написанные функции
const filterWithId = (id: number) => pipe(pick('id'), isEqual(id), cond);

// пример фильтрации с использованием filterWithId
comments.filter(filterWithId(22)); // массив эл-ов с id !== 22

// функция которая создает функции типа filterWithId
const createFilterBy = (prop: string) => (id: number) => pipe(pick(prop), isEqual(id), cond);

// пример создания функции filterWithId с помощью createFilterBy
const filterWithIdCreated = createFilterBy('id');
const filterByValueCreated = createFilterBy('value');

// пример фильтрации с использованием filterWithId
comments.filter(filterByValueCreated(22)); // массив эл-ов с value !== 22

// альтернатива pickFromSyntheticEvent
// но проблема в типизации, pickFromSyntheticEvent очень хорошо типизирован
// композицию же, очень сложно типизировать
// для использования compose или pipe лучше использовать библиотеки с правильной типизацией (ramda.js, redux)
// ramda.js используется для функционального программирования
const getValueNumber = pipe<number>(
	pick('currentTarget'),
	pick('value'),
	parseInt
)