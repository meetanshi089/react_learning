import React, { useState, useEffect } from "react";
const Practice = () => {
  const state = useState(0);
  const [count, setCount] = state;
  const [text, setText] = useState("Practice component called.");
  const [style, setStyle] = useState({
    backgroundColor: "teal",
    border: "2px double black",
    borderRadius: "2px",
  });
  const onClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    if (count === 3) {
      setStyle({ ...style, backgroundColor: "blue", borderRadius: "6px" });
    }
    if (count === 3) {
      setStyle({ ...style, backgroundColor: "blue", borderRadius: "6px" });
    }
  }, [count]);

  return (
    <div style={style}>
      <div
        style={{ height: "100px", width: "600px", color: "black" }}
        onClick={onClick}
      >
        {text}
      </div>
    </div>
  );
};

export default Practice;
