import React from 'react';
import '../question.scss';


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
            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option selected>Type or select a option</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
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