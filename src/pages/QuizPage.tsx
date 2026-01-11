import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';

import { Button } from '../components/ui/Button/Button.tsx';
import { Loader } from '../components/ui/Loader/Loader.tsx';

const QuizPage = () => {
  const navigate = useNavigate();
  const { currentQuestion, isLoading, handleAnswer, isFinished } = useQuiz();

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
          <h2>{currentQuestion.copy}</h2>
          <ul>
            {currentQuestion.answers.map((answer) => (
              <Button
                key={answer.copy}
                onClick={() => handleAnswer(answer)}
                variant="outline"
              >
                {answer.copy}
              </Button>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default QuizPage;
