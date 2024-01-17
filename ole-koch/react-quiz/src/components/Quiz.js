import {useState} from 'react';
import Question from "./Question";


const Quiz = () => {
  
  // useState returns an array with two elements:
  // 1. The current state value (count in this case)
  // 2. A function to update the state (setCount in this case)
  const [count, setCount] = useState(0); // Initializing state with 0

  const testClick = () =>{
    console.log("testClick");
    setCount(count+1);
  };

  return (
    <div className="quiz">
      <div>
        <div className="score">Question 1/8</div>
        <Question />
        <div className="next-button" onClick={testClick}>Next question {count}</div>
      </div>
    </div>
  );
};

export default Quiz;
