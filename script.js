let now = new Date();
let h3 = document.querySelector("h3");

let hours = now.getHours();
let minutes = now.getMinutes();
let dateToday = now.getDate();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

dates.innerHTML = ` ${day} ${dateToday} ${month}
${hours}: ${minutes} `;

function displayWeatherCondition(response) {
  console.log(response);
  document.querySelector("#city-name").innerhtml = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${response.data.name}`;
  console.log(temperature);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}°C`;

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity:${response.data.main.humidity}%`;
  document.querySelector("#temperature-description").innerHTML =
    response.data.weather[0].main;
  let wind = document.querySelector("#wind");
  wind.innerHTML = `Wind:${response.data.wind.speed} km/h`;
}

function search(event) {
  event.preventDefault();
  let apiKey = "2672779dd04931dc0259289fbe9db665";
  let city = document.querySelector("#search-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function showPosition(position) {
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${position.coords.latitude},${position.coords.longitude}`;
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
