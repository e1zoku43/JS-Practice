import React, { useState } from 'react';
import './Counter.css'; 

const Counter = () => {
  const [count, setCount] = useState(0); 

  const increment = () => {
    setCount(count + 1);
  };

  const buttonStyle = {
    backgroundColor: count > 10 ? 'red' : 'green',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div className="counter-container">
      <h2>Counter: {count}</h2>
      <button onClick={increment} style={buttonStyle}>
        Increase Count
      </button>
    </div>
  );
};

export default Counter;
