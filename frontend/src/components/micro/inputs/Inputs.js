import React from 'react';
import InputMask from 'react-input-mask';
import './Inputs.scss';

export function Inputs(props) {
  const { regex, errorMessage, isValid, value, onChange, readOnly } = props;

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
      {props.inputType === 'masked' ? (
        <InputMask
          id="inputPrincipal"
          mask="999.999.999-99"
          maskChar={null}
          value={value}
          placeholder={props.placehInput}
          readOnly={readOnly}
          onChange={handleInputChange}
          className={!isValid || !isInputValid() ? 'invalid' : ''}
        />
      ) : (
        <input
          id="inputPrincipal"
          type={props.inputType}
          value={value}
          placeholder={props.placehInput}
          readOnly={readOnly}
          onChange={handleInputChange}
          className={!isValid || !isInputValid() ? 'invalid' : ''}
        />
      )}
      {!isValid && <span className="basicError">{errorMessage}</span>}
    </div>
  );
}