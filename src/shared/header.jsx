import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import styles from './header.less';

function HeaderComponent() {
	return (
		<header>
			<h1 className={styles.example}>REddit for our own!!!</h1>
			<p>Hello there</p>
		</header>
	);
}

export const Header = hot(HeaderComponent);
