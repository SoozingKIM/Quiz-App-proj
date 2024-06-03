import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const currentQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizFinished = currentQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswers((prev) => {
        return [...prev, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[currentQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
      }, 1000);

      setTimeout(() => {
        setAnswerState("");
      }, 2000);
    },
    [currentQuestionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizFinished) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={currentQuestionIndex}
        question={QUESTIONS[currentQuestionIndex]}
        onSkipAnswer={handleSkipAnswer}
        onSelect={handleSelectAnswer}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
      />
    </div>
  );
}

export default Quiz;
