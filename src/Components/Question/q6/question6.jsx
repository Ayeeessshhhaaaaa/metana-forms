import React, { useState } from 'react';
import './question6.scss';


const Question6 = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(value)
        ? prevSelectedOptions.filter((option) => option !== value)
        : [...prevSelectedOptions, value]
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., save the selected options
    console.log('Selected options:', selectedOptions);
  };

  return (
    <div className='question6'>
    <div className="question-title">
      <span>6<span class="material-symbols-outlined">arrow_right_alt</span></span>
      How would you describe your current level of coding experience?
    </div>

    <div className="question-content">
      <form>
        <div className="form-group">
            <div className="custom-radio">
                  <input type="checkbox" id="exp-1" value="No experience" onChange={handleCheckboxChange} />
                  <label htmlFor="exp-1" className="custom-control-label"><span>A</span>No experience (I have never programmed before.)</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="exp-2" value="Beginner" onChange={handleCheckboxChange} />
              <label htmlFor="exp-2" className="custom-control-label"><span>B</span>Beginner (I have played with some introductory coding lessons and tutorials.)</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="exp-3" value="Intermediate" onChange={handleCheckboxChange} />
              <label htmlFor="exp-3" className="custom-control-label"><span>C</span>Intermediate (I have completed some coding classes or tutorials.)</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="exp-4" value="Advanced" onChange={handleCheckboxChange} />
              <label htmlFor="exp-4" className="custom-control-label"><span>D</span>Advanced (I can build applications.)</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="exp-5" value="Professional" onChange={handleCheckboxChange} />
              <label htmlFor="exp-5" className="custom-control-label"><span>E</span>Professional (I am an experienced software engineer.)</label>
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

export default Question6