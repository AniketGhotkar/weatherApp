# Weather App

**WeatherApp** is a simple weather application that fetches real-time weather data from the OpenWeatherMap API based on the user's location or search input. The app provides weather details such as temperature, humidity, wind speed, and cloudiness. The user can either grant location access or search for a specific city.

## Features:
- **Automatic Location Detection**: Uses the browser's geolocation feature to fetch the weather based on the user's current location.
- **City Search**: Allows the user to search for weather by typing the city name.
- **Weather Details**: Displays city name, country flag, temperature, weather description, wind speed, humidity, and cloudiness.
- **Responsive Design**: Optimized for both mobile and desktop screens.

## Tech Stack:
- **HTML**: For structuring the content.
- **CSS**: For styling the application with a clean and simple design.
- **JavaScript**: For dynamic features like fetching weather data and interacting with the DOM.
- **OpenWeatherMap API**: For fetching real-time weather data.

## Installation:
To run the project locally on your machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/AniketGhotkar/weatherApp.git
Navigate to the project directory:

bash
Copy
Edit
cd devDetective
Open the index.html file in your browser.

Usage:
Grant Location Access: The app will prompt the user to grant location access to fetch the weather for their current location.
Search for City: The user can also manually enter a city name to get the weather data for that location.

Example of Weather Data:
The app will show the following weather details:
City name
Country flag
Weather description
Temperature (°C)
Wind speed (m/s)
Humidity (%)
Cloudiness (%)

How it works:
When the user grants location access, the app fetches weather data using the latitude and longitude coordinates.
If the user searches for a city, the app fetches weather data based on the city name.
The app updates the UI with the relevant weather information after fetching the data from the API.

Folder Structure:
index.html: Main HTML file containing the structure of the app.
script.js: JavaScript file that contains the logic for fetching weather data and handling user interactions.
style.css: CSS file that contains the styling for the weather app.
loading.png: Image used as a loading indicator.
searchimage.png: Image used as the search button icon.

API Documentation:
The app uses the OpenWeatherMap API to fetch weather data. You can sign up for a free API key here.

API endpoint for current weather data:
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}&units=metric

Replace {lat}, {lon}, and {API_KEY} with your latitude, longitude, and API key respectively.
