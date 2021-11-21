import React, { useState } from 'react';
import './main.global.less';
import { hot } from 'react-hot-loader/root';
import { MyHooks, useIsMounted } from './hooksExample';
import { CardsList } from './shared/CardsList';
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';
import { getValue } from './utils/react/pickFromSyntheticEvent';

function AppComponent() {
	const [isVisible, setIsVisible] = React.useState(false);
	const [title, setTitle] = React.useState('');
	// const [isVisible] = useIsMounted();

	return (
		<Layout>
			<Header />
			<Content>
				<CardsList />
				<button onClick={() => setIsVisible(!isVisible)}>Change me!</button>
				<input type="text" onChange={getValue(setTitle)} />
				{isVisible && <MyHooks title={title} id="11"/>}
			</Content>
		</Layout>
	);
}

export const App = hot(() => <AppComponent />);

// import React from 'react';
// import './main.global.less';
// import { hot } from 'react-hot-loader/root';
// import { Layout } from './shared/Layout';
// import { Header } from './shared/Header';
// import { Content } from './shared/Content';
// import { CardsList } from './shared/CardsList';

// function AppComponent() {
// 	return (
// 		<Layout>
// 			<Header />
// 			<Content>
// 				<CardsList />
// 			</Content>
// 		</Layout>
// 	);
// }

// export const App = hot(AppComponent);