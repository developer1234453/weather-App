document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('weather-form');
    const resultDiv = document.getElementById('weather-result');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const city = document.getElementById('city').value;
      resultDiv.innerHTML = 'Loading...';
  
      try {
        const response = await fetch(`https://weather-info-backend-new.onrender.com/weather?city=${city}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
  
        if (data.error) {
          resultDiv.innerHTML = `<p>Error: ${data.error}</p>`;
        } else {
          resultDiv.innerHTML = `
            <p>Location: ${data.location}</p>
            <p>Temperature: ${data.temperature}°C</p>
            <p>Description: ${data.description}</p>
          `;
        }
      } catch (error) {
        resultDiv.innerHTML = `<p>Error fetching weather data. Please try again later.</p>`;
      }
    });
  });
  