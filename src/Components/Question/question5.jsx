import React, { useState } from 'react';
import './question.scss';

const Question5 = () => {
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
    <div className='question'>
      <div className="question-title">
        <span>7<span className="material-symbols-outlined">arrow_right_alt</span></span>
        What's your current annual compensation?(Optional)
      </div>

      <div className="question-content">
        <form onSubmit={onSubmit}>
          <span>
            Disclaimer: The information provided regarding salary will be kept confidential and will not be used as a determining factor for acceptance into the bootcamp. It will be used exclusively for career advancement guidance.
          </span>
          <div className="form-group-row">
            <div className="custom-radio">
              <input type="checkbox" id="salary-1" value="$30,000" onChange={handleCheckboxChange} />
              <label htmlFor="salary-1" className="custom-control-label"><span>A</span>$30,000</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="salary-2" value="$30,000-$50,000" onChange={handleCheckboxChange} />
              <label htmlFor="salary-2" className="custom-control-label"><span>B</span>$30,000-$50,000</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="salary-3" value="$50,000-$80,000" onChange={handleCheckboxChange} />
              <label htmlFor="salary-3" className="custom-control-label"><span>C</span>$50,000-$80,000</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="salary-4" value="$80,000-$120,000" onChange={handleCheckboxChange} />
              <label htmlFor="salary-4" className="custom-control-label"><span>D</span>$80,000-$120,000</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="salary-5" value="$120,000-$250,000" onChange={handleCheckboxChange} />
              <label htmlFor="salary-5" className="custom-control-label"><span>E</span>$120,000-$250,000</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="salary-6" value="$250,000+" onChange={handleCheckboxChange} />
              <label htmlFor="salary-6" className="custom-control-label"><span>F</span>$250,000 or more</label>
            </div>
          </div>
          <div className="button-container">
            <button type="submit" className="btn btn-primary submit-button">OK</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Question5;
