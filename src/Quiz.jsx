import { useState } from "react";
import quizQuestions from "./quizQuestions";
import Question from "./Question";
import Summary from "./Summary";

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswerSelect = (selectedAnswerIndex) => {
    setUserAnswers([...userAnswers, selectedAnswerIndex]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
  };

  const isQuizCompleted = currentQuestionIndex === quizQuestions.length;

  return (
    <div>
      {isQuizCompleted ? (
        <Summary
          userAnswers={userAnswers}
          questions={quizQuestions}
          restartQuiz={restartQuiz}
        />
      ) : (
        <div className="question-container">
          <Question
            question={quizQuestions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            onAnswerSelect={handleAnswerSelect}
          />
        </div>
      )}
    </div>
  );
}

export default Quiz;
