const apikey = "95d0a13156cf271f07aa846fa0d6f85a";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let weather = document.querySelector(".weatherimg");

const srchip = document.querySelector(".srchip");
const srchbtn = document.querySelector(".search-btn");

async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  let data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".degree").innerHTML =
    Math.round(data.main.temp) + " °c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

  if (data.weather[0].main == "Clouds") {
    weather.src = "clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weather.src = "clear,png";
  } else if (data.weather[0].main == "Dizzle") {
    weather.src = "dizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weather.src = "mist.png";
  } else if (data.weather[0].main == "Rain") {
    weather.src = "rain.png";
  } else if (data.weather[0].main == "Snow") {
    weather.src = "snow.png";
  }
}

addEventListener("click", () => {
  checkweather(srchip.value);
});
