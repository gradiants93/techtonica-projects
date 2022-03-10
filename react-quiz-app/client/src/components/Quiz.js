/* 
parent compenent -> quiz container (AKA THIS ONE)
child component -> create a component to render each question as a <li>

<Parent passed apicallstuff as prop >
INSIDE parent component; call <Child individual question as props(correct and incorrect answers)>
*/
// holds all the things. breaks into many questions
import Question from "./question";

export default function Quiz(listOfQuestions) {
  return <>{apiQs.map}</>;
}
