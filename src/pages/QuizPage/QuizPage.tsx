import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../../context/QuizContext.tsx';
import { Loader } from '../../components/ui/Loader/Loader.tsx';
import { QuizCard } from '../../components/quiz/QuizCard/QuizCard.tsx';
import styles from './QuizPage.module.scss';

const QuizPage = () => {
  const navigate = useNavigate();
  const { currentQuestion, isLoading, isFinished, handleAnswer } = useQuiz();

  useEffect(() => {
    if (isFinished) {
      navigate('/results');
    }
  }, [isFinished, navigate]);

  return (
    <div className={styles.page}>
      <p className={styles.subtitle}>
        try on quiz <br />
        30 days risk free
      </p>
      {currentQuestion ? (
        isLoading ? (
          <Loader />
        ) : (
          <div className={styles.content}>
            <QuizCard
              question={currentQuestion}
              onAnswerSelect={handleAnswer}
            />
          </div>
        )
      ) : (
        <p>No question available.</p>
      )}
    </div>
  );
};

export default QuizPage;
