import Timer from "./Timer.jsx";
import Answers from "./Answers";

function Question({
  question,
  onSkipAnswer,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  return (
    <div>
      <div id="question">
        <Timer timeout={15000} onTimeout={onSkipAnswer} />
        <h2>{question.text}</h2>
        <Answers
          answers={question.answers}
          selectedAnswer={selectedAnswer}
          answerState={answerState}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
}

export default Question;
