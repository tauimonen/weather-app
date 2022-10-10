fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid=682fdba59048a13bd9389478126db765"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    const data = response;
    const t = data.main.temp;
    displayTemp(t);
 
  });

const displayTemp = (t) => {
    const tempC = t - 273.15;
    const displayTemp = Math.round(tempC * 10) / 10
    console.log(displayTemp);
    const displayTemperature = document.querySelector('#celsius');
    displayTemperature.innerHTML = displayTemp + '&deg;C';
}


