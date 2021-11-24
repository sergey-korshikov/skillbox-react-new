// import React, { useState } from 'react';
// import './main.global.less';
// import { hot } from 'react-hot-loader/root';
// import { MyHooks, useIsMounted } from './hooksExample';
// import { CardsList } from './shared/CardsList';
// import { Content } from './shared/Content';
// import { Header } from './shared/Header';
// import { Layout } from './shared/Layout';
// import { getValue } from './utils/react/pickFromSyntheticEvent';

// function AppComponent() {
// 	const [isVisible, setIsVisible] = React.useState(false);
// 	const [title, setTitle] = React.useState('');
// 	// const [isVisible] = useIsMounted();

// 	return (
// 		<Layout>
// 			<Header />
// 			<Content>
// 				<CardsList />
// 				<button onClick={() => setIsVisible(!isVisible)}>Change me!</button>
// 				<input type="text" onChange={getValue(setTitle)} />
// 				{isVisible && <MyHooks title={title} id="11"/>}
// 			</Content>
// 		</Layout>
// 	);
// }

// export const App = hot(() => <AppComponent />);

import React from 'react';
import './main.global.less';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { generateId } from './utils/react/generateRandomIndex';
import { GenericList } from './shared/GenericList';
import { merge } from './utils/js/merge';
import { generateRandomString } from './utils/react/generateRandomIndex';

const LIST = [
	{ As: 'li' as const, text: 'some' },
	{ As: 'li' as const, text: 'other some' },
	{ As: 'li' as const, text: 'some' },
].map(generateId);

function AppComponent() {
	const [list, setList] = React.useState(LIST);
	// устанавливаем текущее состояние как LIST

	const handleRemoveItem = (id: string) => {
		setList(list.filter((item) => item.id != id));
	}

	const handleAddItem = () => {
		setList(list.concat(generateId({ text: generateRandomString(), As: 'li' as const })));
	}
	// по клику меняем состояние списка
	// далее возвращаем обновленный список

	return (
		<Layout>
			<Header />
			<Content>
				<CardsList />
				{/* локальный onClick */}
				{/* <GenericList list={LIST.map((item) => ({ ...item, onClick: () => { console.log(item.id) } }))} /> */}

				{/* глобавльный onClick */}
				{/* <GenericList list={LIST} onClick={console.log} /> */}

				{/* с merge */}
				<button onClick={handleAddItem}>Add element</button>
				<ul>
					<GenericList list={list.map(merge({ onClick: handleRemoveItem }))} />
				</ul>
			</Content>
		</Layout>
	);
}

// export const App = hot(AppComponent);
export const App = hot(() => <AppComponent />);