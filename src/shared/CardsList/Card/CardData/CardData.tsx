import React from 'react';
import styles from './carddata.less';

export function CardData() {
	return (
		<div className={styles.textContent}>
			<div className={styles.metaDAta}>
				<div className={styles.userLink}>
					<img
						className={styles.avatar}
						src="data:image/png;base64,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"
						alt="avatar"
					/>

					<a className={styles.username} href="#user-url">Владимир Петров</a>
				</div>

				<span className={styles.createdAt}>
					<span>опубликовано</span>
					5 часов назад
				</span>
			</div>

			<h2 className={styles.title}>
				<a className={styles.postLink} href="#post-url">
					Следует отметить, что новая модель организационной деятельности гораздо лучше предыдущей
				</a>
			</h2>
		</div>
	);
}
