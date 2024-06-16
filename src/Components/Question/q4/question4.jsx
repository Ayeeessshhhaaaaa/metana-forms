import React from "react";
import Select from "react-select";
import "./question4.scss";

const countries = [
  { value: "AF", label: "Afghanistan", code: "+93", flag: "🇦🇫" },
  { value: "AX", label: "Åland Islands", code: "+358", flag: "🇦🇽" },
  { value: "AL", label: "Albania", code: "+355", flag: "🇦🇱" },
  { value: "DZ", label: "Algeria", code: "+213", flag: "🇩🇿" },
  { value: "AS", label: "American Samoa", code: "+1-684", flag: "🇦🇸" },
  { value: "AD", label: "Andorra", code: "+376", flag: "🇦🇩" },
  { value: "AO", label: "Angola", code: "+244", flag: "🇦🇴" },
  { value: "AI", label: "Anguilla", code: "+1-264", flag: "🇦🇮" },
  { value: "AQ", label: "Antarctica", code: "+672", flag: "🇦🇶" },
  { value: "AG", label: "Antigua and Barbuda", code: "+1-268", flag: "🇦🇬" },
  { value: "AR", label: "Argentina", code: "+54", flag: "🇦🇷" },
  { value: "AM", label: "Armenia", code: "+374", flag: "🇦🇲" },
  { value: "AW", label: "Aruba", code: "+297", flag: "🇦🇼" },
  { value: "AU", label: "Australia", code: "+61", flag: "🇦🇺" },
  { value: "AT", label: "Austria", code: "+43", flag: "🇦🇹" },
  { value: "AZ", label: "Azerbaijan", code: "+994", flag: "🇦🇿" },
  { value: "BS", label: "Bahamas", code: "+1-242", flag: "🇧🇸" },
  { value: "BH", label: "Bahrain", code: "+973", flag: "🇧🇭" },
  { value: "BD", label: "Bangladesh", code: "+880", flag: "🇧🇩" },
  { value: "BB", label: "Barbados", code: "+1-246", flag: "🇧🇧" },
  { value: "BY", label: "Belarus", code: "+375", flag: "🇧🇾" },
  { value: "BE", label: "Belgium", code: "+32", flag: "🇧🇪" },
  { value: "BZ", label: "Belize", code: "+501", flag: "🇧🇿" },
  { value: "BJ", label: "Benin", code: "+229", flag: "🇧🇯" },
  { value: "BM", label: "Bermuda", code: "+1-441", flag: "🇧🇲" },
  { value: "BT", label: "Bhutan", code: "+975", flag: "🇧🇹" },
  { value: "BO", label: "Bolivia", code: "+591", flag: "🇧🇴" },
  { value: "BA", label: "Bosnia and Herzegovina", code: "+387", flag: "🇧🇦" },
  { value: "BW", label: "Botswana", code: "+267", flag: "🇧🇼" },
  { value: "BR", label: "Brazil", code: "+55", flag: "🇧🇷" },
  {
    value: "IO",
    label: "British Indian Ocean Territory",
    code: "+246",
    flag: "🇮🇴",
  },
  { value: "BN", label: "Brunei Darussalam", code: "+673", flag: "🇧🇳" },
  { value: "BG", label: "Bulgaria", code: "+359", flag: "🇧🇬" },
  { value: "BF", label: "Burkina Faso", code: "+226", flag: "🇧🇫" },
  { value: "BI", label: "Burundi", code: "+257", flag: "🇧🇮" },
  { value: "KH", label: "Cambodia", code: "+855", flag: "🇰🇭" },
  { value: "CM", label: "Cameroon", code: "+237", flag: "🇨🇲" },
  { value: "CA", label: "Canada", code: "+1", flag: "🇨🇦" },
  { value: "CV", label: "Cape Verde", code: "+238", flag: "🇨🇻" },
  { value: "KY", label: "Cayman Islands", code: "+1-345", flag: "🇰🇾" },
  { value: "CF", label: "Central African Republic", code: "+236", flag: "🇨🇫" },
  { value: "TD", label: "Chad", code: "+235", flag: "🇹🇩" },
  { value: "CL", label: "Chile", code: "+56", flag: "🇨🇱" },
  { value: "CN", label: "China", code: "+86", flag: "🇨🇳" },
  { value: "CX", label: "Christmas Island", code: "+61", flag: "🇨🇽" },
  { value: "CC", label: "Cocos (Keeling) Islands", code: "+61", flag: "🇨🇨" },
  { value: "CO", label: "Colombia", code: "+57", flag: "🇨🇴" },
  { value: "KM", label: "Comoros", code: "+269", flag: "🇰🇲" },
  {
    value: "CD",
    label: "Congo, Democratic Republic of the",
    code: "+243",
    flag: "🇨🇩",
  },
  { value: "CG", label: "Congo, Republic of the", code: "+242", flag: "🇨🇬" },
  { value: "CK", label: "Cook Islands", code: "+682", flag: "🇨🇰" },
  { value: "CR", label: "Costa Rica", code: "+506", flag: "🇨🇷" },
  { value: "CI", label: "Côte d'Ivoire", code: "+225", flag: "🇨🇮" },
  { value: "HR", label: "Croatia", code: "+385", flag: "🇭🇷" },
  { value: "CU", label: "Cuba", code: "+53", flag: "🇨🇺" },
  { value: "CW", label: "Curaçao", code: "+599", flag: "🇨🇼" },
  { value: "CY", label: "Cyprus", code: "+357", flag: "🇨🇾" },
  { value: "CZ", label: "Czech Republic", code: "+420", flag: "🇨🇿" },
  { value: "DK", label: "Denmark", code: "+45", flag: "🇩🇰" },
  { value: "DJ", label: "Djibouti", code: "+253", flag: "🇩🇯" },
  { value: "DM", label: "Dominica", code: "+1-767", flag: "🇩🇲" },
  { value: "DO", label: "Dominican Republic", code: "+1-809", flag: "🇩🇴" },
  { value: "EC", label: "Ecuador", code: "+593", flag: "🇪🇨" },
  { value: "EG", label: "Egypt", code: "+20", flag: "🇪🇬" },
  { value: "SV", label: "El Salvador", code: "+503", flag: "🇸🇻" },
  { value: "GQ", label: "Equatorial Guinea", code: "+240", flag: "🇬🇶" },
  { value: "ER", label: "Eritrea", code: "+291", flag: "🇪🇷" },
  { value: "EE", label: "Estonia", code: "+372", flag: "🇪🇪" },
  { value: "SZ", label: "Eswatini", code: "+268", flag: "🇸🇿" },
  { value: "ET", label: "Ethiopia", code: "+251", flag: "🇪🇹" },
  {
    value: "FK",
    label: "Falkland Islands (Malvinas)",
    code: "+500",
    flag: "🇫🇰",
  },
  { value: "FO", label: "Faroe Islands", code: "+298", flag: "🇫🇴" },
  { value: "FJ", label: "Fiji", code: "+679", flag: "🇫🇯" },
  { value: "FI", label: "Finland", code: "+358", flag: "🇫🇮" },
  { value: "FR", label: "France", code: "+33", flag: "🇫🇷" },
  { value: "GF", label: "French Guiana", code: "+594", flag: "🇬🇫" },
  { value: "PF", label: "French Polynesia", code: "+689", flag: "🇵🇫" },
  {
    value: "TF",
    label: "French Southern Territories",
    code: "+262",
    flag: "🇹🇫",
  },
  { value: "GA", label: "Gabon", code: "+241", flag: "🇬🇦" },
  { value: "GM", label: "Gambia", code: "+220", flag: "🇬🇲" },
  { value: "GE", label: "Georgia", code: "+995", flag: "🇬🇪" },
  { value: "DE", label: "Germany", code: "+49", flag: "🇩🇪" },
  { value: "GH", label: "Ghana", code: "+233", flag: "🇬🇭" },
  { value: "GI", label: "Gibraltar", code: "+350", flag: "🇬🇮" },
  { value: "GR", label: "Greece", code: "+30", flag: "🇬🇷" },
  { value: "GL", label: "Greenland", code: "+299", flag: "🇬🇱" },
  { value: "GD", label: "Grenada", code: "+1-473", flag: "🇬🇩" },
  { value: "GP", label: "Guadeloupe", code: "+590", flag: "🇬🇵" },
  { value: "GU", label: "Guam", code: "+1-671", flag: "🇬🇺" },
  { value: "GT", label: "Guatemala", code: "+502", flag: "🇬🇹" },
  { value: "GG", label: "Guernsey", code: "+44-1481", flag: "🇬🇬" },
  { value: "GN", label: "Guinea", code: "+224", flag: "🇬🇳" },
  { value: "GW", label: "Guinea-Bissau", code: "+245", flag: "🇬🇼" },
  { value: "GY", label: "Guyana", code: "+592", flag: "🇬🇾" },
  { value: "HT", label: "Haiti", code: "+509", flag: "🇭🇹" },
  {
    value: "VA",
    label: "Holy See (Vatican City State)",
    code: "+379",
    flag: "🇻🇦",
  },
  { value: "HN", label: "Honduras", code: "+504", flag: "🇭🇳" },
  { value: "HK", label: "Hong Kong", code: "+852", flag: "🇭🇰" },
  { value: "HU", label: "Hungary", code: "+36", flag: "🇭🇺" },
  { value: "IS", label: "Iceland", code: "+354", flag: "🇮🇸" },
  { value: "IN", label: "India", code: "+91", flag: "🇮🇳" },
  { value: "ID", label: "Indonesia", code: "+62", flag: "🇮🇩" },
  { value: "IR", label: "Iran", code: "+98", flag: "🇮🇷" },
  { value: "IQ", label: "Iraq", code: "+964", flag: "🇮🇶" },
  { value: "IE", label: "Ireland", code: "+353", flag: "🇮🇪" },
  { value: "IM", label: "Isle of Man", code: "+44-1624", flag: "🇮🇲" },
  { value: "IL", label: "Israel", code: "+972", flag: "🇮🇱" },
  { value: "IT", label: "Italy", code: "+39", flag: "🇮🇹" },
  { value: "JM", label: "Jamaica", code: "+1-876", flag: "🇯🇲" },
  { value: "JP", label: "Japan", code: "+81", flag: "🇯🇵" },
  { value: "JE", label: "Jersey", code: "+44-1534", flag: "🇯🇪" },
  { value: "JO", label: "Jordan", code: "+962", flag: "🇯🇴" },
  { value: "KZ", label: "Kazakhstan", code: "+7", flag: "🇰🇿" },
  { value: "KE", label: "Kenya", code: "+254", flag: "🇰🇪" },
  { value: "KI", label: "Kiribati", code: "+686", flag: "🇰🇮" },
  { value: "KP", label: "Korea (North)", code: "+850", flag: "🇰🇵" },
  { value: "KR", label: "Korea (South)", code: "+82", flag: "🇰🇷" },
  { value: "KW", label: "Kuwait", code: "+965", flag: "🇰🇼" },
  { value: "KG", label: "Kyrgyzstan", code: "+996", flag: "🇰🇬" },
  {
    value: "LA",
    label: "Lao People's Democratic Republic",
    code: "+856",
    flag: "🇱🇦",
  },
  { value: "LV", label: "Latvia", code: "+371", flag: "🇱🇻" },
  { value: "LB", label: "Lebanon", code: "+961", flag: "🇱🇧" },
  { value: "LS", label: "Lesotho", code: "+266", flag: "🇱🇸" },
  { value: "LR", label: "Liberia", code: "+231", flag: "🇱🇷" },
  { value: "LY", label: "Libya", code: "+218", flag: "🇱🇾" },
  { value: "LI", label: "Liechtenstein", code: "+423", flag: "🇱🇮" },
  { value: "LT", label: "Lithuania", code: "+370", flag: "🇱🇹" },
  { value: "LU", label: "Luxembourg", code: "+352", flag: "🇱🇺" },
  { value: "MO", label: "Macao", code: "+853", flag: "🇲🇴" },
  { value: "MG", label: "Madagascar", code: "+261", flag: "🇲🇬" },
  { value: "MW", label: "Malawi", code: "+265", flag: "🇲🇼" },
  { value: "MY", label: "Malaysia", code: "+60", flag: "🇲🇾" },
  { value: "MV", label: "Maldives", code: "+960", flag: "🇲🇻" },
  { value: "ML", label: "Mali", code: "+223", flag: "🇲🇱" },
  { value: "MT", label: "Malta", code: "+356", flag: "🇲🇹" },
  { value: "MH", label: "Marshall Islands", code: "+692", flag: "🇲🇭" },
  { value: "MQ", label: "Martinique", code: "+596", flag: "🇲🇶" },
  { value: "MR", label: "Mauritania", code: "+222", flag: "🇲🇷" },
  { value: "MU", label: "Mauritius", code: "+230", flag: "🇲🇺" },
  { value: "YT", label: "Mayotte", code: "+262", flag: "🇾🇹" },
  { value: "MX", label: "Mexico", code: "+52", flag: "🇲🇽" },
  { value: "FM", label: "Micronesia", code: "+691", flag: "🇫🇲" },
  { value: "MD", label: "Moldova", code: "+373", flag: "🇲🇩" },
  { value: "MC", label: "Monaco", code: "+377", flag: "🇲🇨" },
  { value: "MN", label: "Mongolia", code: "+976", flag: "🇲🇳" },
  { value: "ME", label: "Montenegro", code: "+382", flag: "🇲🇪" },
  { value: "MS", label: "Montserrat", code: "+1-664", flag: "🇲🇸" },
  { value: "MA", label: "Morocco", code: "+212", flag: "🇲🇦" },
  { value: "MZ", label: "Mozambique", code: "+258", flag: "🇲🇿" },
  { value: "MM", label: "Myanmar", code: "+95", flag: "🇲🇲" },
  { value: "NA", label: "Namibia", code: "+264", flag: "🇳🇦" },
  { value: "NR", label: "Nauru", code: "+674", flag: "🇳🇷" },
  { value: "NP", label: "Nepal", code: "+977", flag: "🇳🇵" },
  { value: "NL", label: "Netherlands", code: "+31", flag: "🇳🇱" },
  { value: "NC", label: "New Caledonia", code: "+687", flag: "🇳🇨" },
  { value: "NZ", label: "New Zealand", code: "+64", flag: "🇳🇿" },
  { value: "NI", label: "Nicaragua", code: "+505", flag: "🇳🇮" },
  { value: "NE", label: "Niger", code: "+227", flag: "🇳🇪" },
  { value: "NG", label: "Nigeria", code: "+234", flag: "🇳🇬" },
  { value: "NU", label: "Niue", code: "+683", flag: "🇳🇺" },
  { value: "NF", label: "Norfolk Island", code: "+672", flag: "🇳🇫" },
  {
    value: "MP",
    label: "Northern Mariana Islands",
    code: "+1-670",
    flag: "🇲🇵",
  },
  { value: "NO", label: "Norway", code: "+47", flag: "🇳🇴" },
  { value: "OM", label: "Oman", code: "+968", flag: "🇴🇲" },
  { value: "PK", label: "Pakistan", code: "+92", flag: "🇵🇰" },
  { value: "PW", label: "Palau", code: "+680", flag: "🇵🇼" },
  { value: "PS", label: "Palestine", code: "+970", flag: "🇵🇸" },
  { value: "PA", label: "Panama", code: "+507", flag: "🇵🇦" },
  { value: "PG", label: "Papua New Guinea", code: "+675", flag: "🇵🇬" },
  { value: "PY", label: "Paraguay", code: "+595", flag: "🇵🇾" },
  { value: "PE", label: "Peru", code: "+51", flag: "🇵🇪" },
  { value: "PH", label: "Philippines", code: "+63", flag: "🇵🇭" },
  { value: "PL", label: "Poland", code: "+48", flag: "🇵🇱" },
  { value: "PT", label: "Portugal", code: "+351", flag: "🇵🇹" },
  { value: "PR", label: "Puerto Rico", code: "+1-787", flag: "🇵🇷" },
  { value: "QA", label: "Qatar", code: "+974", flag: "🇶🇦" },
  { value: "RE", label: "Réunion", code: "+262", flag: "🇷🇪" },
  { value: "RO", label: "Romania", code: "+40", flag: "🇷🇴" },
  { value: "RU", label: "Russian Federation", code: "+7", flag: "🇷🇺" },
  { value: "RW", label: "Rwanda", code: "+250", flag: "🇷🇼" },
  { value: "BL", label: "Saint Barthélemy", code: "+590", flag: "🇧🇱" },
  {
    value: "SH",
    label: "Saint Helena, Ascension and Tristan da Cunha",
    code: "+290",
    flag: "🇸🇭",
  },
  { value: "KN", label: "Saint Kitts and Nevis", code: "+1-869", flag: "🇰🇳" },
  { value: "LC", label: "Saint Lucia", code: "+1-758", flag: "🇱🇨" },
  {
    value: "MF",
    label: "Saint Martin (French part)",
    code: "+590",
    flag: "🇲🇫",
  },
  { value: "PM", label: "Saint Pierre and Miquelon", code: "+508", flag: "🇵🇲" },
  {
    value: "VC",
    label: "Saint Vincent and the Grenadines",
    code: "+1-784",
    flag: "🇻🇨",
  },
  { value: "WS", label: "Samoa", code: "+685", flag: "🇼🇸" },
  { value: "SM", label: "San Marino", code: "+378", flag: "🇸🇲" },
  { value: "ST", label: "Sao Tome and Principe", code: "+239", flag: "🇸🇹" },
  { value: "SA", label: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { value: "SN", label: "Senegal", code: "+221", flag: "🇸🇳" },
  { value: "RS", label: "Serbia", code: "+381", flag: "🇷🇸" },
  { value: "SC", label: "Seychelles", code: "+248", flag: "🇸🇨" },
  { value: "SL", label: "Sierra Leone", code: "+232", flag: "🇸🇱" },
  { value: "SG", label: "Singapore", code: "+65", flag: "🇸🇬" },
  {
    value: "SX",
    label: "Sint Maarten (Dutch part)",
    code: "+1-721",
    flag: "🇸🇽",
  },
  { value: "SK", label: "Slovakia", code: "+421", flag: "🇸🇰" },
  { value: "SI", label: "Slovenia", code: "+386", flag: "🇸🇮" },
  { value: "SB", label: "Solomon Islands", code: "+677", flag: "🇸🇧" },
  { value: "SO", label: "Somalia", code: "+252", flag: "🇸🇴" },
  { value: "ZA", label: "South Africa", code: "+27", flag: "🇿🇦" },
  {
    value: "GS",
    label: "South Georgia and the South Sandwich Islands",
    code: "+500",
    flag: "🇬🇸",
  },
  { value: "SS", label: "South Sudan", code: "+211", flag: "🇸🇸" },
  { value: "ES", label: "Spain", code: "+34", flag: "🇪🇸" },
  { value: "LK", label: "Sri Lanka", code: "+94", flag: "🇱🇰" },
  { value: "SD", label: "Sudan", code: "+249", flag: "🇸🇩" },
  { value: "SR", label: "Suriname", code: "+597", flag: "🇸🇷" },
  { value: "SJ", label: "Svalbard and Jan Mayen", code: "+47", flag: "🇸🇯" },
  { value: "SE", label: "Sweden", code: "+46", flag: "🇸🇪" },
  { value: "CH", label: "Switzerland", code: "+41", flag: "🇨🇭" },
  { value: "SY", label: "Syrian Arab Republic", code: "+963", flag: "🇸🇾" },
  { value: "TW", label: "Taiwan", code: "+886", flag: "🇹🇼" },
  { value: "TJ", label: "Tajikistan", code: "+992", flag: "🇹🇯" },
  { value: "TZ", label: "Tanzania", code: "+255", flag: "🇹🇿" },
  { value: "TH", label: "Thailand", code: "+66", flag: "🇹🇭" },
  { value: "TL", label: "Timor-Leste", code: "+670", flag: "🇹🇱" },
  { value: "TG", label: "Togo", code: "+228", flag: "🇹🇬" },
  { value: "TK", label: "Tokelau", code: "+690", flag: "🇹🇰" },
  { value: "TO", label: "Tonga", code: "+676", flag: "🇹🇴" },
  { value: "TT", label: "Trinidad and Tobago", code: "+1-868", flag: "🇹🇹" },
  { value: "TN", label: "Tunisia", code: "+216", flag: "🇹🇳" },
  { value: "TR", label: "Turkey", code: "+90", flag: "🇹🇷" },
  { value: "TM", label: "Turkmenistan", code: "+993", flag: "🇹🇲" },
  {
    value: "TC",
    label: "Turks and Caicos Islands",
    code: "+1-649",
    flag: "🇹🇨",
  },
  { value: "TV", label: "Tuvalu", code: "+688", flag: "🇹🇻" },
  { value: "UG", label: "Uganda", code: "+256", flag: "🇺🇬" },
  { value: "UA", label: "Ukraine", code: "+380", flag: "🇺🇦" },
  { value: "AE", label: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { value: "GB", label: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { value: "US", label: "United States", code: "+1", flag: "🇺🇸" },
  { value: "UY", label: "Uruguay", code: "+598", flag: "🇺🇾" },
  { value: "UZ", label: "Uzbekistan", code: "+998", flag: "🇺🇿" },
  { value: "VU", label: "Vanuatu", code: "+678", flag: "🇻🇺" },
  { value: "VE", label: "Venezuela", code: "+58", flag: "🇻🇪" },
  { value: "VN", label: "Vietnam", code: "+84", flag: "🇻🇳" },
  { value: "YE", label: "Yemen", code: "+967", flag: "🇾🇪" },
  { value: "ZM", label: "Zambia", code: "+260", flag: "🇿🇲" },
  { value: "ZW", label: "Zimbabwe", code: "+263", flag: "🇿🇼" },
];
const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "2px solid #e9d4ff",
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "transparent",
    color: "#cf9fff",
    display: "flex",
    alignItems: "center",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#cf9fff" : "#fff",
    color: state.isSelected ? "#fff" : "#6c757d",
    padding: "10px",
    display: "flex",
    alignItems: "center",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#6c757d",
    display: "flex",
    alignItems: "center",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#f9f9f9",
    border: "2px solid #e9d4ff",
    borderRadius: "5px",
  }),
};

const formatOptionLabel = ({ label, code, flag }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <span style={{ marginRight: 10 }}>{flag}</span>
    <span>{label}</span>
    <span style={{ marginLeft: "auto", paddingLeft: 10, color: "#6c757d" }}>
      {code}
    </span>
  </div>
);

const formatSingleValue = ({ flag }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <span>{flag}</span>
  </div>
);

const Question4 = ({ handleNext }) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from reloading the page
    handleNext(); // Call the handleNext function to go to the next question
  };
  return (
    <div className="question">
      <div className="question-title">
        <span>
          4<span className="material-symbols-outlined">arrow_right_alt</span>
        </span>
        What is your phone number?
      </div>
      <div className="question-content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-group">
              <Select
                options={countries}
                styles={customStyles}
                formatOptionLabel={formatOptionLabel}
                formatSingleValue={formatSingleValue}
                placeholder="Search countries"
              />
              <input
                type="text"
                className="phone-input"
                placeholder="Phone number"
              />
            </div>
          </div>
          <div className="button-container">
            <button type="submit" className="btn btn-primary submit-button">
              OK
            </button>
            <div className="support-text">
              press <strong>Enter ↵</strong>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Question4;
