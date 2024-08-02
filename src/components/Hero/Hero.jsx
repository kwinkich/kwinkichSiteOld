import {
	faGithub,
	faLinkedin,
	faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import mainBg from '../../assets/main-bg.png';
import Button from '../Btn/Btn.jsx';
import RepositoryList from '../CardProject/CardProject.jsx';
import Footer from '../Footer/Footer.jsx';
import Header from '../Header/Header.jsx';
import Image from '../Image/Image.jsx';
import Media from '../Media/Media.jsx';
import CodingSkillsList from '../Skills/CodingSkills.jsx';
import ProfSkillsList from '../Skills/ProfSkills.jsx';
import Text from '../Text/Text.jsx';
import styles from './Hero.module.css';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
	const textRef = useRef(null);
	const iconsRef = useRef(null);
	const imageRef = useRef(null);
	const aboutTextRef = useRef(null);
	const aboutTextSecondRef = useRef(null);
	const aboutImageRef = useRef(null);
	const projectsTextRef = useRef(null);
	const cardProjectsRef = useRef(null);
	const skillsTextRef = useRef(null);
	const codingSkillsRef = useRef(null);
	const profSkillsRef = useRef(null);
	const mediaTextRef = useRef(null);
	const mediaRef = useRef(null);

	useEffect(() => {
		const textElement = textRef.current;
		const iconsElement = iconsRef.current;
		const imageElement = imageRef.current;
		const aboutTextElement = aboutTextRef.current;
		const aboutTextSecondElement = aboutTextSecondRef.current;
		const aboutImageElement = aboutImageRef.current;
		const projectsTextElement = projectsTextRef.current;
		const cardProjectsElement = cardProjectsRef.current;
		const skillsTextElement = skillsTextRef.current;
		const codingSkillsElement = codingSkillsRef.current;
		const profSkillsElement = profSkillsRef.current;
		const mediaTextElement = mediaTextRef.current;
		const mediaElement = mediaRef.current;

		gsap.set(textElement, { x: -900 });
		gsap.to(textElement, { x: 0, duration: 1.3, ease: 'power2.out' });

		gsap.set(iconsElement, { x: -900 });
		gsap.to(iconsElement, { x: 0, duration: 1.3, ease: 'power2.out' });

		gsap.set(imageElement, { opacity: 0 });
		gsap.to(imageElement, { opacity: 1, duration: 1, delay: 0.5 });

		gsap.set(aboutTextElement, { x: -1300 });
		gsap.to(aboutTextElement, {
			x: 0,
			duration: 1.3,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: aboutTextSecondElement,
				start: 'top 90%',
			},
		});

		gsap.set(aboutTextSecondElement, { x: -1300 });
		gsap.to(aboutTextSecondElement, {
			x: 0,
			duration: 1.7,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: aboutTextSecondElement,
				start: 'top 90%',
			},
		});

		gsap.set(aboutImageElement, { opacity: 0 });
		gsap.to(aboutImageElement, {
			opacity: 1,
			duration: 1.7,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: aboutImageElement,
				start: 'top 90%',
			},
		});

		gsap.set(projectsTextElement, { x: -1300 });
		gsap.to(projectsTextElement, {
			x: 0,
			duration: 1.3,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: projectsTextElement,
				start: 'top 90%',
			},
		});

		gsap.set(cardProjectsElement, { x: -1300 });
		gsap.to(cardProjectsElement, {
			x: 0,
			duration: 2,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: cardProjectsElement,
				start: 'top 90%',
			},
		});

		gsap.set(skillsTextElement, { x: -1300 });
		gsap.to(skillsTextElement, {
			x: 0,
			duration: 1.3,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: skillsTextElement,
				start: 'top 80%',
			},
		});

		gsap.set(codingSkillsElement, { x: -1300 });
		gsap.to(codingSkillsElement, {
			x: 0,
			duration: 2,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: codingSkillsElement,
				start: 'top 80%',
			},
		});

		gsap.set(profSkillsElement, { x: -1300 });
		gsap.to(profSkillsElement, {
			x: 0,
			duration: 2,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: profSkillsElement,
				start: 'top 80%',
			},
		});

		gsap.set(mediaTextElement, { x: -1300 });
		gsap.to(mediaTextElement, {
			x: 0,
			duration: 2,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: mediaTextElement,
				start: 'top 80%',
			},
		});

		gsap.set(mediaElement, { x: -1300 });
		gsap.to(mediaElement, {
			x: 0,
			duration: 2,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: mediaElement,
				start: 'top 80%',
			},
		});
	}, []);

	return (
		<div className={styles.wrapper}>
			<Header />

			<section className={styles.hero} id='hero'>
				<div className={styles.container}>
					<div className={styles.heroContent}>
						<div className={styles.heroInfo}>
							<Text />
							<div className={styles.textAnimate} ref={textRef}>
								<h3>
									{' '}
									I'm - <span>Frontend Developer</span>
								</h3>
							</div>
							<Button />
							<div className={styles.flexIcons} ref={iconsRef}>
								<a
									href='https://github.com/kwinkich'
									className={styles.iconLink}
									target='_blank'
									rel='noopener noreferrer'
								>
									<FontAwesomeIcon icon={faGithub} />
								</a>
								<a
									href='https://t.me/kwinkich'
									className={styles.iconLink}
									target='_blank'
									rel='noopener noreferrer'
								>
									<FontAwesomeIcon icon={faTelegram} />
								</a>
								<a
									href='https://www.linkedin.com/in/%D0%B8%D0%B2%D0%B0%D0%BD-%D1%82%D0%BA%D0%B0%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-012873254/'
									target='_blank'
									rel='noopener noreferrer'
									className={styles.iconLink}
								>
									<FontAwesomeIcon icon={faLinkedin} />
								</a>
							</div>
						</div>
						<div className={styles.heroImage}>
							<img src={mainBg} alt='' ref={imageRef} />
						</div>
					</div>
				</div>
			</section>

			<section className={styles.aboutUs} id='about'>
				<div className={styles.container}>
					<div className={styles.contentAbout}>
						<h2 className={styles.heading} ref={aboutTextRef}>
							<span>About me</span>
						</h2>
						<Image username='kwinkich' alt='' ref={imageRef} />
						<p className={styles.paragraphAbout} ref={aboutTextSecondRef}>
							I am a front-end developer with over a year of experience. I try
							to improve my skills regularly, learning new materials,
							technologies and languages. I am always happy to answer newcomers'
							questions and help them with bug fixing. Open to commercial
							offers. I will consult, answer all your questions and develop a
							selling, interesting, high-quality and safe product for your
							business.
						</p>
					</div>
				</div>
			</section>

			<section className={styles.projects} id='projects'>
				<div className={styles.container}>
					<div className={styles.projectsContent}>
						<h2 className={styles.heading} ref={projectsTextRef}>
							My <span>projects</span>
						</h2>
						<div className={styles.contentProjects}>
							<RepositoryList ref={cardProjectsRef} />
						</div>
					</div>
				</div>
			</section>

			<section className={styles.skills} id='skills'>
				<div className={styles.container}>
					<div className={styles.skillsContent}>
						<h2 className={styles.heading} ref={skillsTextRef}>
							My <span>skills</span>
						</h2>
						<div className={styles.skillBlock}>
							<div className={styles.skillCoding} ref={codingSkillsRef}>
								<CodingSkillsList />
							</div>
							<div className={styles.profCoding} ref={profSkillsRef}>
								<ProfSkillsList />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className={styles.media} id='media'>
				<div className={styles.container}>
					<div className={styles.heading} ref={mediaTextRef}>
						My <span>contacts</span>
					</div>
					<div className={styles.mediaContent}>
						<Media ref={mediaRef} />
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}

export default Hero;
