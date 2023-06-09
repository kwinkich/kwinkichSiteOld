import Logo from '../Logo/Logo.jsx'
import styles from './Header.module.css'
import ukr from '../../assets/ukr.png'
import en from '../../assets/en.png'
import '../../index.css'

function Header() {
	return(
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.content}>
					<Logo />
					<nav className={styles.nav}>
						<ul>
							<li><a href="#hero">Головна</a></li>
							<li><a href="#about">Про мене</a></li>
							<li><a href="#projects">Проєкти</a></li>
							<li><a href="#skills">Навички</a></li>
							<li><a href="#media">Контакти</a></li>
						</ul>
					</nav>
					<div className={styles.burger}>
						<span></span>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
