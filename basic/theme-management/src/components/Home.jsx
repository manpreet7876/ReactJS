import React from "react";
import { useTheme } from "../context/useTheme" 

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="container">
      <h1>Welcome to the {theme} theme!</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Home;
