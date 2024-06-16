import React, { useState } from 'react';
import './question3.scss';

const countries = [
  "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola",
  "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", 
  "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", 
  "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", 
  "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", 
  "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", 
  "Cambodia", "Cameroon", "Canada", "Cayman Islands", "Central African Republic",
  "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", 
  "Congo, Democratic Republic of the", "Costa Rica", "Côte d'Ivoire", "Croatia", 
  "Cuba", "Curaçao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", 
  "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", 
  "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", 
  "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", 
  "Greece", "Grenada", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", 
  "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", 
  "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", 
  "Kazakhstan", "Kenya", "Kiribati", "Korea (North)", "Korea (South)", "Kuwait", 
  "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho",
  "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", 
  "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", 
  "Mauritania", "Mauritius", "Mexico", "Micronesia (Federated States of)", 
  "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", 
  "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", 
  "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", 
  "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", 
  "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", 
  "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", 
  "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", 
  "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", 
  "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", 
  "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", 
  "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania", 
  "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", 
  "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
  "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", 
  "Vanuatu", "Venezuela", "Viet Nam", "Yemen", "Zambia", "Zimbabwe"
];

const Question3 = ({ handleNext }) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from reloading the page
    handleNext(); // Call the handleNext function to go to the next question
  };

  return (
    <div className='question'>
      <div className="question-title">
        <span>3<span className="material-symbols-outlined">arrow_right_alt</span></span>
        Which country you are from?🏡🏡🏡
      </div>
      <div className="question-content">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="custom-select-wrapper">
            <div className="custom-select" onClick={toggleDropdown}>
              <div className="custom-select__trigger">
                <span>{selectedCountry || 'Type or select an option'}</span>
                <div className="arrow"></div>
              </div>
              <div className={`custom-options ${isOpen ? 'open' : ''}`}>
                {countries.map((country, index) => (
                  <span key={index} className="custom-option" onClick={() => handleSelect(country)}>
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
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
  );
}

export default Question3;
