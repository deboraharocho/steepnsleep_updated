import React, { useState } from "react";

const UserInputField = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  // Handle changes and prevent malicious input
  const handleChange = (e) => {
    let sanitizedValue = e.target.value.replace(/[^a-zA-Z0-9\s]/g, ""); // Allow only letters, numbers, and spaces
    setInputValue(sanitizedValue);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      onSubmit(inputValue);
      setInputValue(""); // Clear input field after submission
    } else {
      alert("Please enter a valid text.");
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <label>Enter Note: </label>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type your note here..."
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UserInputField;
