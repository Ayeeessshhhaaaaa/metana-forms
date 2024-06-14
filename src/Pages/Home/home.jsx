import React from 'react';
import './home.scss';
import logo from '../../assets/logo.png';
import googleLogo from '../../assets/google.png';
import ibmLogo from '../../assets/IBM.png';
import nikeLogo from '../../assets/nike.png';
import ebayLogo from '../../assets/ebay.png';

const Home = () => {
  return (
    <div className="home">
      <img src={logo} alt="Logo" className="logo" />
      <div className="content">
        <div className="left-column">
          <h1>Launch your Data Career in Weeks, not Years</h1>
          <p>
            What to expect:<br />
            - <span className="highlight">  Short-answer </span> questions & <span className="highlight">No</span> cover letter <br />
            - Takes 4 mins on average
          </p>
          <button className="start-button">Start Your Journey</button>
          <div className="people-filled">
            <span className="material-icons-outlined">
              group
            </span>
            <span>35 people have filled this out</span>
          </div>
        </div>
        <div className="right-column">
          <div className="rating-image">
            <span className="course-rating">4.8</span>
            <div className="rating-text">
              <p className="rated-on">Rated on</p>
              <p className="course-report">Course Report</p>
            </div>
          </div>
          <p className="students-work">Our students <span className="underline">used</span> to work at</p>
          <div className="company-logos">
            <img src={googleLogo} alt="Google Logo" />
            <img src={ibmLogo} alt="IBM Logo" />
            <img src={nikeLogo} alt="Nike Logo" />
            <img src={ebayLogo} alt="Ebay Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
