import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';

const ResultsPage = () => {
  const navigate = useNavigate();
  const { results, ratings } = useQuiz();

  const handleRestart = () => {
    navigate('/');
    // TODO: replace with soft reset
    window.location.reload();
  };

  return (
    <>
      <h1>Results</h1>
      {results.length === 0 ? (
        <p>No results yet.</p>
      ) : (
        <ol>
          {results.map((shoe) => (
            <li key={shoe.id}>
              {shoe.name} - Score: {ratings[shoe.id] ?? 0}
            </li>
          ))}
        </ol>
      )}
      <button onClick={handleRestart}>Restart</button>
    </>
  );
};

export default ResultsPage;
