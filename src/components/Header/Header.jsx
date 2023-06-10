import React, { useState } from 'react';
import Logo from '../Logo/Logo.jsx';
import styles from './Header.module.css';

const Header = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  const handleClick = () => {
    setBurgerActive(!burgerActive);
  };

  const handleLinkClick = () => {
    setBurgerActive(false); // Установите burgerActive в false при клике на ссылку
  };

  return (
    <header className={styles.header} id='header'>
      <div className={styles.container}>
        <div className={styles.content}>
          <Logo />
          <nav className={`${styles.nav} ${burgerActive ? styles.active : ''}`}>
            <ul>
              <li>
                <a href="#header" onClick={handleLinkClick}>
                  Головна
                </a>
              </li>
              <li>
                <a href="#about" onClick={handleLinkClick}>
                  Про мене
                </a>
              </li>
              <li>
                <a href="#projects" onClick={handleLinkClick}>
                  Проєкти
                </a>
              </li>
              <li>
                <a href="#skills" onClick={handleLinkClick}>
                  Навички
                </a>
              </li>
              <li>
                <a href="#media" onClick={handleLinkClick}>
                  Контакти
                </a>
              </li>
            </ul>
          </nav>
          <div className={`${styles.burger} ${burgerActive ? styles.active : ''}`} onClick={handleClick}>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
