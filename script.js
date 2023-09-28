const cityNameInput = document.querySelector("#city-name");
const getWeatherButton = document.querySelector("#get-weather");
const weatherInfoDiv = document.querySelector(".weather-info");

getWeatherButton.addEventListener("click", function () {
    const cityName = cityNameInput.value;

    // Fetch the weather data for the specified city
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7c4fc3ea40e0ec075e690ae62c69d253`)
        .then(response => response.json())
        .then(data => {
            // Display the weather information
            weatherInfoDiv.querySelector("#city").textContent = data.name;
            weatherInfoDiv.querySelector("#temperature").textContent = `${Math.round(data.main.temp - 273.15)}°C`;
            weatherInfoDiv.querySelector("#weather-description").textContent = data.weather[0].description;
            weatherInfoDiv.querySelector("#weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        });
});