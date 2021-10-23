import React from 'react';
import styles from './card.less';

export function Card() {
  return (
		<li className={styles.card}>
			<div className={styles.textContent}>
				<div className={styles.metaDAta}>
					<div className={styles.userLink}>
						<img
							className={styles.avatar}
							src="/static/images/avatar.png"
							alt="avatar"
						/>
						<a className={styles.username} href="#user-url">Владимир Петров</a>
					</div>

					<span className={styles.createdAt}>5 часов назад</span>
				</div>

				<h2 className={styles.title}>
					<a className={styles.postLink} href="#post-url">
						Следует отметить, что новая модель организационной деятельности гораздо лучше предыдущей
					</a>
				</h2>
			</div>

			<div className={styles.preview}>
				<img
					className={styles.previewImg}
					src="/static/images/post-preview.jpg"
					alt="post preview"
				/>
			</div>

			<div className={styles.menu}>
				<button className={styles.menuButton}>
					<svg width="5" height="20" viewBox="0 0 5 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<circle cx="2.5" cy="2.5" r="2.5"/>
						<circle cx="2.5" cy="10" r="2.5"/>
						<circle cx="2.5" cy="17.5" r="2.5"/>
					</svg>
				</button>
			</div>

			<div className={styles.controls}>
				<div className={styles.karmaCounter}>
					<button className={styles.up}>
						<svg width="19" height="10" viewBox="0 0 19 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M9.5 0L0 10H19L9.5 0Z"/>
						</svg>
					</button>
					<span className={styles.karmaValue}>286</span>
					<button className={styles.down}>
						<svg width="19" height="10" viewBox="0 0 19 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z"/>
						</svg>
					</button>
				</div>
			</div>
		</li>
  );
}
