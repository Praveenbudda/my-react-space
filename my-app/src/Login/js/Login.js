import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import logo from "../assets/logo192.png";
import config from "../../Config.json";

export default function Login() {
  const companyName = config.companyName;
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // simple check (later you can connect API)
    navigate("/dashboard"); 
  };

  return (
    <div className="login-container">
      {/* Header */}
      <header className="login-header">
        <img src={logo} alt="Company Logo" className="login-logo" />
        <h1 className="company-name">{companyName}</h1>
      </header>

      {/* Login Box */}
      <div className="login-box">
        <h3 className="login-title">{config.loginMessage}</h3>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username" className="login-input" />
          <input type="password" placeholder="Password" className="login-input" />
          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="register-text">
          Don’t have an account? <a href="/register">Register here</a>
        </p>
      </div>

      {/* Footer */}
      <footer className="login-footer">
        <p>© {new Date().getFullYear()} {companyName}. All Rights Reserved.</p>
        <p><a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a></p>
      </footer>
    </div>
  );
}
