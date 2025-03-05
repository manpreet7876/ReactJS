import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage("Please fill out both fields.");
      return;
    }

    // ✅ If credentials are correct, log in
    if (email === "manu.com" && password === "manpreet123") {
      setErrorMessage("");
      onLoginSuccess(); // Call function to render Todo List
    } else {
      setErrorMessage("Invalid credentials.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default LoginForm;
