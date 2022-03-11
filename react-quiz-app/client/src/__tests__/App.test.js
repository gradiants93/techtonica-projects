import { render, screen } from "@testing-library/react";
import App from "../App";
import Question from "../components/question";
import Quiz from "../components/Quiz";

describe("Make sure Jest is working", () => {
  test("knows that 2 and 2 make 4", () => {
    expect(2 + 2).toBe(4);
  });
});

describe("App", () => {
  test("renders App component", () => {
    render(<App />);
  });
  test("renders Hello from Techtonica", () => {
    render(<App />);
    const welcomeText = screen.getByText("Hello from Techtonica (React-side)");
    expect(welcomeText).toBeInTheDocument();
  });
});

describe("Question", () => {
  test("Question component renders the qbody and answers", () => {
    const question = {
      qtext: "This is a test",
      correct: "True",
      incorrect: ["False"],
    };
    render(
      <Question
        qtext={question.qtext}
        correct={question.correct}
        incorrect={question.incorrect}
      />
    );
    expect(screen.getByRole("button", { name: /True/ }));
    expect(screen.getByRole("button", { name: /False/ }));
    expect(screen.getByRole("listitem")).toHaveTextContent("This is a test");
  });
});
describe("Quiz", () => {
  test("Quiz component calls Question multiple times", () => {
    const data = [
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
    render(<Quiz listOfQuestions={data} />);
    data.slice(0, 10).forEach((singleQ) => {
      expect(screen.getByText(singleQ.question)).toBeInTheDocument();
    });
  });
});
