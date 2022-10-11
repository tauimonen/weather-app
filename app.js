// Dom elements
const btn = document.querySelector(".button");
const locationDisplay = document.getElementById("location");
const country = document.getElementById("country");
const displayTemperature = document.querySelector("#celsius");
const description = document.getElementById("description");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const weatherIcon = document.getElementById("weather-icon");
const genDescription = document.querySelector(".weather");

// Default location
let input = "Helsinki";
readData(input);

btn.addEventListener("click", function () {
  input = document.getElementById("input").value;
  readData(input);
});

async function readData(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=682fdba59048a13bd9389478126db765`
  );
  const data = await response.json();
  displayLocation(data.name);
  displayTemp(data.main.temp);
  displayCountry(data.sys.country);
  displayDescription("Weather now: " + data.weather[0].description);
  displayGenDescription(data.weather[0].description);
  displayWind("Wind speed: " + data.wind.speed + " m/s");
  displayHumidity("Humidity: " + data.main.humidity);
  displayWeatherIcon(data.weather[0].icon);
}

const displayTemp = (t) => {
  const tempC = t - 273.15;
  const displayTemp = Math.round(tempC * 10) / 10;
  
  displayTemperature.innerHTML = displayTemp + "&deg;C";
};

const displayLocation = (l) => {
  locationDisplay.innerHTML = l;
};

const displayDescription = (d) => {
  description.innerHTML = d;
  genDescription.innerHTML = d;
};

const displayGenDescription = (d) => {
  genDescription.innerHTML = d;
};

const displayCountry = (c) => {
  country.innerHTML = c;
};

const displayWind = (w) => {
  wind.innerHTML = w;
};

const displayHumidity = (h) => {
  humidity.innerHTML = h;
};

const displayWeatherIcon = (id) => {
  weatherIcon.setAttribute("src", `http://openweathermap.org/img/w/${id}.png`);
};
