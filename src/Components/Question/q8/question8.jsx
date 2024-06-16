import React from "react";
import "../question.scss";

const question8 = ({ handleNext }) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from reloading the page
    handleNext(); // Call the handleNext function to go to the next question
  };
  return (
    <div className="question">
      <div className="question-title">
        <span>
          8<span class="material-symbols-outlined">arrow_right_alt</span>
        </span>
        Certifying Statement*
      </div>

      <div className="question-content">
        <form onSubmit={handleSubmit}>
          <span>
            I hereby acknowledge that this application form was completed by me
            (the individual seeking to enroll in Metana) and I did not receive
            help from any external sources. The responses submitted are entirely
            my own and based on my own reasoning. Also, I opt in to receive
            communication messages from Metana about my application.
          </span>
          <div className="form-group">
            <div className="custom-radio">
              <input
                type="radio"
                id="accept"
                name="certify"
                value="accept"
                className="custom-control-input"
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <label htmlFor="accept" className="custom-control-label">
                <span>A</span> I accept
              </label>
            </div>
            <div className="custom-radio">
              <input
                type="radio"
                id="dont-accept"
                name="certify"
                value="dont-accept"
                className="custom-control-input"
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <label htmlFor="dont-accept" className="custom-control-label">
                <span>B</span> I don't accept
              </label>
            </div>
          </div>
          <div className="button-container">
            <button type="submit" className="btn btn-primary submit-button">
              OK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default question8;
