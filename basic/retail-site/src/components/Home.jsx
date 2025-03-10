import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();
  
    return (
      <div className="home-container">
        <h2>Welcome to the Retail App</h2>
        <p>Manage your shopping with ease. Please sign up or log in to continue.</p>
        <button onClick={() => navigate("/signup")}>Sign Up</button>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
    );
  };
  
  export default Home;