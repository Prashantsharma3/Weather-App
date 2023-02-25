function getWeather() {
  const city = document.getElementById("city").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Description: ${data.weather[0].description}</p>
      `;
      document.getElementById("popup-content").innerHTML = weather;
      document.getElementById("popup").style.display = "block";
    })
    .catch((error) => console.error(error));
}
