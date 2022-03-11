import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Child from "./components/child";
import Quiz from "./components/Quiz";
// import Question from "./components/question";

function App() {
  const [data, setData] = useState(null);
  // let listOThings = [
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiHL6yeLk_5A-Bg6e3VT13iV-pu2q2FNFfMg&usqp=CAU",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI9OSnajRbit_IH4MgGbekLuLo9WosDf1qdA&usqp=CAU",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY9E_Znn0e-lmRhLDIJIGd5OBJPoO4j4O4Gg&usqp=CAU",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSBHmVfixUedFLAWqqyRCVDQxyCjdLGRscg&usqp=CAU",
  // ];
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
    fetch("/quiz")
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log(data);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Hello from Techtonica (React-side)</h1>
        {/* <Child things={listOThings} /> */}
        <p>{!data ? "Loading..." : "Grabbed the questions"}</p>
        <Quiz listOfQuestions={mockData} />
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
