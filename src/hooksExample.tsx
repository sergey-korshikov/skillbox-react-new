import React, { useState } from 'react';

// Какие быва хуки:

// 1. useState
// 2. useEffect
// 3. useRef
// 4. useReducer
// 5. useMemo
// 6. useContext
// 7. useCallback
// 8. useImperativeHandle
// 9. useLayoutEffect
// 10. useDebugValue

export function MyHooks({ title, id }: { title: string, id?: string }) {
	// const [isMounted] = useIsMounted();


	// без второго аргумента
	// аналог componentDidMount - при первом рендере
	// аналог componentWillUpdate - при всех последующих рендерах

	// React.useEffect(() => {
	// 	// console.log('componentDidMount');
	// 	console.log('componentWillUpdate');
	// });


	// так нельзя, это приведет к ошибке
	// if (isMounted) {
	// 	React.useEffect(() => {
	// 		console.log('componentWillUpdate');
	// 	});
	// }


	// с пустым массивом в качестве второго аругмента
	// аналог componentDidMount - при первом рендере

	// React.useEffect(() => {
	// 	console.log('componentDidMount');
	// 	// и с возвращением функции (можно добавить в любой useEffect)
	// 	// аналог componentWillUnmount - перед удалением компонента
	// 	return () => {
	// 		console.log('componentWillUnmount');
	// 	}
	// }, []);


	// с title в массиве в качествое втрого аргумента
	// каждый раз при изменении title, в том числе при первом рендере

	// React.useEffect(() => {
	// 	console.log('componentWillReceiveProps', title);
	// }, [title]);


	// example useIsMounted
	// React.useEffect(() => {
	// 	console.log('isMounted', isMounted);
	// }, [isMounted])
	// второй аргумент это зависимость, без нее будет работать как простой console.log(isMounted)


	// example useMemo
	// хорошо использовать для оптимизации сложных вычислений, дабы не повторять их каждый раз при ререндере
	const items = 10;
	const multiplier = 5;
	const result = React.useMemo(
		() => calculate(items, multiplier),
		[items, multiplier]
	)


	return (
		<div>{title} {id} {result}</div>

		// т.к. мы используем ssr нам нужно выолнить эту конструкцию только на клиенте, иначе ошибка window is not defined
		// <div style={{ width: window.innerWidth }}>{title} {id}</div>
	)
}

export function useIsMounted() {
	const [isMounted, setIsMounted] = React.useState(false);

	React.useEffect(() => {
		setIsMounted(true);
	}, [])

	return [isMounted]
}

// 1. хуки должны быть вызваны только из тела функционального компонента,если попытаться вызвать их в класс компоненте, получим ошибку
// 2. нельзя изменять порядок исполнения хуков или оборачивать их в if, они всегда должны быть указаны



// example useMemo
function calculate(items: number, multiplier: number) {
	return new Array(items).fill(1).reduce((a,v) => a * multiplier);
}
