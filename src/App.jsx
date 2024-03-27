import { useState } from "react";
import Quiz from "./Quiz";
import Start from "./Start";
import "./App.css";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);

  const handleStartQuiz = () => {
    setStartQuiz(true);
  };

  return (
    <div className="App">
      {!startQuiz ? <Start onStartQuiz={handleStartQuiz} /> : <Quiz />}
    </div>
  );
}

export default App;
