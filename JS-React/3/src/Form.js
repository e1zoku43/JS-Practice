import React, { useState } from 'react';
import './Form.css';  // Подключаем стили

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue('');
  };

  return (
    <div className="form-container">
      <h2>Input Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something"
        />
        <button type="submit">Submit</button>
      </form>

      {/* Окно для отображения введенного значения */}
      {submittedValue && (
        <div className="result-box">
          <h3>You entered:</h3>
          <p>{submittedValue}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
