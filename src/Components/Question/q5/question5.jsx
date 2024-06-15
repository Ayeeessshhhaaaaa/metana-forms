import React, { useState } from 'react';
import '../question.scss';

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
              <input type="checkbox" id="lang-1" value="Solidity" onChange={handleCheckboxChange} />
              <label htmlFor="lang-1" className="custom-control-label"><span>A</span>Solidity</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="lang-2" value="Rust" onChange={handleCheckboxChange} />
              <label htmlFor="lang-2" className="custom-control-label"><span>B</span>Rust</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="lang-3" value="Node.js" onChange={handleCheckboxChange} />
              <label htmlFor="lang-3" className="custom-control-label"><span>C</span>Node.js</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="lang-4" value="Typescript" onChange={handleCheckboxChange} />
              <label htmlFor="lang-4" className="custom-control-label"><span>D</span>Typescript</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="lang-5" value="Javascript" onChange={handleCheckboxChange} />
              <label htmlFor="lang-5" className="custom-control-label"><span>E</span>Javascript</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="lang-6" value="C" onChange={handleCheckboxChange} />
              <label htmlFor="lang-6" className="custom-control-label"><span>F</span>C</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="lang-7" value="C++" onChange={handleCheckboxChange} />
              <label htmlFor="lang-7" className="custom-control-label"><span>G</span>C++</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="lang-8" value="C#" onChange={handleCheckboxChange} />
              <label htmlFor="lang-8" className="custom-control-label"><span>H</span>C#</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="lang-9" value="$250,000+" onChange={handleCheckboxChange} />
              <label htmlFor="lang-9" className="custom-control-label"><span>I</span>SQL</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="lang-10" value="SQL" onChange={handleCheckboxChange} />
              <label htmlFor="lang-10" className="custom-control-label"><span>J</span>Python</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="lang-11" value="Assembly Language" onChange={handleCheckboxChange} />
              <label htmlFor="lang-11" className="custom-control-label"><span>K</span>Assembly Language</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="lang-12" value="Haskell" onChange={handleCheckboxChange} />
              <label htmlFor="lang-12" className="custom-control-label"><span>L</span>Haskell</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="lang-13" value="R" onChange={handleCheckboxChange} />
              <label htmlFor="lang-13" className="custom-control-label"><span>M</span>R</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="lang-14" value=".NET" onChange={handleCheckboxChange} />
              <label htmlFor="lang-14" className="custom-control-label"><span>N</span>.NET</label>
            </div>
            <div className="custom-radio">
              <input type="checkbox" id="lang-15" value="Other" onChange={handleCheckboxChange} />
              <label htmlFor="lang-15" className="custom-control-label"><span>O</span>Other</label>
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
