import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import Header from '../Header/Header.jsx';
import Text from '../Text/Text.jsx';
import Button from '../Btn/Btn.jsx';
import Image from '../Image/Image.jsx';
import RepositoryList from '../CardProject/CardProject.jsx';
import CodingSkillsList from '../Skills/CodingSkills.jsx';
import ProfSkillsList from '../Skills/ProfSkills.jsx';
import Media from '../Media/Media.jsx';
import Footer from '../Footer/Footer.jsx';
import mainBg from '../../assets/main-bg.png';
import styles from './Hero.module.css';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);
const { FadeIn } = gsap;

function Hero() {
  const textRef = useRef(null);
  const iconsRef = useRef(null);
  const imageRef = useRef(null);
	const aboutTextRef = useRef(null);
	const aboutTextSecondRef = useRef(null);
	const aboutImageRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const iconsElement = iconsRef.current;
    const imageElement = imageRef.current;
		const aboutTextElement = aboutTextRef.current;
		const aboutTextSecondElement = aboutTextSecondRef.current;
		const aboutImageElement = aboutImageRef.current;

    gsap.set(textElement, { x: -900 });
    gsap.to(textElement, { x: 0, duration: 1.3, ease: 'power2.out' });

    gsap.set(iconsElement, { x: -900 });
    gsap.to(iconsElement, { x: 0, duration: 1.3, ease: 'power2.out' });

    gsap.set(imageElement, { opacity: 0 });
    gsap.to(imageElement, { opacity: 1, duration: 1, delay: 0.5 });

		gsap.set(aboutTextElement, {x: -1300});
		gsap.to(aboutTextElement, {
      x: 0,
      duration: 1.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: aboutTextSecondElement,
        start: 'top 90%', // Начало анимации при достижении 80% от верха экрана
      },
    });

		gsap.set(aboutTextSecondElement, {x: -1300});
		gsap.to(aboutTextSecondElement, {
      x: 0,
      duration: 1.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: aboutTextSecondElement,
        start: 'top 90%', // Начало анимации при достижении 80% от верха экрана
      },
    });

		gsap.set(aboutImageElement, { opacity: 0 });
    gsap.to(aboutImageElement, { 
			opacity: 1, 
			duration: 1.7, 
			ease: 'power2.out',
      scrollTrigger: {
        trigger: aboutImageElement,
        start: 'top 90%', // Начало анимации при достижении 80% от верха экрана
      }, });

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
                <h3> Я - <span>Frontend Developer</span></h3>
              </div>
              <Button />
              <div className={styles.flexIcons} ref={iconsRef}>
                <a href="https://github.com/kwinkich" className={styles.iconLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://t.me/kwinkich" className={styles.iconLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTelegram} />
                </a>
                <a href="https://www.linkedin.com/in/%D0%B8%D0%B2%D0%B0%D0%BD-%D1%82%D0%BA%D0%B0%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-012873254/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <img src={mainBg} alt="" ref={imageRef}/>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.aboutUs} id='about'>
        <div className={styles.container}>
          <div className={styles.contentAbout}>
            <h2 className={styles.heading} ref={aboutTextRef}>Про <span>Мене</span></h2>
            <Image username="kwinkich" alt="" ref={imageRef} />
            <p className={styles.paragraphAbout} ref={aboutTextSecondRef}>Я програміст-початківець. Живу в Україні, а точніше в Одесі. Прагну стати професійним full-stack розробником. Активно вивчаю нові методології, фреймворки, способи написання коду і багато іншого в обраному напрямку.</p>
          </div>
        </div>
      </section>

      <section className={styles.projects} id='projects'>
        <div className={styles.container}>
          <div className={styles.projectsContent}>
            <h2 className={styles.heading}>Мої <span>проєкти</span></h2>
            <div className={styles.contentProjects}>
              <RepositoryList />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.skills} id='skills'>
        <div className={styles.container}>
          <div className={styles.skillsContent}>
          <h2 className={styles.heading}>Мої <span>навички</span></h2>
          <div className={styles.skillBlock}>
            <div className={styles.skillCoding}>
              <CodingSkillsList />
            </div>
            <div className={styles.profCoding}>
              <ProfSkillsList />
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className={styles.media} id='media'>
        <div className={styles.container}>
          <div className={styles.heading}>Мої <span>контакти</span></div>
          <div className={styles.mediaContent}>
            <Media />
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}

export default Hero;
