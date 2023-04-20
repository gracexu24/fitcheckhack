const apiKey = "600d0fd9740296eff52816c58fa120fe"; // Replace with your actual API key
var city =  prompt("Enter a city name:"); // Replace with the name of the city you want to get the weather for

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(`Current temperature in ${city} is: ${data.main.temp} Kelvin`);
  })
  .catch(error => console.error(error));
