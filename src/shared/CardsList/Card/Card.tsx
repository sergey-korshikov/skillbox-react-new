import React from 'react';
import styles from './card.less';
import { CardMenu } from './CardMenu';
import { CardControls } from './CardControls/CardControls';
import { CardData } from './CardData/CardData';

export function Card() {
	return (
		<li className={styles.card}>
			<CardData />

			<div className={styles.preview}>
				<img
					className={styles.previewImg}
					src="https://cdn.dribbble.com/users/702789/screenshots/14180854/media/52077d8e2b90adafce16b9fb2318fcca.png"
					alt="post preview"
				/>
			</div>

			<CardMenu />

			<CardControls />
		</li>
	);
}
