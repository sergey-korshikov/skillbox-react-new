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
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAWlBMVEXY2Nh0eoDb29txd31udHttc3re3t3W1tZ1e4HJysvP0NDExceEiY6jpqmxs7WLj5S7vb+rrbB+g4mSlpqgo6aZnaG8vsB7gIaoqq2vsbSCh4yVmZ2IjZHGx8lavitvAAAGo0lEQVR4nO2d53KjMBCAYVUAUU03mPd/zRO2k0tyPhuxYFYZfb9SZjJ82UVlVex5DofD4XA4HA6Hw+FwOBwOh8PhcDgcDoc9AEhPRVM8ReroR9kDkEHbX8oqPcfRbzQEKHIu8syTGrhx9DNtChSD6E6RKk5pU1XV2NRpVsQqCI5+sI2AoBJ+leah4Iwxv6zq/nQu4mg2DH6FpRqYH3ba7UrYhWwWDcs8LZT8Fdla3t1+whjnXR17tjvKhj8WvGuKLo3sDmT0nwh+jWVVWOwo65eG2pEnsbTSESCIyteC12RNIvsUQZ1zXywSvMYxtazNAa/3+YIM/QsvY5sUIQqftqGPw3iWRz/3YiC+tF5jFMIZUSlbwhhkALlxEHUYw1NgiSN4F+MIXuFdb0eLA+OKCN7jyOqIviQUi7uJR468yibikw4IEYKaoS480iM5yFbn6D2Igpd1QbjcAcO6ZuZOmJ2zdorjSZFN1dcTiuchbKnPjOGMTNILbb+5q8DF0GfR0QqvSLCGPfEgBh1OUKfp0QovUFhDn5FtRG8oZH+vJxkt7TTFG/ITcUN8lja0DdEtjc9y4obLCmzPGGgbegPasCNuiO3x9eCbtiGsrGB8gdE2lPlvN0SPvOln6ZLlmOcQb2mgxxqyhLghskyjDSvihi3asCZuGKOzlPjI21NIQZ8XxA097PRJ0K2U3pDYoXdHfI6P7vKpT5604QlpmJI3jDFLT7qhiSXt9W4AiewuslNCuSgMcZoiZxecccJFYZ2ijOGnT4T7fDhhx2zXKBLu8/Hj7iuU+/wI15DeGCg3poAvRBGfXGAXSGcE7T1u+HUL8pWoCj0/HIkbFtg05RltQy/Apimn3FfMSGyaluTnh9g9UeTnh96E6/SpL5BqAqQh+RmwB8gZMPWmVBvi1rk57RHNDOBmwPR3fWHXZsgXE7GlKJZTnjp9gKkJU67RfLJ6BhUOzOf0X8OZRKx6FYcgYY0NSao7/XOxQpCN0rPmnB6sqWZQ37L3HUjNDYlXL36wZik4pN8TfsN47EZ9h8JPzPfVWDDk/o55bZh69eInpqvdtiWp+SE9yssx/8PsiFdpn6DZ7ijqZxAeAv3yPBX060+PWF5YpLzq+xS59Fh+aFtP8cHiRQwLShf/YWm3b6+h+vUxVEtjaOt7uHxwakd15l9kvDBLLSh0PwTqxaOa0MJRqWe0HMyoH1h7iNFaqbAxiGb1NgvnFtKs9M3PtilCZliosa3XN7+Hx7YgrjjxXB79zEaA+XVmdpUTZb9qgc2W28w8MBjMfIUNkQ3XYAJ47bByiZTx5DQFpO/BAlDFGK5bH705MsESstfvglRZHppdevnYUodS0cvX+WZywzs9n0hylrekHAGiejO9u6ToMjJtKwRFvq3eDd6lJG78hKAv9/CbYX5zeAcCqsEfdHrmyPP4wN5Ddw7NXuH76yiS4qDeA+Q07hq/v47lEb0HyDh/i98V7o/Tex3BK1Zu7VoLE0P2tmTVr19fvtfv6sjDt3zSAMigqPxNjhmukGSXbN83EgDacePBi6Ej96v9buHVY5eRvT87/5Xk1S6zDwjSDSYO26D7j3TaOJAAmflt+XvCWL7pB2PAtHbevh/zh39spQheTyU/v8HEuM0EC6ILuQDeYeUW8ytofYoBvME2OK6Iuyd/dzbY04g8qbU7+BVyRTdFr6AXA/AXsO0Mek8c/vj5zqCvOKdviD1WSz9L0TFsibc0eEP0RYg74wx/gSG6pSFviL2SiL4hdmBK3hB9cRZ9w9AZOkNneDjO8CXB0QYvwF8sRb0StcGFNtB2dBOVlVtcNAFB/b71bCMYbzbaVfSOPRfmMFFN263N7L1vxhzGq43XvCE4DWQCyXhXq+2vsgGvHSkskjLOqmKnXX0wb9ITh0oyLoaz2nNLBsgg224jqbEee8vmWpCqqDr+7paH8TDfea/JV0kI2jThbwslY6Jril2T85HkvPsk3N+SzXui++iYLfwAMsqqku2Wsfovd/kphkO30ep/bZQ1yeaWOnS8HLMpIPEhz/oZVFEnfKOORMsJdqkLFVCQ+0S/l16cNYOPiub80oVaTg/ISNl9oJ9KBloz6XQDZObJ5qwMhyrVciTy8gnzf19FRTpetOdr0aua8JNRuymPutwX5iQLVJzVVRIKcVNln7rXL/UPhQgvTZ+1UeDRzMqXzPGUEtRUZGndjFWeDKVmuORNfcqKWM2/tdTtO3BHfnD//ujncjgcDofD4XA4HA6Hw+FwOBwOh8NBij9AwGWhlgF+qAAAAABJRU5ErkJggg=="
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

			<div className={styles.preview}>
				<img
					className={styles.previewImg}
					src="https://cdn.dribbble.com/users/702789/screenshots/14180854/media/52077d8e2b90adafce16b9fb2318fcca.png"
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

				<button className={styles.commentsButton}>
					<svg width="15" height="15" viewBox="0 0 15 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
						<path d="M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z"/>
					</svg>
					<span className={styles.commentsNumber}>13</span>
				</button>

				<div className={styles.actions}>
					<button className={styles.shareButton}>
						<svg width="10" height="10" viewBox="0 0 8 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M6.66667 7.06827C6.32889 7.06827 6.02667 7.21888 5.79556 7.45482L2.62667 5.37149C2.64889 5.25602 2.66667 5.14056 2.66667 5.02008C2.66667 4.8996 2.64889 4.78414 2.62667 4.66867L5.76 2.60542C6 2.85643 6.31556 3.01205 6.66667 3.01205C7.40444 3.01205 8 2.33936 8 1.50602C8 0.672691 7.40444 0 6.66667 0C5.92889 0 5.33333 0.672691 5.33333 1.50602C5.33333 1.62651 5.35111 1.74197 5.37333 1.85743L2.24 3.92068C2 3.66968 1.68444 3.51406 1.33333 3.51406C0.595556 3.51406 0 4.18675 0 5.02008C0 5.85341 0.595556 6.5261 1.33333 6.5261C1.68444 6.5261 2 6.37048 2.24 6.11948L5.40444 8.20783C5.38222 8.31325 5.36889 8.42369 5.36889 8.53414C5.36889 9.34237 5.95111 10 6.66667 10C7.38222 10 7.96444 9.34237 7.96444 8.53414C7.96444 7.7259 7.38222 7.06827 6.66667 7.06827Z"/>
						</svg>
					</button>

					<button className={styles.saveButton}>
						<svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 2H0V9C0 9.55 0.45 10 1 10H8V9H1V2ZM9 0H3C2.45 0 2 0.45 2 1V7C2 7.55 2.45 8 3 8H9C9.55 8 10 7.55 10 7V1C10 0.45 9.55 0 9 0ZM8.5 4.5H6.5V6.5H5.5V4.5H3.5V3.5H5.5V1.5H6.5V3.5H8.5V4.5Z"/>
						</svg>
					</button>
				</div>
			</div>
		</li>
  );
}
