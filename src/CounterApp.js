import React, { useState, useEffect } from "react";
const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <table style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th colSpan="3">CounterApp</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="3" style={{ textAlign: "center" }}>
            count:{count}
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={increment}>+</button>
          </td>
          <td>
            <button onClick={decrement}>-</button>
          </td>
          <td>
            <button onClick={reset}>reset</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default CounterApp;
