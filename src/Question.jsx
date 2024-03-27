function Question({ question, questionNumber, onAnswerSelect }) {
  return (
    <div>
      <h2>{`Pytanie ${questionNumber}: ${question.text}`}</h2>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>
            <button onClick={() => onAnswerSelect(index)}>{answer.text}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
