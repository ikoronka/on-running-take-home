import styles from './Header.module.scss';
import logo from '../../../assets/on-logo.png';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <button
          className={styles.header__hamburger}
          aria-label="Open main menu"
          aria-expanded="false"
          aria-controls="main-menu"
        >
          <span
            className={styles.header__line}
            aria-hidden="true"
          ></span>
          <span
            className={styles.header__line}
            aria-hidden="true"
          ></span>
          <span
            className={styles.header__line}
            aria-hidden="true"
          ></span>
        </button>
      </nav>

      <div className={styles.header__logo}>
        <a
          href="/"
          aria-label="On Running Homepage"
        >
          <img
            src={logo}
            alt="On Running Logo"
          />
        </a>
      </div>

      <div className={styles.header__placeholder}></div>
    </header>
  );
};
