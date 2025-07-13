Step 1: Install Node.js from https://nodejs.org if it is not already installed.

Step 2: Open terminal or command prompt and create a new React project by running:
npx create-react-app weather-app

Step 3: Navigate to the project folder:
cd weather-app

Step 4: Inside the src folder, create a new folder called components, and inside it, create a file named WeatherCard.js.

Step 5: Open the App.js file and replace its content with the React code that fetches weather data using the OpenWeatherMap API and displays city, temperature, humidity, description, and an icon.

Step 6: In WeatherCard.js, write the code to display the weather result using props passed from App.js.

Step 7: In the root of your project folder, create a file named .env and paste your API key like this (no quotes):
REACT_APP_WEATHER_API_KEY=your_api_key_here

Step 8: Get your API key by signing up at https://openweathermap.org/api, logging in, and copying your key from the API keys section.

Step 9: Open the terminal and install all required dependencies by running:
npm install

Step 10: Start the app using the command:
npm start

Step 11: The app will open in your browser at http://localhost:3000. Enter a city name, click the button, and it will show the weather details. If the city is invalid, an error message will appear. While fetching, a loading message will be shown.

Step 12: For styling, edit the App.css file to include background design, card layout, input styling, and error message styles.

Step 13: The app is now ready. It includes React hooks (useState), functional components, API fetch, .env file usage, and proper error handling.
