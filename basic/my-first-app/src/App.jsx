import React, { useState } from 'react';

import './App.css';

function App() {
  // useState hook to manage state
  const [count, setCount] = useState(0);

  // Function to increment count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      
        <p>You clicked {count} times</p>
        <button onClick={incrementCount}>Click me</button>
     
    </div>
  );
}

export default App;
