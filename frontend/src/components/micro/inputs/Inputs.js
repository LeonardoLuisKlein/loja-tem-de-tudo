import React from 'react';
import './Inputs.scss'

export function Inputs(props) {
  const { regex, errorMessage, isValid, value, onChange } = props;

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    onChange(inputValue);
  };

  const isInputValid = () => {
    return regex.test(props.value);
  };

  return (
    <div id={props.containerType}>
      <label className="labelInput">{props.labelText}</label>
      <input
        type={props.inputType}
        value={value}
        id={props.inputId}
        placeholder={props.placehInput}
        onChange={handleInputChange}
        className={!isValid || !isInputValid() ? 'invalid' : ''}
      />
      {!isValid && <span className="basicError">{errorMessage}</span>}
    </div>
  );
}