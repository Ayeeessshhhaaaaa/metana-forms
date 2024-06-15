import React from 'react'
import './question.scss';

const Question5 = () => {
  return (
    <div className='question'>
    <div className="question-title">
      <span>7<span class="material-symbols-outlined">arrow_right_alt</span></span>
        What's your current annual compensation?(Optional)
    </div>

    <div className="question-content">
      <form>
        <span>
        Disclaimer: The information provided regarding salary will be kept confidential and will not be used as a determining factor for acceptance into the bootcamp. It will be used exclusively for career advancement guidance.
        </span>
        <div className="form-group-row">

          <div className="custom-radio">
            <input type="checkbox" id="accept" name="certify" value="accept" className="custom-control-input" onChange={(e) => setSelectedOption(e.target.value)} />
            <label htmlFor="accept" className="custom-control-label"><span>A</span>$30,000</label>
          </div>

          <div className="custom-radio">
            <input type="checkbox" id="accept" name="certify" value="accept" className="custom-control-input" onChange={(e) => setSelectedOption(e.target.value)} />
            <label htmlFor="accept" className="custom-control-label"><span>A</span>$30,000</label>
          </div>

          <div className="custom-radio">
            <input type="checkbox" id="accept" name="certify" value="accept" className="custom-control-input" onChange={(e) => setSelectedOption(e.target.value)} />
            <label htmlFor="accept" className="custom-control-label"><span>A</span>$30,000</label>
          </div>


          <div className="custom-radio">
            <input type="checkbox" id="accept" name="certify" value="accept" className="custom-control-input" onChange={(e) => setSelectedOption(e.target.value)} />
            <label htmlFor="accept" className="custom-control-label"><span>A</span>$30,000</label>
          </div>

          <div className="custom-radio">
            <input type="checkbox" id="accept" name="certify" value="accept" className="custom-control-input" onChange={(e) => setSelectedOption(e.target.value)} />
            <label htmlFor="accept" className="custom-control-label"><span>A</span>$30,000</label>
          </div>

          <div className="custom-radio">
            <input type="checkbox" id="accept" name="certify" value="accept" className="custom-control-input" onChange={(e) => setSelectedOption(e.target.value)} />
            <label htmlFor="accept" className="custom-control-label"><span>A</span>$30,000</label>
          </div>

          <div className="custom-radio">
            <input type="checkbox" id="accept" name="certify" value="accept" className="custom-control-input" onChange={(e) => setSelectedOption(e.target.value)} />
            <label htmlFor="accept" className="custom-control-label"><span>A</span>$30,000</label>
          </div>

          <div className="custom-radio">
            <input type="checkbox" id="accept" name="certify" value="accept" className="custom-control-input" onChange={(e) => setSelectedOption(e.target.value)} />
            <label htmlFor="accept" className="custom-control-label"><span>A</span>$30,000</label>
          </div>

          <div className="custom-radio">
            <input type="checkbox" id="accept" name="certify" value="accept" className="custom-control-input" onChange={(e) => setSelectedOption(e.target.value)} />
            <label htmlFor="accept" className="custom-control-label"><span>A</span>$30,000</label>
          </div>

        </div>
        <div className="button-container">
          <button type="submit" className="btn btn-primary submit-button">OK</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Question5
