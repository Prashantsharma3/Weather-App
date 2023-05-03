const apiKey = 'b81ffbf5d8010c43f2ec3c28def9e268';
const searchButton = document.querySelector('button');
const cityName = document.querySelector('#city-name');
const temperature = document.querySelector('#temperature');
const humidity = document.querySelector('#humidity');
const description = document.querySelector('#description');
const forecast = document.querySelector('#forecast');
const cityImage = document.querySelector('#city-image');
const weatherImage = document.querySelector('#weather-image');

function getWeather() {
  const cityInput = document.querySelector('#city').value;
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${cityInput}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Update the weather information
      cityName.textContent = data.location.name;
      temperature.textContent = `Temperature: ${data.current.temperature}°C`;
      humidity.textContent = `Humidity: ${data.current.humidity}%`;
      description.textContent = `Description: ${data.current.weather_descriptions[0]}`;
      forecast.textContent = `Feels like: ${data.current.feelslike}°C`;
      cityImage.src = data.current.weather_icons[0];
      weatherImage.src = data.current.weather_icons[0];

      // Check the weather condition and update the UI accordingly
      const isSunny = data.current.weather_descriptions[0].toLowerCase().includes('sunny');
      const isCloudy = data.current.weather_descriptions[0].toLowerCase().includes('cloudy');

      // Update the #weather-front background color
      if (isSunny) {
        document.querySelector('#weather-front').classList.add('sunny');
        document.querySelector('#weather-front').classList.remove('cloudy');
      } else if (isCloudy) {
        document.querySelector('#weather-front').classList.add('cloudy');
        document.querySelector('#weather-front').classList.remove('sunny');
      }
    })
    .catch(error => console.log(error));
}

searchButton.addEventListener('click', getWeather);
