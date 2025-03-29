import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css'; 

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="App">
      <h1>Счётчик: {count}</h1>
      <button onClick={increment}>Увеличить на 1</button>
      <button onClick={decrement}>Уменьшить на 1</button>
      <button onClick={reset}>Сбросить</button>
    </div>
  );
};

export default App;
