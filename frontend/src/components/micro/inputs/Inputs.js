import React from 'react';
import './Inputs.scss'

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
      <input
        id="inputPrincipal"
        type={props.inputType}
        value={value}
        placeholder={props.placehInput}
        readOnly={props.readOnly} // Adicione a propriedade readOnly aqui
        onChange={handleInputChange}
        className={!isValid || !isInputValid() ? 'invalid' : ''}
      />
      {!isValid && <span className="basicError">{errorMessage}</span>}
    </div>
  );
}