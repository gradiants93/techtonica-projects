import React, { useEffect, useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz";

function App() {
  const [data, setData] = useState(null);
  const mockData = [
    {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "easy",
      question:
        "The names of Tom Nook&#039;s cousins in the Animal Crossing franchise are named &quot;Timmy&quot; and &quot;Jimmy&quot;.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "easy",
      question:
        "The PlayStation was originally a joint project between Sega and Sony that was a Sega Genesis with a disc drive.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/quiz");
      const json = await data.json();
      setData(json);
      console.log(json);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from Techtonica (React-side)</h1>
        {!data ? <p>Loading...</p> : <Quiz listOfQuestions={data} />}
      </header>
      {/* 
      connect api response to react (useEffect fetch /quiz)
      place into data/state variable
      parent compenent -> quiz container
      child component -> create a component to render each question as a <li>

        <Parent passed apicallstuff as prop >
        INSIDE parent component; call <Child individual question as props(correct and incorrect answers)>
        INSIDE child component; Q.text as body text, map over incorrect answers and include correct answer (As button?)
          onClick -> check if correct answer, return result

      */}
    </div>
  );
}

export default App;
