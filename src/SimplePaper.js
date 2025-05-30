import { blue } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import Buttons from "./Buttons";
import SimplePopper from "./SimplePopper";
import "./SimplePaper.css";
import { useEffect, useState } from "react";

function SimplePaper() {
  const [directions, setDirections] = useState({
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
  });
  const [btnText, setBtnText] = useState("");
  const [show, setShow] = useState(false);

  const onClick = (btn) => {
    setDirections({ ...directions, [btn]: directions[btn] + 2 });

    setBtnText(`${btn} clicked and moved ${btn}by ${directions[btn]}`);
  };

  return (
    <>
      <div className="simple-paper-custom">
        <SimplePopper showPopup={show} directions={directions} data={btnText} />
      </div>
      <button onClick={() => onClick("top")}>top</button>
      <button onClick={() => onClick("right")}>right</button>
      <button onClick={() => onClick("bottom")}>bottom</button>
      <button onClick={() => onClick("left")}>left</button>
      <button onClick={() => setShow((prev) => !prev)}>toggle state</button>
    </>
  );
}
export default SimplePaper;
