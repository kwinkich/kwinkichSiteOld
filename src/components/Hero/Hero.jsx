import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import Header from '../Header/Header.jsx';
import Text from '../Text/Text.jsx';
import Button from '../Btn/Btn.jsx'
import Image from '../Image/Image.jsx'
import RepositoryList from '../CardProject/CardProject.jsx'
import CodingSkillsList from '../Skills/CodingSkills.jsx'
import ProfSkillsList from '../Skills/ProfSkills.jsx'
import Media from '../Media/Media.jsx'
import Footer from '../Footer/Footer.jsx'
import mainBg from '../../assets/main-bg.png'
import styles from './Hero.module.css'


function Hero() {
	return (
		<div className={styles.wrapper}>
			<Header />

			<section className={styles.hero} id='hero'>
				<div className={styles.container}>
					<div className={styles.heroContent}>
						<div className={styles.heroInfo}>
							<Text />
							<div className={styles.textAnimate}>
								<h3> Я - <span>Frontend Developer</span></h3>
							</div>
							<Button />
							<div className={styles.flexIcons}>
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
							<img src={mainBg} alt="" />
						</div>
					</div>
				</div>
			</section>

			<section className={styles.aboutUs} id='about'>
				<div className={styles.container}>
					<div className={styles.contentAbout}>
						<h2 className={styles.heading}>Про <span>Мене</span></h2>
						<Image username="kwinkich" />
						<p className={styles.paragraphAbout}>Я програміст-початківець. Живу в Україні, а точніше в Одесі. Прагну стати професійним full-stack розробником. Активно вивчаю нові методології, фреймворки, способи написання коду і багато іншого в обраному напрямку.</p>
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
