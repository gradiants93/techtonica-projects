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

export default function Question({ text, correct, incorrect }) {
  return <>{apiQs.map}</>;
}
