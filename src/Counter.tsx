import React, { useState, useEffect } from "react";
import "./App.css";

const add = (a: number, b: number): number => a + b;

function add3(value: number): number {
  return add(3, value);
}

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = (valueToAdd: number) => () => {
    setCount(count + valueToAdd);
  };

  const reset = () => {
    setCount(0);
  };

  useEffect(() => {
    document.title = `${count} Malotru`;
  }, [count]);

  return (
    <div style={{ backgroundColor: "lightblue", margin: 10, padding: 10 }}>
      <h1>Score</h1>
      <h2>count: {count}</h2>
      <button onClick={increment(1)}>ajouter 1</button>
      <button onClick={increment(10)}>ajouter 10</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default Counter;
