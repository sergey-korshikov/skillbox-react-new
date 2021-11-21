import React from 'react';
import { getValue, getChecked } from './utils/react/pickFromSyntheticEvent';
import { preventAll } from './utils/react/preventAll';
import { preventDefault } from './utils/react/preventDefault';
import { stopPropagation } from './utils/react/stopPropagation';
import { withKey } from './utils/react/withKey';

// Карирование и Функции высшего порядка
// корирование - отложенный вызов функции
// function addStandart(leftSide: number) {
// 	return (rightSide: number) => leftSide + rightSide;
// }

const add = (leftSide: number) => (rightSide: number) => leftSide + rightSide;

add(1)(1) // -> 1 + 1 = 2

const addOne = add(1);
const addSix = add(6);

addOne(5) // -> number (6)
addSix(3) // -> number (9)

// пример функции высшего порядка (принимает в себя функцию)
// window.addEventListener('resize', () => {});

// function addEventListenerWithDispose(element, name, handler) {
// 	element.addEventListener(name, handler);
// 	return () => element.removeEventListener(name, handler);
// }

// // функция сработатет один раз
// const dispose = addEventListenerWithDispose(window, 'resize', () => {
// 	console.log('resize');
// 	dispose();
// });

// примеры для React:
// exapmle 1
interface IBlockProps {
	title: string;
	id: string;
}

function Feed(props: { blocks: IBlockProps[] }) {
	return (
		<div>
			{props.blocks.map((block) =>
				<Block key={block.id} {...block} />
			)}
		</div>
	)
}

function Block(props: IBlockProps) {
	return (
		<div>{props.title}</div>
	)
}

// упрощаем
const withIdKey = withKey('id');
const withIndexKey = withKey();

function EasyFeed(props: { blocks: IBlockProps[] }) {
	return (
		<div>
			{/* {props.blocks.map(withIdKey(Block))} */}
			{props.blocks.map(withIndexKey(Block))}
		</div>
	)
}

// exapmle 2
function Input(props: { onChange: (value: string) => void, value: string }) {
	return (
		<input value={props.value} onChange={(e) => props.onChange(e.currentTarget.value)} />
	)
}

// упрощаем
function InputUp({ onChange, value }: { onChange: (value: string) => void, value: string }) {
	return (
		<input value={value} onChange={getValue(onChange)} />
	)
}

function Checkbox(props: { onChange: (value: boolean) => void, value: boolean }) {
	return (
		<input type="checkbox" checked={props.value} onChange={(e) => props.onChange(e.currentTarget.checked)} />
	)
}

// упрощаем
function CheckboxUp({ onChange, value }: { onChange: (value: boolean) => void, value: boolean }) {
	return (
		<input type="checkbox" checked={value} onChange={getChecked(onChange)} />
	)
}

// example 3

function NotStandartLink(props: any) {
	const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
		e.stopPropagation();
		e.preventDefault();
		props.onClick();
	}

	return (
		<a onClick={handleClick}>Hello</a>
	)
}

// упрощаем
function NotStandartLinkUp(props: any) {
	return (
		// <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>
		<a onClick={preventAll(props.onClick)}>Hello</a>
	)
}

// example all

// function InputNew(props: {onChange: (value: string) => void, value: string}) {}
// лучше через интерфейсы

interface InputProps {
	onChange: (value: string) => void;
	value: string;
}

function InputNew({ value, onChange }: InputProps) {
	return (
		<input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />
	)
}
