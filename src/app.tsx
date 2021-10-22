import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout/Layout';

function AppComponent() {
	return (
		<Layout>
			content
		</Layout>
	);
}

export const App = hot(AppComponent);