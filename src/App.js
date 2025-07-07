import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const apiKey = "8c78e9e7e9928cd1a2a6f923072c3dec";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then((response) => {
      setTemperature(response.data.main.temp);
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <h1>Weather App</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={updateCity}
        />
        <button type="submit">Search</button>
      </form>

      {temperature !== null && (
        <h2>
          The temperature in {city} is {Math.round(temperature)}°C
        </h2>
      )}
    </div>
  );
}
