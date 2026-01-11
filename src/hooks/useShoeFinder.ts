import { useState } from 'react';
import { type IAnswer, type IQuizData, type IShoe, type Rating } from '../types.ts';

export const useShoeFinder = (data: IQuizData) => {
  // Initialize ratings for each shoe to zero
  const [ratings, setRatings] = useState<Rating>(() => {
    const initialRatings: Rating = {};
    data.shoes.forEach((shoe) => {
      initialRatings[shoe.id] = 0;
    });
    return initialRatings;
  });

  const [currentQuestionId, setCurrentQuestionId] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);

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
    if (answer.nextQuestion !== null) {
      setCurrentQuestionId(answer.nextQuestion);
    } else {
      setIsFinished(true);
    }
  };

  // Sort shoes by rating descending
  const getSortedShoes = (): IShoe[] => {
    return [...data.shoes].sort((a, b) => ratings[b.id] - ratings[a.id]);
  };

  return {
    currentQuestion,
    currentStep: currentQuestionId + 1,
    totalSteps: data.questions.length,
    isFinished,
    handleAnswer,
    getSortedShoes,
    ratings,
  };
};
