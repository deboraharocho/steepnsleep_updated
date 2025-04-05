
import React, { useState } from 'react';
import CaffeineChart from './components/CaffeineChart';
import './App.css';

function App() {
  const [caffeineData, setCaffeineData] = useState([]);
  const [date, setDate] = useState('');
  const [drink, setDrink] = useState('');
  const [caffeine, setCaffeine] = useState('');

  const handleAddDrink = () => {
    if (date && caffeine) {
      setCaffeineData(prev => [
        ...prev,
        { date, drink, caffeine: parseInt(caffeine) }
      ]);
      setDrink('');
      setCaffeine('');
    }
  };

  return (
    <div className="App">
      <h1>SteepNSleep</h1>
      <h2>Track your caffeine intake and rest easy</h2>

      <div>
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Drink name"
          value={drink}
          onChange={e => setDrink(e.target.value)}
        />
        <input
          type="number"
          placeholder="Caffeine (mg)"
          value={caffeine}
          onChange={e => setCaffeine(e.target.value)}
        />
        <button onClick={handleAddDrink}>Add Drink</button>
      </div>

      <CaffeineChart data={caffeineData} />
    </div>
  );
}

export default App;
