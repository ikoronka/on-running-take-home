import { Button } from '../../components/ui/Button/Button.tsx';
import styles from './LandingPage.module.scss';

const LandingPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.title}>Take the quiz and try your first pair!</h1>

        <Button
          variant="primary"
          to="/quiz"
        >
          Try On Trial
        </Button>

        <p className={styles.subtitle}>30 Days risk free</p>
      </div>
    </div>
  );
};

export default LandingPage;
