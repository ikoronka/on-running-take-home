import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../../context/QuizContext.tsx';
import { Button } from '../../components/ui/Button/Button.tsx';
import { ShoeCard } from '../../components/results/ShoeCard/ShoeCard';
import styles from './ResultsPage.module.scss';

const ResultsPage = () => {
  const navigate = useNavigate();
  const { winners, others, resetQuiz } = useQuiz();

  const handleRestart = () => {
    resetQuiz();
    navigate('/quiz');
  };

  // Helper function to join all winner names
  const getWinnerText = () => {
    const names = winners.map((w) => w.name);
    if (names.length === 1) return names[0];
    return `${names.slice(0, -1).join(', ')} and ${names.slice(-1)}`;
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Congratulations!</h1>
        <p className={styles.subtitle}>
          Based on your selection we’ve decided on the <br />
          <strong>{getWinnerText()}</strong>! Enjoy the 30 day trial!
        </p>
      </header>

      {/* --- Winner Section --- */}
      <section className={styles.winnerSection}>
        {winners.map((shoe) => (
          <ShoeCard
            key={shoe.id}
            shoe={shoe}
            isWinner={true}
          />
        ))}
      </section>

      {/* --- Others Section --- */}
      {others.length > 0 && (
        <section className={styles.othersSection}>
          <h2 className={styles.sectionTitle}>Similar profiles</h2>
          <div className={styles.grid}>
            {others.map((shoe) => (
              <ShoeCard
                key={shoe.id}
                shoe={shoe}
              />
            ))}
          </div>
        </section>
      )}

      <footer>
        <Button
          onClick={handleRestart}
          variant="text"
        >
          ↻ Restart Quiz
        </Button>
      </footer>
    </div>
  );
};

export default ResultsPage;
