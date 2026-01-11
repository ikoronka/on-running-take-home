import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/quiz');
  };

  return (
    <>
      <h1>Landing</h1>
      <button onClick={handleStart}>Start Quiz</button>
    </>
  );
};

export default LandingPage;
