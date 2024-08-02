import React, { useState } from 'react';
import Logo from '../Logo/Logo.jsx';
import styles from './Header.module.css';

const Header = () => {
	const [burgerActive, setBurgerActive] = useState(false);

	const handleClick = () => {
		setBurgerActive(!burgerActive);
	};

	const handleLinkClick = () => {
		setBurgerActive(false);
	};

	return (
		<header className={styles.header} id='header'>
			<div className={styles.container}>
				<div className={styles.content}>
					<Logo />
					<nav className={`${styles.nav} ${burgerActive ? styles.active : ''}`}>
						<ul>
							<li>
								<a href='#header' onClick={handleLinkClick}>
									Home
								</a>
							</li>
							<li>
								<a href='#about' onClick={handleLinkClick}>
									About me
								</a>
							</li>
							<li>
								<a href='#projects' onClick={handleLinkClick}>
									Projects
								</a>
							</li>
							<li>
								<a href='#skills' onClick={handleLinkClick}>
									Skills
								</a>
							</li>
							<li>
								<a href='#media' onClick={handleLinkClick}>
									Contacts
								</a>
							</li>
						</ul>
					</nav>
					<div
						className={`${styles.burger} ${burgerActive ? styles.active : ''}`}
						onClick={handleClick}
					>
						<span></span>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
