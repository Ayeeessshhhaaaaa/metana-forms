import React, { useState, useEffect } from 'react';
import './quiz.scss';

const questions = [
  'Question 1: What is your name?',
  'Question 2: What is your age?',
  'Question 3: What is your favorite color?',
  'Question 4: What is your hobby?',
  'Question 5: Where do you live?',
  'Question 6: What is your profession?',
  'Question 7: What is your favorite food?',
  'Question 8: What is your favorite movie?',
  'Question 9: What is your favorite book?',
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('slideIn');

  useEffect(() => {
    if (animationClass === 'slideOut') {
      const timer = setTimeout(() => {
        setAnimationClass('slideIn');
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      }, 500); // duration of the slideOut animation

      return () => clearTimeout(timer);
    }
  }, [animationClass]);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setAnimationClass('slideOut');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  return (
    <div className='quiz-container'>

      <div className="questions-container">
        <div className={`question ${animationClass}`}>
          {questions[currentQuestionIndex]}
        </div>
      </div>

      <div className="bottom-control">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary" onClick={handlePrevious} disabled={currentQuestionIndex === 0}><span class="material-symbols-outlined">keyboard_arrow_up</span></button>
          <button type="button" className="btn btn-primary"><span class="material-symbols-outlined" onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>keyboard_arrow_down</span></button>
        </div>
        <a class="btn btn-primary" href="#" role="button">Powered by <strong>Typeform</strong></a>
      </div>
    </div>
  )
}

export default Quiz