import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../Logo/Logo.jsx';
import styles from './Footer.module.css';

function Footer() {
	return (
		<footer id='#footer' className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.footerContent}>
					<Logo />
					<a href='#header' className={styles.blockUp}>
						<FontAwesomeIcon icon={faArrowUp} className={styles.upIcon} />
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
