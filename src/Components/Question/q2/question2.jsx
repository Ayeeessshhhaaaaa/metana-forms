import React from "react";
import "../question.scss";

const Question2 = ({ handleNext }) => {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    handleNext();
  };

  return (
    <div className="question">
      <div className="question-title">
        <span>
          2<span class="material-symbols-outlined">arrow_right_alt</span>
        </span>
        What's your email address?
      </div>

      <div className="question-content">
        <form onSubmit={handleSubmit}>
          <span>This is how we'll contact you</span>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-input"
              id="email"
              placeholder="name@example.com"
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

export default Question2;
