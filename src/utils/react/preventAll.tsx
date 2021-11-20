import React from 'react';

export function preventAll<T extends (e: any) => void>(fn: T) {
	return <E extends React.SyntheticEvent<any>>(e: E) => {
		e.preventDefault();
		e.stopPropagation();
		fn(e);
	};
}
