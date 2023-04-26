// const apiKey = "600d0fd9740296eff52816c58fa120fe";
// var city =  prompt("Enter a city name:"); // Replace with the name of the city you want to get the weather for

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(`Current temperature in ${city} is: ${data.main.temp} Kelvin`);
//   })
//   .catch(error => console.error(error));


// Ok so first we're planning on using Google Images API to get our images, so our javascript function will return a string depending on multiple checks such as weather, 
// what buttons are checked in, and what outfit style they like (color? etc.)

var result; //string we will input into ai image generator
var gender; // base this off of which gender box is checked and set to string "feminine" or "masucline"
var aesthetic; //set to string of whichever aest was inputed 
var city; //to store location for now
var weather; // set to "freezing" "cold" "mild" "warm" "hot" based on kelvin of place 
//result = "Outfit for " + weather + " day with a" + gender + " " + style + " style"; 


//buttons stuff 
const submitbutt = document.getElementById("subbutt");
submitbutt.addEventListener("click", submitForm);

function submitForm(){
  var loc = document.getElementById("inputBox");
  city = loc.value;

  const styles = document.getElementsByName("style");
  for (let i = 0; i < styles.length; i++) {
    if (styles[i].checked) {
      gender = styles[i].value;
      break;
    }
  }
  const aest = document.getElementsByName("aesthetic");
  for (let i = 0; i < aest.length; i++) {
    if (aest[i].checked) {
      aesthetic = aest[i].value;
      break;
    }
  }

  console.log(gender + city + aesthetic + "yay it worked");
  return false;
}