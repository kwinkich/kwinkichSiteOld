import { useEffect, useRef } from 'react';
import styles from './Text.module.css';

function Text() {
	const containerRef = useRef(null);
	const textRef = useRef(null);

	useEffect(() => {
		const svgText = textRef.current.getBBox();
		const container = containerRef.current;

		container.style.width = `${svgText.width}px`;
		container.style.height = `${svgText.height}px`;
	}, []);

	return (
		<main ref={containerRef} className={styles.textContainer}>
			<svg
				className={styles.textStroke}
				viewBox='0 50 600 50'
				width='100%'
				height='100%'
			>
				<text ref={textRef} className={styles.text} x='0' y='85'>
					Hello, I'm Kwinkich
				</text>
			</svg>
		</main>
	);
}

export default Text;
