import React, { useState } from "react";
import LoginForm from "./LoginForm";
import TodoApp from "./components/TodoApp";
import "./App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle successful login
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="app-container">
      <h1>Welcome to My React App</h1>
      {/* Show TodoApp if authenticated, else show LoginForm */}
      {isAuthenticated ? <TodoApp /> : <LoginForm onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
};

export default App;
