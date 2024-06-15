import React from 'react';
import './question3.scss';


const Question3 = () => {
  return (
    <div className='question'>
    <div className="question-title">
      <span>3<span class="material-symbols-outlined">arrow_right_alt</span></span>
        Which country you are from?🏡🏡🏡
    </div>

    <div className="question-content">
      <form>
        <div className="form-group">
          <input type="text" className="form-control form-input" id="email" placeholder="Type or select an option" />
        </div>
        <div className="button-container">
          <button type="submit" className="btn btn-primary submit-button">OK</button>
          <div className="support-text">
            press <strong>Enter ↵</strong>
          </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Question3