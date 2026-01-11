import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';

const LandingPage = () => {
  const navigate = useNavigate();
  // Ensure the context exists so the quiz data is loaded before navigating
  useQuiz();

  const handleStart = () => {
    navigate('/quiz');
  };

  return (
    <>
      <h1>Landing</h1>
      <button onClick={handleStart}>Start Quiz</button>
    </>
  );
};

export default LandingPage;
