const btn = document.querySelector(".button")
const locationDisplay = document.getElementById('location');
const country = document.getElementById('country');
const description = document.getElementById('description');
const wind = document.getElementById('wind');
const humidy = document.getElementById('humidy');

let input = "Helsinki";
readData(input);

btn.addEventListener("click", function() {
    input = document.getElementById("input").value;
    console.log(input);
    readData(input);
})

function readData(location) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=682fdba59048a13bd9389478126db765`)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    const data = response;
    displayLocation(data.name);

    const t = data.main.temp;
    displayTemp(t);

    const country = data.weather[0].description;
    displayDescription()


  });
}

const displayTemp = (t) => {
    const tempC = t - 273.15;
    const displayTemp = Math.round(tempC * 10) / 10;
    const displayTemperature = document.querySelector('#celsius');
    displayTemperature.innerHTML = displayTemp + '&deg;C';
}

const displayLocation = (loc) => {
    locationDisplay.innerHTML = loc;
}

const displayDescription = (des) => {
    description.innerHTML = des;
}


