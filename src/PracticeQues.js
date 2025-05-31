import { useState, useEffect } from "react";

const PracticeQues = () => {
  const [count1, setCount1] = useState(0);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submittedData, setSubmittedData] = useState(null);

  const handleToggle = () => {
    setShow((prev) => !prev);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: "", email: "" });
  };

  const add = () => {
    setCount1((prev) => prev + 1);
  };

  const subtract = () => {
    setCount1((prev) => prev - 1);
  };

  const reset = () => {
    setCount1(0);
  };

  useEffect(() => {
    console.log("Component mounted or count1 changed:", count1);
  }, [count1]);

  return (
    <>
      {show && <p>This is a counter app: click on the button to show/hide.</p>}
      <button onClick={handleToggle}>{show ? "Hide" : "Show"} Paragraph</button>

      <table style={{ borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr>
            <th colSpan="4" style={{ textAlign: "center" }}>
              Counter
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ textAlign: "center" }}>
            <td>Count: {count1}</td>
            <td>
              <button onClick={add}>Add</button>
            </td>
            <td>
              <button onClick={subtract}>Subtract</button>
            </td>
            <td>
              <button onClick={reset}>Reset</button>
            </td>
          </tr>
        </tbody>
      </table>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" style={{ marginTop: "15px" }}>
          Submit
        </button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data:</h3>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
        </div>
      )}
    </>
  );
};

export default PracticeQues;
