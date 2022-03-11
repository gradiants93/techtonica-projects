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
    setRightAnswer(correct);
    console.log(`correct answer is ${rightAnswer}`);
  }, []);
  let answerArray = [...incorrect];
  answerArray.push(correct);
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffle(answerArray);

  console.log(
    `Placed last like original correct was ${
      answerArray[answerArray.length - 1]
    },  Actual correct ${correct}`
  );
  const handleAnswer = (e) => {
    e.preventDefault();
    setSelectedAnswer(e.target.name);
    console.log(e.target.innerHTML);
    // setSelectedAnswer(buttonText);

    console.log(selectedAnswer);
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
        <button key={index} name={answer} onClick={handleAnswer}>
          {answer}
        </button>
      ))}
    </>
  );
}
