import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((ans) => ans === null);
  const correctAnswers = userAnswers.filter(
    (ans, index) => ans === QUESTIONS[index].answers[0]
  );
  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / QUESTIONS.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / QUESTIONS.length) * 100
  );
  const worngAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy icon" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{worngAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((ans, index) => {
          let cssClass = "user-answer";

          if (ans == null) {
            cssClass += " skipped";
          } else if (ans === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{ans ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Summary;
