import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Main({ city }) {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [description, setDescription] = useState("");
  const [iconUrl, setIconUrl] = useState("");
  const [forecast, setForecast] = useState([]);

  const apiKey = "9f54b409ed45da3co73e59fb34ea8t3b";

  useEffect(() => {
    if (city) {
      searchCity(city);
      updateDate();
    }
  }, [city]);

  function updateDate() {
    const now = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = days[now.getDay()];
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");

    const currentDateElement = document.getElementById("current-date");
    if (currentDateElement) {
      currentDateElement.innerHTML = `${day} ${hours}:${minutes}`;
    }
  }

  function searchCity(cityName) {
    const currentUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;
    axios.get(currentUrl).then((response) => {
      setTemperature(Math.round(response.data.temperature.current));
      setHumidity(response.data.temperature.humidity);
      setWind(Math.round(response.data.wind.speed));
      setDescription(response.data.condition.description);
      setIconUrl(response.data.condition.icon_url);
    });

    const forecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${cityName}&key=${apiKey}&units=metric`;
    axios.get(forecastUrl).then((response) => {
      setForecast(response.data.daily.slice(1, 6));
    });
  }

  function formatDay(timestamp) {
    const date = new Date(timestamp * 1000);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
  }

  return (
    <main>
      <time className="date" id="current-date"></time>

      <section className="current-weather">
        <div className="weather-box">
          <div className="weather-left">
            <h1 id="current-city">{city}</h1>
            <p className="temperature" id="temperature">
              {temperature !== null ? `${temperature}°` : "--"}
            </p>
          </div>
          <div className="weather-center">
            {iconUrl && (
              <img className="weather-icon" src={iconUrl} alt={description} />
            )}
          </div>
          <div className="weather-right">
            <p id="description">{description}</p>
            <p>
              Humidity: <span id="humidity">{humidity}%</span>
            </p>
            <p>
              Wind: <span id="wind">{wind} km/h</span>
            </p>
          </div>
        </div>
      </section>

      <hr />

      <section className="forecast">
        <p className="forecast-title">5-Day Forecast</p>
        <ul className="forecast-list">
          {forecast.map((day, index) => (
            <li key={index}>
              <h3>{formatDay(day.time)}</h3>
              <img
                src={day.condition.icon_url}
                alt={day.condition.description}
                width="48"
              />
              <p className="forecast-temperature">
                {Math.round(day.temperature.maximum)}°
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
