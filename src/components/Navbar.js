// Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "lucide-react";
import { useTheme } from "../context/ThemeContext.js";  // Import useTheme hook
import "./Navbar.css";
import logo from "./logo.png";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { theme, toggleTheme } = useTheme(ThemeContext);  // Access theme and toggleTheme from context

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo clickable-logo" />
        </Link>
        <h1>
          <Link to="/" className="clickable-text">T&P Portal</Link>
        </h1>

        <ul className="navbar-options">
          {isAuthenticated && <li><Link to="/communities">Communities</Link></li>}
          {isAuthenticated && <li><Link to="/jobs">Jobs</Link></li>}
          <li><Link to="/stats">Stats</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        {/* Theme Toggle Button */}
        <button className="theme-toggle-button" onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>

        {isAuthenticated ? (
          <>
            {/* Profile Icon */}
            <Link to="/dashboard" className="profile-link">
              <User size={30} className="profile-icon" />
            </Link>

            {/* Logout Button */}
            <button className="logout-button" onClick={handleLogout}>
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="login-buttonld">Login</button>
            </Link>
            <Link to="/signup">
              <button className="signup-buttonld">Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
