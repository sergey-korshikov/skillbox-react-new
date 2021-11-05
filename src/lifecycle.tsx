
import React from 'react';

interface ILifecycleProps {
	someProps: number;
}

interface ILifecycleState {
	stateField: number;
	isMounted: boolean;
}

export class Lifecycle extends React.Component<ILifecycleProps, ILifecycleState> {
	constructor(props: ILifecycleProps) {
		super(props);

		// this.state = { stateField: props.someProps };
		// * прямая инициализация состояния через присваивание возможна только на этапе его инициализации, т.е. внутри конструктора или если мы его инициализируем через перегрузку, в любых других местах компонента можно работать с ним только через функцию setState
		// * не следует копировать пропы в поля состояния при инициализации, это приведет к тому что мы начнем пользоваться производным состоянием, т.е. состоянием, которое зависит от значения пропров и из за этого оно не будет меняться автоматически, можно сделать только с пониманием этого, но это редкость, по этому с этим нужно быть осторожным и стараться избегать этого

		this.state = { stateField: 0, isMounted: false };

		// this.handleClick = this.handleClick.bind(this); // bind context else use arrow function

		// not use setState! component not ready...
		// this.setState({});

		// not add event listenrs! for this need use special method
	}

	static getDerivedStateFromProps(props: Readonly<ILifecycleProps>, state: Readonly<ILifecycleState>) {
		// use this method only if very need!
		// run before render, for first render and for rerender
		return { stateField: props.someProps }; // returt state for need before render else return null
		// return null;
	}

	public render() {
		// this.setState({}); not use setState! component not ready...
		return <div onClick={this.handleClick}>1</div>
	}

	public componentDidMount() {
		// run after mount component in DOM
		// may be use:
		// - add event listener
		// - run timers
		// - work with DOM
		// - use setState
		// this.setState({ isMounted: true });
	}

	public componentWillUnmount() {
		// before remove component from DOM
		// may be use:
		// - remove event listeners, important!
		// - clear timers
	}

	// private handleClick() {
	// 	this.setState({ stateField: 1 });
	// }

	// use arrow function, not need bind context
	// private handleClick = () => {
	// 	this.setState({ stateField: 1 });
	// }
}