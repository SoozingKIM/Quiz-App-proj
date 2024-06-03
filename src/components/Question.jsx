import Timer from "./Timer.jsx";
import Answers from "./Answers";
import { useState } from "react";
import QUESTIONS from "../questions.js";

function Question({ onSkipAnswer, index, onSelectAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  function handleSelectAnswer(selectedAnswer) {
    setAnswer({ selectedAnswer, isCorrect: null });

    setTimeout(() => {
      setAnswer({
        selectedAnswer,
        isCorrect: selectedAnswer === QUESTIONS[index].answers[0],
      });

      setTimeout(() => {
        onSelectAnswer(selectedAnswer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div>
      <div id="question">
        <Timer timeout={15000} onTimeout={onSkipAnswer} />
        <h2>{QUESTIONS[index].text}</h2>
        <Answers
          answers={QUESTIONS[index].answers}
          selectedAnswer={answer.selectedAnswer}
          answerState={answerState}
          onSelect={handleSelectAnswer}
        />
      </div>
    </div>
  );
}

export default Question;
