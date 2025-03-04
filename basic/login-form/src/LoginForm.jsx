import React, { useState } from "react";
import "./LoginForm.css"; // Import the external CSS file
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage("Please fill out both fields.");
      return;
    }

    // Simulated login logic
    if (email === "manu.com" && password === "manpreet123") {
      setErrorMessage("");
      alert("Login successful!");
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
