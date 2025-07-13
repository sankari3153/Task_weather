# Simple Weather App

This is a basic React app that shows the current weather of any city. The user types a city name, and the app fetches weather data using the OpenWeatherMap API.

## Steps to Run

1. Install Node.js on your system.
2. Create the app using: `npx create-react-app weather-app`
3. Go into the project: `cd weather-app`
4. Create a `.env` file in the root and add:  
   `REACT_APP_WEATHER_API_KEY=your_api_key_here`
5. Get your API key from: https://openweathermap.org/api
6. Replace the code in `App.js`, create a `WeatherCard.js` inside `src/components`, and style using `App.css`.
7. Install dependencies: `npm install`
8. Run the app: `npm start`

The app will open in your browser at `http://localhost:3000`. Enter a city name to see the temperature, humidity, weather condition, and an icon. It also shows errors for invalid city names and a loading message while fetching.
