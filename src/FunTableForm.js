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
    {
      state: "Andhra Pradesh",
      city: "Vijayawada",
      style: { color: "red" },
      stateCode: "AP",
      countryCode: "IN",
    },
    {
      state: "Arunachal Pradesh",
      city: "Itanagar",
      style: { color: "red" },
      stateCode: "AR",
      countryCode: "IN",
    },
    {
      state: "Assam",
      city: "Guwahati",
      style: { color: "blue" },
      stateCode: "AS",
      countryCode: "IN",
    },
    {
      state: "Bihar",
      city: "Patna",
      style: { color: "green" },
      stateCode: "BR",
      countryCode: "IN",
    },
    {
      state: "Chhattisgarh",
      city: "Raipur",
      style: { color: "white" },
      stateCode: "CT",
      countryCode: "IN",
    },
    {
      state: "Goa",
      city: "Panaji",
      style: { color: "pink" },
      stateCode: "GA",
      countryCode: "IN",
    },
    {
      state: "Gujarat",
      city: "Ahmedabad",
      style: { color: "orange" },
      stateCode: "GJ",
      countryCode: "IN",
    },
    {
      state: "Haryana",
      city: "Chandigarh",
      style: { color: "purple" },
      stateCode: "HR",
      countryCode: "IN",
    },
    {
      state: "Himachal Pradesh",
      city: "Shimla",
      style: { color: "indigo" },
      stateCode: "HP",
      countryCode: "IN",
    },
    {
      state: "Jharkhand",
      city: "Ranchi",
      style: { color: "yellow" },
      stateCode: "JH",
      countryCode: "IN",
    },
    {
      state: "Karnataka",
      city: "Bengaluru",
      style: { color: "teal" },
      stateCode: "KA",
      countryCode: "IN",
    },
    {
      state: "Kerala",
      city: "Thiruvananthapuram",
      style: { color: "brown" },
      stateCode: "KL",
      countryCode: "IN",
    },
    {
      state: "Madhya Pradesh",
      city: "Bhopal",
      style: { color: "black" },
      stateCode: "MP",
      countryCode: "IN",
    },
    {
      state: "Maharashtra",
      city: "Mumbai",
      style: { color: "skyblue" },
      stateCode: "MH",
      countryCode: "IN",
    },
    {
      state: "Manipur",
      city: "Imphal",
      style: { color: "grey" },
      stateCode: "MN",
      countryCode: "IN",
    },
    {
      state: "Meghalaya",
      city: "Shillong",
      style: { color: "blueGrey" },
      stateCode: "ML",
      countryCode: "IN",
    },
    {
      state: "Mizoram",
      city: "Aizawl",
      style: { color: "lightBlue" },
      stateCode: "MZ",
      countryCode: "IN",
    },
    {
      state: "Nagaland",
      city: "Kohima",
      style: { color: "lightgreen" },
      stateCode: "NL",
      countryCode: "IN",
    },
    {
      state: "Odisha",
      city: "Bhubaneswar",
      style: { color: "red" },
      stateCode: "OR",
      countryCode: "IN",
    },
    {
      state: "Punjab",
      city: "Amritsar",
      style: { color: "red" },
      stateCode: "PB",
      countryCode: "IN",
    },
    {
      state: "Rajasthan",
      city: "Jaipur",
      style: { color: "red" },
      stateCode: "RJ",
      countryCode: "IN",
    },
    {
      state: "Sikkim",
      city: "Gangtok",
      style: { color: "red" },
      stateCode: "SK",
      countryCode: "IN",
    },
    {
      state: "Tamil Nadu",
      city: "Chennai",
      style: { color: "red" },
      stateCode: "TN",
      countryCode: "IN",
    },
    {
      state: "Telangana",
      city: "Hyderabad",
      style: { color: "red" },
      stateCode: "TG",
      countryCode: "IN",
    },
    {
      state: "Tripura",
      city: "Agartala",
      style: { color: "red" },
      stateCode: "TR",
      countryCode: "IN",
    },
    {
      state: "Uttar Pradesh",
      city: "Lucknow",
      style: { color: "red" },
      stateCode: "UP",
      countryCode: "IN",
    },
    {
      state: "Uttarakhand",
      city: "Dehradun",
      style: { color: "red" },
      stateCode: "UK",
      countryCode: "IN",
    },
    {
      state: "West Bengal",
      city: "Kolkata",
      style: { color: "red" },
      stateCode: "WB",
      countryCode: "IN",
    },
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
      const selected = states.find((s) => s.state === selectedState);
      if (!selected) return;
      const { city, stateCode, countryCode } = selected;
      const geoData = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city},${stateCode},${countryCode}&limit=5&appid=98c58b33527d3b8c6006337a52a48f`
      );
      console.log("geoData[0]:", geoData[0]);

      if (!geoData || geoData.length === 0) {
        setWeather(null);
        return;
      }
      const { lat, lon } = geoData[0];
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=98c58b33527d3b8c6006337a52a48f`
      );
      const weatherData = await weatherRes.json();

      if (weatherData && weatherData.main && weatherData.wind) {
        setWeather({
          temp: weatherData.main.temp,
          humidity: weatherData.main.humidity,
          wind: weatherData.wind.speed,
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
                value={selectedState}
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
