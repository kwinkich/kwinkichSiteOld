import {
	faGithub,
	faLinkedin,
	faTelegram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import styles from './Media.module.css';

const Media = () => {
	const MEDIAS = [
		{
			name: 'LinkedIn',
			icon: faLinkedin,
			link: 'https://www.linkedin.com/in/%D0%B8%D0%B2%D0%B0%D0%BD-%D1%82%D0%BA%D0%B0%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-012873254/',
		},
		{ name: 'Telegram', icon: faTelegram, link: 'https://t.me/kwinkich_dev' },
		{ name: 'GitHub', icon: faGithub, link: 'https://github.com/kwinkich' },
		{ name: 'Twitter', icon: faTwitter, link: 'https://twitter.com/kwinkich' },
	];

	const mediaWrapperRef = useRef(null);
	useEffect(() => {
		const mediaWrapperElement = mediaWrapperRef.current;
		gsap.set(mediaWrapperElement, { x: -1300 });
		gsap.to(mediaWrapperElement, {
			x: 0,
			duration: 2,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: mediaWrapperElement,
				start: 'top 90%', // Начало анимации при достижении 80% от верха экрана
			},
		});
	}, []);

	return (
		<div>
			<div className={styles.mediaGrid} ref={mediaWrapperRef}>
				{MEDIAS.map((media, index) => (
					<div key={index} className={styles.mediaCard}>
						<a href={media.link} target='_blank' rel='noopener noreferrer'>
							<div className={styles.cardContent}>
								<FontAwesomeIcon
									icon={media.icon}
									className={styles.mediaIcon}
								/>
								<h2 className={styles.mediaName}>{media.name}</h2>
							</div>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Media;
