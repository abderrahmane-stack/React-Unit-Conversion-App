import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('meters');
  const [toUnit, setToUnit] = useState('meters');
  const [result, setResult] = useState(null);

  const conversionRates = {
    meters: 1,
    kilometers: 0.001,
    centimeters: 100,
    millimeters: 1000,
    miles: 0.000621371,
    yards: 1.09361,
    feet: 3.28084,
    inches: 39.3701
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const convertedValue = (value * conversionRates[fromUnit]) / conversionRates[toUnit];
    setResult(`${value} ${fromUnit} = ${convertedValue.toFixed(4)} ${toUnit}`);
  };

  return (
    <div className="container">
      <h1>Unit Converter</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="value">Value:</label>
          <input
            type="number"
            id="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="from-unit">From:</label>
          <select id="from-unit" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
            <option value="meters">Meters</option>
            <option value="kilometers">Kilometers</option>
            <option value="centimeters">Centimeters</option>
            <option value="millimeters">Millimeters</option>
            <option value="miles">Miles</option>
            <option value="yards">Yards</option>
            <option value="feet">Feet</option>
            <option value="inches">Inches</option>
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="to-unit">To:</label>
          <select id="to-unit" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
            <option value="meters">Meters</option>
            <option value="kilometers">Kilometers</option>
            <option value="centimeters">Centimeters</option>
            <option value="millimeters">Millimeters</option>
            <option value="miles">Miles</option>
            <option value="yards">Yards</option>
            <option value="feet">Feet</option>
            <option value="inches">Inches</option>
          </select>
        </div>
        <button type="submit">Convert</button>
      </form>
      {result && <div id="result">{result}</div>}
    </div>
  );
}

export default App;
