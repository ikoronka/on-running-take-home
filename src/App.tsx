import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';

import LandingPage from './pages/LandingPage.tsx';
import QuizPage from './pages/QuizPage.tsx';
import ResultsPage from './pages/ResultsPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <QuizProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/results" element={<ResultsPage />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </QuizProvider>
    </BrowserRouter>
  );
}

export default App;
