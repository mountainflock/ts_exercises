// Find a weather API that your program can send HTTP requests to. At the time of writing, one such API is wttr.in.

// Send a request to the API to fetch weather data for your current time and location and parse the response.
// Find the current temperature, weather conditions, and other interesting details and display them on screen.
// Use your own judgement to decide what to include, based on what's provided by the API.

const response = await fetch("https://wttr.in/?format=j1");
const weather = await response.json();

const area = weather.nearest_area[0].areaName[0].value;
const country = weather.nearest_area[0].country[0].value;
const temperature = weather.current_condition[0].temp_C;
const feelsLike = weather.current_condition[0].FeelsLikeC;
const weatherDesc = weather.current_condition[0].weatherDesc[0].value;
const moonrise = weather.weather[0].astronomy[0].moonrise;
const moonset = weather.weather[0].astronomy[0].moonset;
const windSpeed = weather.current_condition[0].windspeedKmph;
const windSpeedMpS = Math.floor(parseInt(windSpeed) / 3.6);
const chanceOfSunshine = weather.weather[0].hourly[0].chanceofsunshine;

console.log(`Weather report: ${area}, ${country}`);
console.log();
console.log(`${temperature.startsWith("-") ? "-" : "+"}${temperature} °C`);
console.log(`Feels like: ${feelsLike[0] == "-" ? "-" : "+"}${feelsLike} °C`);
console.log(weatherDesc);
console.log(`Moonrise: ${moonrise}`);
console.log(`Moonset: ${moonset}`);
console.log(`Wind: ${windSpeedMpS} m/s`);
console.log(`Chance of sunshine: ${chanceOfSunshine}%`);
