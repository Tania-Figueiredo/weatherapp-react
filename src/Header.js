import React from "react";
import logo from "./images/logo.png";

export default function Header({ onCityChange }) {
  function handleSubmit(event) {
    event.preventDefault();
    const input = event.target.elements.city.value.trim();
    if (input.length >= 2) {
      onCityChange(input);
    }
  }

  return (
    <header>
      <div className="header-left">
        <img src={logo} alt="FreshStart Dev Logo" className="logo" />
      </div>
      <div className="header-right">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            name="city"
            placeholder="Enter a city..."
            required
            minLength="2"
            aria-label="Enter city name"
          />
          <input type="submit" value="Search" />
        </form>
      </div>
      <button
        className="dark-mode-toggle"
        id="dark-mode-toggle"
        aria-label="Toggle dark mode"
      >
        Dark Mode
      </button>
    </header>
  );
}
