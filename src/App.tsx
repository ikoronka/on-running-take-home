import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';

import LandingPage from './pages/LandingPage/LandingPage.tsx';
import QuizPage from './pages/QuizPage/QuizPage.tsx';
import ResultsPage from './pages/ResultsPage/ResultsPage.tsx';
import { MainLayout } from './components/layout/MainLayout/MainLayout.tsx';

function App() {
  return (
    <BrowserRouter>
      <QuizProvider>
        <Routes>
          <Route
            path="/"
            element={<MainLayout />}
          >
            <Route
              index
              element={<LandingPage />}
            />

            <Route
              path="quiz"
              element={<QuizPage />}
            />

            <Route
              path="results"
              element={<ResultsPage />}
            />

            {/* Fallback */}
            <Route
              path="*"
              element={
                <Navigate
                  to="/"
                  replace
                />
              }
            />
          </Route>
        </Routes>
      </QuizProvider>
    </BrowserRouter>
  );
}

export default App;
