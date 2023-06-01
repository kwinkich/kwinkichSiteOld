import styles from './Footer.module.css'
import Logo from '../Logo/Logo.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
	return(
			<footer id="#footer" className={styles.footer}>
				<div className={styles.container}>
					<div className={styles.footerContent}>
					<Logo/>
							<div className={styles.blockMail}>
								<p>Почта для  зв`язку</p>
								<a href="#">vankord21@gmail.com</a>
							</div>
							<button className={styles.blockUp}>
								<FontAwesomeIcon icon={faArrowUp} className={styles.upIcon}/>
							</button>
					</div>
				</div>
			</footer>
	)
}

export default Footer;
