import React from 'react';

// локальный onClick

// interface IItem {
// 	text: string;
// 	id: string;
// 	onClick: () => void;
// }

// interface IGenericListProps {
// 	list: IItem[];
// }

// export function GenericList({ list }: IGenericListProps) {
// 	return (
// 		<ul>
// 			{list.map((item) => (
// 				<li onClick={item.onClick} key={item.id}>{item.text}</li>
// 			))}
// 		</ul>
// 	)
// }


// глобавльный onClick

// interface IItem {
// 	text: string;
// 	id: string;
// }

// interface IGenericListProps {
// 	list: IItem[];
// 	onClick: (id: string) => void;
// }

// export function GenericList({ list, onClick }: IGenericListProps) {
// 	return (
// 		<ul>
// 			{list.map((item) => (
// 				<li onClick={() => onClick(item.id)} key={item.id}>{item.text}</li>
// 			))}
// 		</ul>
// 	)
// }


// с merge
interface IItem {
	id: string;
	text: string;
	onClick: (id: string) => void;
	className?: string;
	As?: 'a' | 'li' | 'button' | 'div';
	href?: string;
}

interface IGenericListProps {
	list: IItem[];
}

// export function GenericList({ list }: IGenericListProps) {
// 	return (
// 		<ul>
// 			{list.map((item) => (
// 				<li onClick={() => item.onClick(item.id)} key={item.id}>{item.text}</li>
// 			))}
// 		</ul>
// 	)
// }

const noop = () => {};

export function GenericList({ list }: IGenericListProps) {
	return (
		<>
			{list.map(({ As = 'div', text, onClick = noop, className, id, href }) => (
				<As
					className={className}
					onClick={() => onClick(id)}
					key={id}
					href={href}
				>
					{text}
				</As>
			))}
		</>
	)
}