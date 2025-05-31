import { useState, useEffect } from "react";
const PracticeQues = () => {
  const [count1, setCount1] = useState(0);
  const [show, setShow] = useState(false);
  const [formData, setformdata] = useState({ name: "", email: "" });
  const [submitedData, setSubmittedData] = useState(null);
  const Submit = (event) => {
    const { name, value } = event.target;
    setformdata((prev) => ({}));
  };
  const handleToggle = () => {
    setShow((prev) => !prev);
  };
  const add = () => {
    setCount1(count1 + 1);
  };
  const subtract = () => {
    setCount1(count1 - 1);
  };
  const reset = () => {
    setCount1(0);
  };
  useEffect(() => {});
  return (
    <>
      {show && <p>This is a counter app: click on the button to show/hide--</p>}
      <button onClick={handleToggle}>{show ? "Hide" : "show"}</button>

      <table style={{ borderCollapse: "collapse" }}>
        <thead>
          <th colSpan="4" style={{ textAlign: "center" }}>
            Counter
          </th>
        </thead>
        <tbody>
          <tr colSpan="4" style={{ textAlign: "center" }}>
            <td>Count{count1}</td>
            <td>
              <button onClick={add}>add</button>
            </td>
            <td>
              <button onClick={subtract}>subtract</button>
            </td>
            <td>
              <button onClick={reset}>reset</button>
            </td>
          </tr>
        </tbody>
      </table>
      <form onSubmit={Submit}>
        <div>
          <label>Name:</label>
          <input type="text"></input>
        </div>
      </form>
    </>
  );
};
export default PracticeQues;
