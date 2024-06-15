import React from 'react'

const Question9 = () => {
  return (
    <div className='question'>
    <div className="question-title">
      <span>9<span class="material-symbols-outlined">arrow_right_alt</span></span>
      LinkedIn URL (optional)
    </div>

    <div className="question-content">
      <form>
        <span>
         Here's a sniper link to make your life easy - linkedin.com (It'll open in a new tab) 🚀
        </span>
        <div className="form-group">
          <input type="text" className="form-control form-input" id="email" placeholder="Type your answer here" />
        </div>
        <div className="button-container">
          <button type="submit" className="btn btn-primary submit-button">OK</button>
          <div className="support-text">
              press <strong>Cmd ⌘ + Enter ↵</strong>
            </div>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Question9