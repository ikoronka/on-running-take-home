import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button/Button.tsx';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/quiz');
  };

  return (
    <>
      <h1>Landing</h1>
      <Button onClick={handleStart}>Start Quiz</Button>
    </>
  );
};

export default LandingPage;
