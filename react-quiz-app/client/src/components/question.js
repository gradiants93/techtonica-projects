/* 
    parent compenent -> quiz container
    child component -> create a component to render each question as a <li> (THIS ONE)

    INSIDE parent component:
        call <Child individual question as props(correct and incorrect answers)>
    
        INSIDE child component:
            Q.text as body text, 
            map over incorrect answers and include correct answer (As button?)
            onClick -> check if correct answer, return result
*/

import { useState, useEffect } from "react";

export default function Question({ qtext, correct, incorrect }) {
  const [rightAnswer, setRightAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  useEffect(() => {
    setRightAnswer({ correct });
    console.log(`correct answer is ${correct}`);
  }, []);
  let answerArray = [];
  answerArray.push(correct);
  answerArray.push(incorrect);
  const handleAnswer = (e) => {
    e.preventDefault();
    setSelectedAnswer(e.target.value);
    if (selectedAnswer == rightAnswer) {
      console.log(`Correct! The answer is ${selectedAnswer} ${correct}`);
    } else {
      console.log(
        `Try Again! You chose ${selectedAnswer}. Correct answer is ${correct}`
      );
    }
  };

  return (
    <>
      <li>{qtext}</li>
      {answerArray.map((answer, index) => (
        <button key={index} onClick={handleAnswer}>
          {answer}
        </button>
      ))}
    </>
  );
}
