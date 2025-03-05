import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage("Please fill in both fields.");
      return;
    }

    if (email === "manu.com" && password === "manu123") {
      setIsLoggedIn(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid credentials. Try again!");
    }
  };

  return (
    <div className="login-container">
      {isLoggedIn ? (
        <h2>Welcome, {name}! 🎉</h2>
      ) : (
        <div className="login-box">
            <h2>Login</h2>
            <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
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
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      )}
    </div>
  )
}

export default App
