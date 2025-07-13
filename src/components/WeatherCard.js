import React from "react";

function WeatherCard({ data }) {
  const { name, main, weather } = data;
  const icon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img src={icon} alt={weather[0].description} />
      <p><strong>{weather[0].main}</strong> - {weather[0].description}</p>
      <p>🌡️ Temp: {main.temp}°C</p>
      <p>💧 Humidity: {main.humidity}%</p>
    </div>
  );
}

export default WeatherCard;
