import React from "react";
import "./home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate("/quiz");
  };
  return (
    <div className="home-container row">
      <div className="col">
        <h1>
          <strong>Launch your Data Career in Weeks, not Years</strong>
        </h1>
        <p>
          <span>What to expect:</span>
          <br></br>
          <span>- </span>
          <strong>Short-answer</strong>
          <span> questions &amp; </span>
          <strong>No</strong>
          <span> cover letter</span>
          <br></br>
          <span>- Takes 4 mins on average</span>
        </p>
        <div className="button-container">
          <button onClick={handleStartJourney}>
            <span>Start Your Journey</span>
          </button>
          <div className="support-text">
            press <strong>Enter ↵</strong>
          </div>
        </div>
        <div className="people-filled">
          <span className="material-icons-outlined">group</span>
          <span>86 people have filled this out</span>
        </div>
      </div>

      <div className="col">
        <div className="image-container">
          <img
            src="https://images.typeform.com/images/RpFYn8rh9zhf/image/default"
            alt="metaform home image"
            className="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
