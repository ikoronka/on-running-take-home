import type { IAnswer, IQuestion } from '../../../types.ts';
import { Button } from '../../ui/Button/Button.tsx';
import styles from './QuizCard.module.scss';

interface QuizCardProps {
  question: IQuestion;
  onAnswerSelect: (answer: IAnswer) => void;
}

export const QuizCard = ({ question, onAnswerSelect }: QuizCardProps) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.card__question}>{question.copy}</h2>
      <div className={styles.card__answers}>
        {question.answers.map((answer) => (
          <Button
            key={answer.copy}
            onClick={() => onAnswerSelect(answer)}
            variant="outline"
            className={styles.card__button}
          >
            {answer.copy}
          </Button>
        ))}
      </div>
    </div>
  );
};
