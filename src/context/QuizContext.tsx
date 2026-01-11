import { createContext, type ReactNode, useContext } from 'react';
import { useShoeFinder } from '../hooks/useShoeFinder.ts';
import data from '../data/data.json';
import type { IQuizData } from '../types';

// Get all types from useShoeFinder hook
type QuizContextType = ReturnType<typeof useShoeFinder>;

const QuizContext = createContext<QuizContextType | null>(null);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const quiz = useShoeFinder(data as IQuizData);

  return <QuizContext.Provider value={quiz}>{children}</QuizContext.Provider>;
};

// Custom hook to use the QuizContext
export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz has to be used within QuizProvider');
  }
  return context;
};
