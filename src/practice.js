import React, { useState } from 'react';

function getLocation(location) {
  return location ? location : 'Unknown';
}

function App() {
  const user = {
    name: 'Arpit Tripathi',
    age: 22,
    location: 'India',
  };

  const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
  };

  const square = (x) => x * x;

  const users = {
    name: 'Arpit',
    cities: ['Delhi', 'Mumbai', 'Bangalore']
  };

  const multiplier = { 
    numbers: [4, 8, 17],
    multiplyBy: 7,
    multiply() {
      return this.numbers.map((number) => number * this.multiplyBy);
    }
  };

  // ✅ Use state for options
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [visibility, setVisibility] = useState(false);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    if (option) {
      setOptions((prevOptions) => [...prevOptions, option]); // update state
      e.target.reset(); // clear input
    }
  };

  const onRemoveAll = () => {
    setOptions([]); // clear all options
  };

  const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * options.length);
    const option = options[randomNum];
    setSelected(option);
  }

  const toggleVisibility = () => {  
    setVisibility((prev) => !prev);
  };

  return (
    <div>
      <h1>{user.name ? user.name.split(' ')[0] : 'Guest'}!</h1>
      <p>Age: {user.age}</p>
      <p>Location: {getLocation(user.location)}</p>

      <h2>{app.title}</h2>
      {app.subtitle && <p>{app.subtitle}</p>}

      <h3>Visibility Toggle</h3>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (
        <p>These are some details you can see!</p>
      )}
      
      {/* ✅ Show number of options */}
      <p>{options.length > 0  ?  'Here are your options:' : 'No Options'}</p>
      <button disabled={options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      {selected && (
        <p>
          Suggested option: <strong>{selected}</strong>
        </p>
      )}
      <ol>
        {options.map((opt, index) => (
          <li key={index}>{opt}</li>
        ))}
      </ol>


      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>

      <p>Square of 3 is: {square(3)}</p>

      {/* Printing cities */}
      <div>
        {users.cities.map((city, index) => (
          <p key={index}>{users.name} has lived in {city}</p>
        ))}
      </div>

      <p>Multiplied Numbers: {multiplier.multiply().join(', ')}</p>
    </div>
  );
}

export default App;
