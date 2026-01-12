import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../Header/Header';
import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  const location = useLocation();
  const isDarkTheme = location.pathname.includes('/quiz');

  const layoutClasses = [styles.layout, isDarkTheme ? styles['layout--dark'] : ''].join(' ').trim();

  return (
    <div className={layoutClasses}>
      <Header />

      <main
        id="main-content"
        className={styles.layout__content}
      >
        <Outlet />
      </main>
    </div>
  );
};
