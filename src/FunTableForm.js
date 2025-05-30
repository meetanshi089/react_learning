import React, { useState, useEffect } from "react";
import "./FunTableform.css";
import { blueGrey, grey, lightBlue, red } from "@mui/material/colors";
import { CenterFocusStrong } from "@mui/icons-material";

const FunTableForm = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(0);
  const [weather, setWeather] = useState(null);
  const [state, setState] = useState("");

  const API_key = "7298c58b33527d3b8c6006337a52a48f";
  const State = [
    { Statename: "Andhra Pradesh", style: { color: "red" } },
    { state: "Arunachal Pradesh", style: { color: "red" } },
    { state: "Assam", style: { color: "blue" } },
    { state: "Bihar", style: { color: "green" } },
    { state: "Chhattisgarh", style: { color: "white" } },
    { state: "Goa", style: { color: "pink" } },
    { state: "Gujarat", style: { color: "orange" } },
    { state: "Haryana", style: { color: "purple" } },
    { state: "Himachal Pradesh", style: { color: "indigo" } },
    { state: "Jharkhand", style: { color: "yellow" } },
    { state: "Karnataka", style: { color: "teal" } },
    { state: "Kerala", style: { color: "brown" } },
    { state: "Madhya Pradesh", style: { color: "black" } },
    { state: "Maharashtra", style: { color: "skyblue" } },
    { state: "Manipur", style: { color: "grey" } },
    { state: "Meghalaya", style: { color: "blueGrey" } },
    { state: "Mizoram", style: { color: "lightBlue" } },
    { state: "Nagaland", style: { color: "lightgreen" } },
    { state: "Odisha", style: { color: "red" } },
    { state: "Punjab", style: { color: "red" } },
    { state: "Rajasthan", style: { color: "red " } },
    { state: "Sikkim", style: { color: "red" } },
    { state: "Tamil Nadu", style: { color: "red" } },
    { state: "Telangana", style: { color: "red" } },
    { state: "Tripura", style: { color: "red" } },
    { state: "Uttar Pradesh", style: { color: "red" } },
    { state: "Uttarakhand", style: { color: "red" } },
    { state: "West Bengal", style: { color: "red" } },
  ];
  return (
    <form style={{ textAlign: "center" }}>
      <table style={{ borderCollapse: "collapse" }}>
        <thead colSpan="1">
          <tr>Function Table</tr>
        </thead>
        <tr>
          <td colSpan="4" style={{ textAlign: "center" }}>
            1. Calculator
          </td>
        </tr>

        <tbody>
          <tr>
            <td>
              Insert number 1:
              <input
                type="text"
                value={num1}
                onChange={(event) => {
                  setNum1(event.target.value);
                }}
              ></input>
            </td>
            <td>
              <p>Insert operator(+,-,*,/)</p>
              <input
                type="text"
                value={operator}
                onChange={(event) => {
                  setOperator(event.target.value);
                }}
              ></input>
            </td>
            <td>
              Insert number 2:
              <input
                type="text"
                value={num2}
                onChange={(event) => {
                  setNum2(event.target.value);
                }}
              ></input>
            </td>
            <td>
              Result:
              <input
                type="text"
                value={result}
                onChange={(event) => {
                  setResult(event.target.value);
                }}
              ></input>
              {/*<buttongroup variant="outlined">
                  {State.map((item, index) => (
                    <button>
                      <ul>
                        <li key={index} style={item.style}>
                          {item.state}
                        </li>
                      </ul>
                    </button>
                  ))}
                </buttongroup>*/}
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              2. Weather Condition
            </td>
          </tr>
          <tr>
            <td>
              Choose State:
              <select
                value="state"
                onChange={(event) => {
                  setState(event.target.value);
                }}
              >
                {Object.keys(State).map((Statename) => {
                  <option key={index} value={stateName}>
                    {stateName}
                  </option>;
                })}
                <option value=""></option>
              </select>
            </td>
            <td>Temperature</td>
            <td>Humidity</td>
            <td>Wind</td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
    </form>
  );
};
export default FunTableForm;
