Weather Information Service
Overview
The Weather Information Service is a web application that allows users to fetch and display current weather information based on their city or location. The application is built with a Node.js backend using Express and a simple frontend with HTML, CSS, and JavaScript.

Features
Fetches current weather data from an external API (Weatherbit API).
Displays weather information including location, temperature, and description.
Frontend built with plain HTML, CSS, and JavaScript.
Backend with Node.js and Express to handle weather data requests.
CORS enabled for frontend-backend communication.
Technologies Used
Frontend:
HTML
CSS
JavaScript
Backend:
Node.js
Express
Axios
CORS
API:
Weatherbit API
Getting Started
Prerequisites
Node.js and npm installed on your machine.
A Weatherbit API key (you can get one from Weatherbit).
Setup
Clone the Repository

bash
Copy code
git clone https://github.com/yourusername/weather-info-service.git
cd weather-info-service
Backend Setup

Navigate to the backend directory:

bash
Copy code
cd backend
Install the required npm packages:

bash
Copy code
npm install
Create a .env file in the backend directory and add your Weatherbit API key:

makefile
Copy code
WEATHERSTACK_API_KEY=your_api_key_here
Start the backend server:

bash
Copy code
npm start
Frontend Setup

Navigate to the frontend directory:

bash
Copy code
cd ../frontend
Open index.html in your preferred code editor (e.g., VS Code) and ensure the frontend code is pointing to your backend URL.

Testing

Open index.html in your web browser and use the form to enter a city name and fetch weather data.
Deployment
Backend: Deployed on Render.com (or any other hosting service of your choice).
Frontend: Deployed on Netlify, GitHub Pages, or any static site hosting service.
API Endpoints
GET /weather
Query Parameters:
city (required): The city name for which weather information is requested.
Response:
json
Copy code
{
  "location": "Raleigh",
  "temperature": 22.4,
  "description": "Scattered clouds"
}
Error Handling
Error 400: City is required.
Error 401: Invalid API key.
Error 503: No response from the weather service. Please try again later.
Error 500: An unexpected error occurred.
