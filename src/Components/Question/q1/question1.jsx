import React from "react";
import "../question.scss";

const Question1 = ({ handleNext }) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from reloading the page
    handleNext(); // Call the handleNext function to go to the next question
  };

  return (
    <div className="question">
      <div className="question-title">
        <span>
          1<span class="material-symbols-outlined">arrow_right_alt</span>
        </span>
        Before we start, what is your name?
      </div>

      <div className="question-content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control form-input"
              id="firstName"
              placeholder="Jane"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control form-input"
              id="lastName"
              placeholder="Smith"
            />
          </div>
          <div className="button-container">
            <button type="submit" className="btn btn-primary submit-button">
              OK
            </button>
            <div className="support-text">
              press <strong>Enter ↵</strong>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Question1;
