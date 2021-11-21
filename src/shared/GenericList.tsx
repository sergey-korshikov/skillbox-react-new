import React from 'react';

// локальный onClick

// interface IItem {
// 	value: string;
// 	id: string;
// 	onClick: () => void;
// }

// interface IMyListProps {
// 	list: IItem[];
// }

// export function MyList({ list }: IMyListProps) {
// 	return (
// 		<ul>
// 			{list.map((item) => (
// 				<li onClick={item.onClick} key={item.id}>{item.value}</li>
// 			))}
// 		</ul>
// 	)
// }


// глобавльный onClick

// interface IItem {
// 	value: string;
// 	id: string;
// }

// interface IMyListProps {
// 	list: IItem[];
// 	onClick: (id: string) => void;
// }

// export function MyList({ list, onClick }: IMyListProps) {
// 	return (
// 		<ul>
// 			{list.map((item) => (
// 				<li onClick={() => onClick(item.id)} key={item.id}>{item.value}</li>
// 			))}
// 		</ul>
// 	)
// }


// с merge
interface IItem {
	value: string;
	id: string;
	onClick: (id: string) => void;
}

interface IMyListProps {
	list: IItem[];
}

export function MyList({ list }: IMyListProps) {
	return (
		<ul>
			{list.map((item) => (
				<li onClick={() => item.onClick(item.id)} key={item.id}>{item.value}</li>
			))}
		</ul>
	)
}