import React from 'react';

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

export function MyHooks(title: string) {
	// без второго аргумента
	// аналог componentDidMount - при первом рендере
	// аналог componentWillUpdate - при всех последующих рендерах
	React.useEffect(() => {
		console.log('componentDidMount');
		console.log('componentWillUpdate');
	});

	// с пустым массивом в качестве второго аругмента
	// аналог componentDidMount - при первом рендере
	React.useEffect(() => {
		console.log('componentDidMount');
	}, []);

	// с пустым массивом в качестве второго аругмента
	// и с возвращением функции (можно добавить в любой useEffect)
	// аналог componentWillUnmount - перед удалением компонента
	React.useEffect(() => {
		console.log('componentDidMount');
		return () => {
			console.log('componentWillUnmount');
		}
	}, []);

	// с title в массиве в качествое втрого аргумента
	// каждый раз при изменении title, в том числе при первом рендере
	React.useEffect(() => {
		console.log('componentWillReceiveProps', title);
	}, [title]);

	return (
		<div>{title}</div>
	)
}