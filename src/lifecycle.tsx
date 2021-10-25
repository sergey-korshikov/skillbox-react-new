
import React from 'react';

interface ILifecycleProps {
	someProps: number;
}

interface ILifecycleState {
	stateField: number;
}

export class Lifecycle extends React.Component<ILifecycleProps, ILifecycleState> {
	constructor(props: ILifecycleProps) {
		super(props);

		this.state = { stateField: props.someProps };
		// прямая инициализация состояния через присваивание возможна только на этапе его инициализации, т.е. внитри конструктора или если мы его инициализируем через перегрузку, в любых других местах компонента можно работать с ним только через функцию setState
		// не следует копировать пропы в поля состояния при инициализации, это приведет к тому что мы начнем пользоваться производным состоянием, т.е. состоянием, которое зависит от значения пропров и из за этого оно не будет меняться автоматически, можно сделать только с пониманием этого, но это редкость, по этому с этим нужно быть осторожным и стараться избегать этого
	}
}