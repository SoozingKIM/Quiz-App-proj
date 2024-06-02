import { useState } from "react";
import QUESTIONS from "../questions.js";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const currentQuestionIndex = userAnswers.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prev) => {
      return [...prev, selectedAnswer];
    });
  }
  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[currentQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[currentQuestionIndex].answers.map((ans) => (
            <li key={ans} className="answer">
              <button onClick={() => handleSelectAnswer(ans)}>{ans}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
