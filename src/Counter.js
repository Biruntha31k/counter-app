import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <div className="count-display">
        Count: <span>{count}</span>
      </div>
      <div className="buttons">
        <button className="btn increment" onClick={increment}>
          Increment
        </button>
        <button className="btn decrement" onClick={decrement}>
          Decrement
        </button>
        <button className="btn reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
