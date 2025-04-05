import React, { useState } from "react";
import LogEntryButton from "./components/LogEntryButton";
import ClearEntryButton from "./components/ClearEntryButton";
import ViewSummaryButton from "./components/ViewSummaryButton";
import UserInputField from "./components/UserInputField"; // Import new component

const SteepNSleep = () => {
  const [date, setDate] = useState("");
  const [drink, setDrink] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [sleepHours, setSleepHours] = useState("");
  const [log, setLog] = useState([]);
  const [userNote, setUserNote] = useState(""); // Store user input

  const caffeineContent = {
    Coffee: 95,
    Tea: 47,
    EnergyDrink: 80,
    Soda: 30,
  };

  const handleLogEntry = () => {
    if (date && drink && quantity && sleepHours) {
      const caffeineIntake = caffeineContent[drink] * quantity;
      setLog([...log, { date, drink, quantity, caffeineIntake, sleepHours, note: userNote }]);
      alert(`Entry logged:\nDate: ${date}\nDrink: ${drink}\nQuantity: ${quantity}\nCaffeine: ${caffeineIntake} mg\nSleep: ${sleepHours} hours\nNote: ${userNote}`);
      setUserNote(""); // Clear the note after logging
    } else {
      alert("Please fill in all fields before logging an entry.");
    }
  };

  const handleClearEntry = () => {
    setDate("");
    setDrink("");
    setQuantity(1);
    setSleepHours("");
    setUserNote("");
  };

  const handleViewSummary = () => {
    console.log("Caffeine Log:", log);
    alert(`You have logged ${log.length} entries.`);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>SteepNSleep</h1>
      <h2>Track your caffeine intake and rest easy</h2>
      
      <label>Date: </label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <br /><br />
      
      <label>Drink Type: </label>
      <select value={drink} onChange={(e) => setDrink(e.target.value)}>
        <option value="">Select</option>
        {Object.keys(caffeineContent).map((key) => (
          <option key={key} value={key}>{key} ({caffeineContent[key]} mg)</option>
        ))}
      </select>
      <br /><br />
      
      <label>Quantity: </label>
      <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
      <br /><br />
      
      <label>Hours Slept: </label>
      <input type="number" min="0" max="24" value={sleepHours} onChange={(e) => setSleepHours(e.target.value)} />
      <br /><br />

      {/* New User Input Field Component */}
      <UserInputField onSubmit={setUserNote} />

      <br />
      
      <LogEntryButton onClick={handleLogEntry} />
      <ClearEntryButton onClick={handleClearEntry} />
      <ViewSummaryButton onClick={handleViewSummary} />
    </div>
  );
};

export default SteepNSleep;
