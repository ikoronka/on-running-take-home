import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';

const QuizPage = () => {
  const navigate = useNavigate();
  const { currentQuestion, isLoading, handleAnswer, isFinished } = useQuiz();

  useEffect(() => {
    if (isFinished) {
      navigate('/results');
    }
  }, [isFinished, navigate]);

  if (isLoading) {
    return (
      <>
        <h1>Quiz</h1>
        <p>Loading question...</p>
      </>
    );
  }

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
      <h2>{currentQuestion.copy}</h2>
      <ul>
        {currentQuestion.answers.map((answer, idx) => (
          <li key={idx}>
            <button onClick={() => handleAnswer(answer)}>{answer.copy}</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default QuizPage;
