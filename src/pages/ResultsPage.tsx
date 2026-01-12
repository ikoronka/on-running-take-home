import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { Button } from '../components/ui/Button/Button.tsx';
import { ShoeCard } from '../components/results/ShoeCard/ShoeCard';

const ResultsPage = () => {
  const navigate = useNavigate();
  const { results, resetQuiz } = useQuiz();

  const handleRestart = () => {
    resetQuiz();
    navigate('/quiz');
  };

  return (
    <>
      {results.length === 0 ? (
        <p>No results yet.</p>
      ) : (
        <>
          {results.map((shoe) => (
            <div key={shoe.id}>
              <ShoeCard
                shoe={shoe}
                winner={false}
              />
            </div>
          ))}
        </>
      )}
      <Button
        onClick={handleRestart}
        variant={'text'}
      >
        Restart
      </Button>
    </>
  );
};

export default ResultsPage;
