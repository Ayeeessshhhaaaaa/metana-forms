import React, { useState, useEffect } from "react";
import "./quiz.scss";

import Question1 from "../../Components/Question/q1/question1";
import Question2 from "../../Components/Question/q2/question2";
import Question3 from "../../Components/Question/q3/question3";
import Question4 from "../../Components/Question/q4/question4";
import Question5 from "../../Components/Question/q5/question5";
import Question6 from "../../Components/Question/q6/question6";
import Question7 from "../../Components/Question/q7/question7";
import Question8 from "../../Components/Question/q8/question8";
import Question9 from "../../Components/Question/q9/question9";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("slideInFromBottom");
  const [direction, setDirection] = useState("forward");

  useEffect(() => {
    if (
      animationClass === "slideOutToTop" ||
      animationClass === "slideOutToBottom"
    ) {
      const timer = setTimeout(() => {
        setAnimationClass(
          direction === "forward" ? "slideInFromBottom" : "slideInFromTop"
        );
        setCurrentQuestionIndex((prevIndex) =>
          direction === "forward" ? prevIndex + 1 : prevIndex - 1
        );
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [animationClass, direction]);

  const handleNext = () => {
    if (currentQuestionIndex < questionComponents.length - 1) {
      setDirection("forward");
      setAnimationClass("slideOutToTop");
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setDirection("backward");
      setAnimationClass("slideOutToBottom");
    }
  };

  const questionComponents = [
    <Question1 key="1" handleNext={handleNext} />,
    <Question2 key="2" handleNext={handleNext} />,
    <Question3 key="3" handleNext={handleNext} />,
    <Question4 key="4" handleNext={handleNext} />,
    <Question5 key="5" handleNext={handleNext} />,
    <Question6 key="6" handleNext={handleNext} />,
    <Question7 key="7" handleNext={handleNext} />,
    <Question8 key="8" handleNext={handleNext} />,
    <Question9 key="9" handleNext={handleNext} />,
  ];

  return (
    <div className="quiz-container">
      <div className="questions-container">
        <div className={`questions ${animationClass}`}>
          {questionComponents[currentQuestionIndex]}
        </div>
      </div>
      <div className="bottom-control">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            <span className="material-symbols-outlined">keyboard_arrow_up</span>
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleNext}
            disabled={currentQuestionIndex === questionComponents.length - 1}
          >
            <span className="material-symbols-outlined">
              keyboard_arrow_down
            </span>
          </button>
        </div>
        <a className="btn btn-primary" href="#" role="button">
          Powered by <strong>Typeform</strong>
        </a>
      </div>
    </div>
  );
};

export default Quiz;
