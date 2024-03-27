import "./Summary.css";

const Summary = ({ userAnswers, questions, restartQuiz }) => {
  const correctAnswersCount = questions.reduce((acc, question, index) => {
    const selectedAnswerIndex = userAnswers[index];
    const isCorrect = question.answers[selectedAnswerIndex].isCorrect;
    return isCorrect ? acc + 1 : acc;
  }, 0);

  const percentage = (correctAnswersCount / questions.length) * 100;

  function getResultClassName(percentage) {
    return percentage >= 80 ? "correct-answer" : "incorrect-answer";
  }

  return (
    <div>
      <div>
        <h2>
          <span className={getResultClassName(percentage)}>
            {percentage >= 80
              ? "Gratulacje! Quiz zaliczony!"
              : "Quiz nie zaliczony!"}
          </span>
        </h2>
      </div>
      <div>
        Twój wynik to:{" "}
        <span className={getResultClassName(percentage)}>
          {percentage.toFixed(2)}%
        </span>{" "}
        ({correctAnswersCount} z {questions.length} poprawnych odpowiedzi).
      </div>
      <div>
        <br />
        <b>Szczegóły:</b>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              <span className="question-title">
                <h4>
                  Pytanie {index + 1}: {question.text}
                </h4>
              </span>
              <h5 className="answer-detail">
                Twoja odpowiedź:{" "}
                <span
                  className={
                    question.answers[userAnswers[index]].isCorrect
                      ? "correct-answer"
                      : "incorrect-answer"
                  }
                >
                  {question.answers[userAnswers[index]].text}
                </span>
                {!question.answers[userAnswers[index]].isCorrect && (
                  <span>
                    <br />
                    Prawidłowa odpowiedź:{" "}
                    <span className="correct-answer">
                      {question.answers.find((answer) => answer.isCorrect).text}
                    </span>
                  </span>
                )}
              </h5>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={restartQuiz}>Restart Quizu</button>
    </div>
  );
};

export default Summary;
