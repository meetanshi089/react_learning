import React, { useState, useEffect } from "react";

const Learning = () => {
  const [state, setState] = useState(10);
  const [text, setText] = useState("Nothing called");
  const [style, setStyle] = useState({
    backgroundColor: "white",
    borderRadius: "2px",
    border: "2px solid black",
  });

  const onClick = () => {
    setState(state + 1);
  };

  useEffect(() => {
    if (state === 14) {
      setStyle({ ...style, backgroundColor: "blue", borderRadius: "4px" });
    }
    if (state === 15) {
      setStyle({ ...style, backgroundColor: "yellow", borderRadius: "6px" });
    }
    if (state === 16) {
      setStyle({ ...style, backgroundColor: "red", borderRadius: "8px" });
    }
    if (state === 17) {
      setStyle({ ...style, backgroundColor: "orange", borderRadius: "10px" });
    }
    if (state === 18) {
      setStyle({ ...style, backgroundColor: "pink", borderRadius: "12px" });
    }
    if (state === 19) {
      setStyle({ ...style, backgroundColor: "green", borderRadius: "14px" });
    }
    console.log("compomnent rendered");
  }, [state]);

  return (
    <div style={style}>
      <div
        style={{ height: "100px", width: "600px", color: "black" }}
        onClick={onClick}
      >
        <p>'State was updated using useEffect to': {state}</p>
        {text}
      </div>
    </div>
  );
};

export default Learning;
