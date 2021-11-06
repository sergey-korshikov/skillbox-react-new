
import React from 'react';

interface ILifecycleProps {
	someProps: number;
}

interface ILifecycleState {
	stateField: number;
	isMounted: boolean;
	hasError: boolean;
}

export class Lifecycle extends React.Component<ILifecycleProps, ILifecycleState> {
	constructor(props: ILifecycleProps) {
		super(props);

		// this.state = { stateField: props.someProps };
		// * прямая инициализация состояния через присваивание возможна только на этапе его инициализации, т.е. внутри конструктора или если мы его инициализируем через перегрузку, в любых других местах компонента можно работать с ним только через функцию setState
		// * не следует копировать пропы в поля состояния при инициализации, это приведет к тому что мы начнем пользоваться производным состоянием, т.е. состоянием, которое зависит от значения пропров и из за этого оно не будет меняться автоматически, можно сделать только с пониманием этого, но это редкость, по этому с этим нужно быть осторожным и стараться избегать этого

		this.state = { stateField: 0, isMounted: false, hasError: false };

		// this.handleClick = this.handleClick.bind(this); // bind context else use arrow function

		// not use setState! component not ready...
		// this.setState({});

		// not add event listenrs! for this need use special method
	}

	static getDerivedStateFromProps(props: Readonly<ILifecycleProps>, state: Readonly<ILifecycleState>) {
		// use this method only if very need!
		// run before render, for first render and for rerender
		return { stateField: props.someProps }; // return new state for need before render else return null
		// return null;
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true };
	}

	// not use for PureComponent !
	// method for up perfomance
	public shouldComponentUpdate(
		nextProps: Readonly<ILifecycleProps>,
		nextState: Readonly<ILifecycleState>,
		nextContext: any,
	): boolean {
		// need return true
		// return this.state != nextState || this.props != nextProps;

		return false; // never to do re render, children components too

		// return JSON.stringify(this.state) != JSON.stringify(nextState) || JSON.stringify(this.props) != JSON.stringify(nextProps); // no use! this heavy operation, not be optimization
	}

	// run before update component
	// use for save current values
	public getSnapshotBeforeUpdate(
		prevProps: Readonly<ILifecycleProps>,
		prevState: Readonly<ILifecycleState>,
	): any | null { // return any or null
		return 1234;
		// return null;
	}
	// returned value will be give for next method - componentDidUpdate, value snapshot

	// this method not be run if method "shouldComponentUpdate" return false !
	public componentDidUpdate(
		prevProps: Readonly<ILifecycleProps>,
		prevState: Readonly<ILifecycleState>,
		snapshot?: any
	) {
		// for use setState, need use condition, else may be get endless cycle
		if (snapshot > 1000) {
			this.setState({});
		}
	}

	public render() {
		// this.setState({}); not use setState! component not ready...
		// return <div onClick={this.handleClick}>1</div>
		// this example, better not use on production
		if (this.state.hasError) {
			return <div>Error</div>
		}
		return <div></div>
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

	public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		// need for run site effects in time get error
		// example:
		// logError(errorInfo.componentStack);
		// not need to do that in method "getDerivedStateFromError"

		// this.setState({}) // it is error
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

	// old methods, not use!
	// UNSAFE_componentWillMount
	// UNSAFE_componentWillReceiveProps
	// UNSAFE_componentWillUpdate
}