import { useState } from "react";
import "./App.css";

const counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counterButton">
      <button
        className="minus"
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <p>{counter}</p>
      <button
        className="plus"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button
        className="reset"
        onClick={() => {
          setCounter(0);
        }}
      >
        reset nahomy
      </button>
    </div>
  );
};

export default counter;
