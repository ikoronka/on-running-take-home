import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { Loader } from '../components/ui/Loader/Loader.tsx';
import { QuizCard } from '../components/quiz/QuizCard/QuizCard.tsx';

const QuizPage = () => {
  const navigate = useNavigate();
  const { currentQuestion, isLoading, isFinished, handleAnswer } = useQuiz();

  useEffect(() => {
    if (isFinished) {
      navigate('/results');
    }
  }, [isFinished, navigate]);

  if (!currentQuestion) {
    return (
      <>
        <h1>Quiz</h1>
        <p>No question available.</p>
      </>
    );
  }

  return (
    <>
      <h1>Quiz</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <QuizCard
            question={currentQuestion}
            onAnswerSelect={handleAnswer}
          />
        </>
      )}
    </>
  );
};

export default QuizPage;
