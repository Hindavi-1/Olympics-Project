import React from "react";
import "../styles/Navbar.css";
import logoImage from "/images/logo.png"; // Adjust path as needed

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <div className="logo-container">
        <img
          src={logoImage}
          alt="Olympic Platform Logo"
          className="logo-image"
        />
        <span className="logo-text">Olympic Platform</span>
      </div>
      <ul className="nav-links">
        <li className="nav-item">Home</li>
        <li className="nav-item">News</li>
        <li className="nav-item">
          Medal Prediction
          <Link to="/medal-predictions">Medal Prediction</Link>
        </li>
        <li className="nav-item">Data Visualization</li>
      </ul>
      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            aria-label="Search"
          />
          <button className="search-button">🔍</button>
        </div>
      </div>
      <div className="chat-container">
        <button className="chat-link">Chat with us</button>
      </div>
    </nav>
  );
};

export default NavigationBar;
