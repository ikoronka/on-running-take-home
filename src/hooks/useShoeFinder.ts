import { useMemo, useState } from 'react';
import { type IAnswer, type IQuizData, type Rating } from '../types.ts';

export const useShoeFinder = (data: IQuizData) => {
  // Initialize ratings for each shoe to zero
  const getInitialRatings = () => {
    const initial: Rating = {};
    data.shoes.forEach((shoe) => {
      initial[shoe.id] = 0;
    });
    return initial;
  };

  const [ratings, setRatings] = useState<Rating>(getInitialRatings());
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const currentQuestion = data.questions.find((q) => q.id === currentQuestionId) || null;

  // Function to handle answer selection and update ratings
  const handleAnswer = (answer: IAnswer) => {
    setRatings((prevRatings) => {
      const updatedRatings = { ...prevRatings };

      Object.entries(answer.ratingIncrease).forEach(([shoeId, increment]) => {
        if (updatedRatings[shoeId] !== undefined) {
          updatedRatings[shoeId] += increment;
        }
      });

      return updatedRatings;
    });

    // Redirect to next question or finish quiz
    if (answer.nextQuestion !== '') {
      setCurrentQuestionId(answer.nextQuestion);
    } else {
      setIsLoading(true);

      // Simulate loading time before showing results
      setTimeout(() => {
        setIsLoading(false);
        setIsFinished(true);
      }, 1500);
    }
  };

  // soft reset of the quiz state
  const resetQuiz = () => {
    setRatings(getInitialRatings());
    setCurrentQuestionId(0);
    setIsFinished(false);
    setIsLoading(false);
  };

  // Memoized calculation of winners and others for results page
  const { winners, others } = useMemo(() => {
    if (!isFinished) {
      return { winners: [], others: [] };
    }

    const sortedShoes = data.shoes
      .map((shoe) => ({
        ...shoe,
        rating: ratings[shoe.id] || 0,
      }))
      .sort((a, b) => b.rating - a.rating);

    if (sortedShoes.length === 0) {
      return { winners: [], others: [] };
    }

    const maxScore = sortedShoes[0].rating;

    const winnersList = sortedShoes.filter((s) => s.rating === maxScore);
    const othersList = sortedShoes.filter((s) => s.rating < maxScore);

    return { winners: winnersList, others: othersList };
  }, [isFinished, ratings, data.shoes]);

  return {
    currentQuestion,
    isFinished,
    isLoading,
    handleAnswer,
    winners,
    others,
    resetQuiz,
  };
};
