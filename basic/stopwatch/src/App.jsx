import React from "react";
import Stopwatch from "./Stopwatch";
import DarkModeToggle from "./DarkModeToggle";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <DarkModeToggle />
      <Stopwatch />
    </div>
  );
};

export default App;
