function Start({ onStartQuiz }) {
  return (
    <>
      <div className="start-container">
        <h1>JavaScript Quiz</h1>
        <button onClick={onStartQuiz}>Start Quiz</button>
      </div>
      <div className="footer">
        <a href="https://github.com/rciesielski3">
          <div>Copyright © 2024</div>
          <div>Created by Rafal Ciesielski</div>
        </a>
      </div>
    </>
  );
}

export default Start;
