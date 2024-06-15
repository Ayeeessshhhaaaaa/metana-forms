import React, { useState } from 'react';
import './question5.scss';

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
        <span>5<span className="material-symbols-outlined">arrow_right_alt</span></span>
        What languages and frameworks are you familiar with?
      </div>

      <div className="question-content">
        <form onSubmit={onSubmit}>
          <span>
          Select all the languages you know.
          </span>
          <div className="form-group-row">
            <div className="custom-radio">
              <input type="checkbox" id="salary-1" value="$30,000" onChange={handleCheckboxChange} />
              <label htmlFor="salary-1" className="custom-control-label"><span>A</span>Solidity</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="salary-2" value="$30,000-$50,000" onChange={handleCheckboxChange} />
              <label htmlFor="salary-2" className="custom-control-label"><span>B</span>Rust</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="salary-3" value="$50,000-$80,000" onChange={handleCheckboxChange} />
              <label htmlFor="salary-3" className="custom-control-label"><span>C</span>Node.js</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="salary-4" value="$80,000-$120,000" onChange={handleCheckboxChange} />
              <label htmlFor="salary-4" className="custom-control-label"><span>D</span>Typescript</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="salary-5" value="$120,000-$250,000" onChange={handleCheckboxChange} />
              <label htmlFor="salary-5" className="custom-control-label"><span>E</span>Javascript</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="salary-6" value="$250,000+" onChange={handleCheckboxChange} />
              <label htmlFor="salary-6" className="custom-control-label"><span>F</span>C</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="salary-6" value="$250,000+" onChange={handleCheckboxChange} />
              <label htmlFor="salary-6" className="custom-control-label"><span>G</span>C++</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="salary-6" value="$250,000+" onChange={handleCheckboxChange} />
              <label htmlFor="salary-6" className="custom-control-label"><span>H</span>C#</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="salary-6" value="$250,000+" onChange={handleCheckboxChange} />
              <label htmlFor="salary-6" className="custom-control-label"><span>I</span>SQL</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="salary-6" value="$250,000+" onChange={handleCheckboxChange} />
              <label htmlFor="salary-6" className="custom-control-label"><span>J</span>Python</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="salary-6" value="$250,000+" onChange={handleCheckboxChange} />
              <label htmlFor="salary-6" className="custom-control-label"><span>K</span>Assembly Language</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="salary-6" value="$250,000+" onChange={handleCheckboxChange} />
              <label htmlFor="salary-6" className="custom-control-label"><span>L</span>Haskell</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="salary-6" value="$250,000+" onChange={handleCheckboxChange} />
              <label htmlFor="salary-6" className="custom-control-label"><span>M</span>R</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="salary-6" value="$250,000+" onChange={handleCheckboxChange} />
              <label htmlFor="salary-6" className="custom-control-label"><span>N</span>.NET</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="salary-6" value="$250,000+" onChange={handleCheckboxChange} />
              <label htmlFor="salary-6" className="custom-control-label"><span>O</span>Other</label>
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
