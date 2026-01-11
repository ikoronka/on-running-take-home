import rawData from './data/data.json';
import type { IQuizData } from './types';
import { useShoeFinder } from './hooks/useShoeFinder';
import './App.css';

// sanity check to ensure data is correctly typed
const data = rawData as IQuizData;

function App() {
  const { currentQuestion, isFinished, isLoading, handleAnswer, results, ratings } =
    useShoeFinder(data);

  return (
    <>
      <div>
        <h1>Test of functionality</h1>
        <p>Is Finished: {isFinished ? 'Yes' : 'No'}</p>
        <p>Current Question: {currentQuestion ? currentQuestion.copy : 'None'}</p>
        <p>Ratings: {JSON.stringify(ratings)}</p>
      </div>
      <hr />
      {isFinished ? (
        <div>
          <h2>results</h2>
          <ol>
            {results.map((shoe) => (
              <li key={shoe.id}>
                {shoe.name} - Score: {ratings[shoe.id]}
              </li>
            ))}
          </ol>
        </div>
      ) : isLoading ? (
        <div>
          <h2>Loading results...</h2>
        </div>
      ) : (
        currentQuestion && (
          <div>
            <h2>{currentQuestion.copy}</h2>
            <ul>
              {currentQuestion.answers.map((answer, index) => (
                <li key={index}>
                  <button onClick={() => handleAnswer(answer)}>{answer.copy}</button>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
      <hr />
      <h2>Raw Data Check</h2>
      <ul>
        <li>{data.shoes[0].name}</li>
        <li>{data.questions[0].copy}</li>
      </ul>
    </>
  );
}

export default App;
