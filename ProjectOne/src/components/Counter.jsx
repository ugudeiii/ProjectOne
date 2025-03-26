/*import React, {useState} from "react";

const Counter = ({stock}) => {
    const[ count, setCount] = useState(1);

    const increaseCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {
        setCount (count - 1);
    };

    return (
        <div className="counter-container">
            <button onClick={decreaseCount} disabled={count === 0}>
            -
            </button>
            <div className="counter-number">{count}</div>
            <button onClick={increaseCount} disabled={count >= stock}>
            +
        </button>
        </div>
    );
};

export default Counter;  */

import React, { useState } from "react";

const Counter = ({ count, stock, onIncrease, onDecrease }) => {

  return (
    <div className="counter-container">
      <button onClick={onDecrease} disabled={count === 1}>
        -
      </button>
      <div className="counter-number">{count}</div>
      <button onClick={onIncrease} disabled={count >= stock}>
        +
      </button>
    </div>
  );
};

export default Counter;
