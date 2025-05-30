import React, { useState, useEffect } from "react";
import "./FunTableform.css";
import { blueGrey, grey, lightBlue, red } from "@mui/material/colors";
import { CenterFocusStrong } from "@mui/icons-material";

const FunTableForm = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [weather, setWeather] = useState(null);
  const [selectedState, setState] = useState("");

  const API_key = "7298c58b33527d3b8c6006337a52a48f";
  const states = [
    { state: "Andhra Pradesh", city: "Vijayawada", style: { color: "red" } },
    { state: "Arunachal Pradesh", city: "Itanagar", style: { color: "red" } },
    { state: "Assam", city: "Guwahati", style: { color: "blue" } },
    { state: "Bihar", city: "Patna", style: { color: "green" } },
    { state: "Chhattisgarh", city: "Raipur", style: { color: "white" } },
    { state: "Goa", city: "Panaji", style: { color: "pink" } },
    { state: "Gujarat", city: "Ahmedabad", style: { color: "orange" } },
    { state: "Haryana", city: "Chandigarh", style: { color: "purple" } },
    { state: "Himachal Pradesh", city: "Shimla", style: { color: "indigo" } },
    { state: "Jharkhand", city: "Ranchi", style: { color: "yellow" } },
    { state: "Karnataka", city: "Bengaluru", style: { color: "teal" } },
    { state: "Kerala", city: "Thiruvananthapuram", style: { color: "brown" } },
    { state: "Madhya Pradesh", city: "Bhopal", style: { color: "black" } },
    { state: "Maharashtra", city: "Mumbai", style: { color: "skyblue" } },
    { state: "Manipur", city: "Imphal", style: { color: "grey" } },
    { state: "Meghalaya", city: "Shillong", style: { color: "blueGrey" } },
    { state: "Mizoram", city: "Aizawl", style: { color: "lightBlue" } },
    { state: "Nagaland", city: "Kohima", style: { color: "lightgreen" } },
    { state: "Odisha", city: "Bhubaneswar", style: { color: "red" } },
    { state: "Punjab", city: "Amritsar", style: { color: "red" } },
    { state: "Rajasthan", city: "Jaipur", style: { color: "red" } },
    { state: "Sikkim", city: "Gangtok", style: { color: "red" } },
    { state: "Tamil Nadu", city: "Chennai", style: { color: "red" } },
    { state: "Telangana", city: "Hyderabad", style: { color: "red" } },
    { state: "Tripura", city: "Agartala", style: { color: "red" } },
    { state: "Uttar Pradesh", city: "Lucknow", style: { color: "red" } },
    { state: "Uttarakhand", city: "Dehradun", style: { color: "red" } },
    { state: "West Bengal", city: "Kolkata", style: { color: "red" } },
  ];
  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let res = "";

    if (isNaN(n1) || isNaN(n2)) {
      res = "Enter valid numbers";
    } else {
      switch (operator) {
        case "+":
          res = n1 + n2;
          break;
        case "-":
          res = n1 - n2;
          break;
        case "*":
          res = n1 * n2;
          break;
        case "/":
          res = n2 !== 0 ? n1 / n2 : "Cannot divide by 0";
          break;
        default:
          res = "Invalid operator";
      }
    }

    setResult(res);
  };
  useEffect(() => {
    const fetchWeather = async (params) => {
      if (!selectedState) return;
      const selectedCity = states.find((s) => s.state === selectedState)?.city;
      if (!selectedCity) return;
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q={selecetedCity}&appid={98c58b33527d3b8c6006337a52a48f}&units=metric"
      );
      const data = await response.json();

      if (data.main) {
        setWeather({
          temp: data.main.temp,
          humidity: data.main.humidity,
          wind: data.wind.speed,
        });
      } else {
        setWeather(null);
      }
    };
    fetchWeather();
  }, [selectedState]);

  return (
    <form style={{ textAlign: "center" }}>
      <table style={{ borderCollapse: "collapse", margin: "0 auto" }}>
        <thead>
          <tr>
            <th colSpan="4" style={{ textAlign: "center" }}>
              Function Table
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" style={{ textAlign: "center" }}>
              1. Calculator
            </td>
          </tr>
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
              <button onClick={calculate}>Calculate</button>
              {result !== null ? result : "—"}
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
                <option value="">Select State</option>
                {states.map((region, i) => (
                  <option key={i} value={region.state}>
                    {region.state}
                  </option>
                ))}
                <option value=""></option>
              </select>
            </td>
            <td>Temperature{weather ? `${weather.temp}°C` : ""}</td>
            <td>Humidity{weather ? `${weather.humidity}%` : ""}</td>
            <td>Wind{weather ? `${weather.wind} m/s` : ""}</td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};
export default FunTableForm;
