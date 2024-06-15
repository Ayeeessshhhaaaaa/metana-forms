import React from 'react'

const question8 = () => {
  return (
    <div className='question'>
    <div className="question-title">
      <span>8<span class="material-symbols-outlined">arrow_right_alt</span></span>
        Certifying Statement*
    </div>

    <div className="question-content">
      <form>
        <span>
          I hereby acknowledge that this application form was completed by me (the individual seeking to enroll in Metana) and I did not receive help from any external sources. The responses submitted are entirely my own and based on my own reasoning. Also, I opt in to receive communication messages from Metana about my application.
        </span>
        <div className="form-group">
          <input type="text" className="form-control form-input" id="email" placeholder="Type or select an option" />
        </div>
        <div className="button-container">
          <button type="submit" className="btn btn-primary submit-button">OK</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default question8