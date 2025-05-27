import React, { useState, useEffect } from "react";
import "./Students.css";
const StudentsData = ({ data = [] }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((e, idx) => (
              <th key={idx} style={{ border: "2px double white" }}>
                {e}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((std) => (
            <tr>
              <td>{std.name}</td>
              <td>{std.physics}</td>
              <td>{std.biology}</td>
              <td>{std.maths}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default StudentsData;
