const apiKey = "600d0fd9740296eff52816c58fa120fe";
// var city =  prompt("Enter a city name:"); // Replace with the name of the city you want to get the weather for

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(`Current temperature in ${city} is: ${data.main.temp} Kelvin`);
//   })
//   .catch(error => console.error(error));

var gender; // base this off of which gender box is checked and set to string "feminine" or "masucline"
var aesthetic; //set to string of whichever aest was inputed 
var city; 
var state; 
var temp; 


//buttons stuff 
const submitbutt = document.getElementById("subbutt");
submitbutt.addEventListener("click", submitForm);

function submitForm(){
  var loc = document.getElementById("inputBox").value.toString();
  city = loc.substring(0, loc.indexOf(","));
  state= loc.substring(loc.indexOf(",")+1);

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
  console.log(city); 
  console.log(state); 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},US&appid=${apiKey}`;
  console.log(gender + city + aesthetic + "yay it worked");
  //getting data from api 
  fetch(url)
    .then(response => response.json())
    .then(data => {const resultElement = document.getElementById("result");
    temp = ${data.main.temp} 
    resultElement.textContent = `Current temperature in ${city}, ${state} is: ${data.main.temp} Kelvin. The weather is ${data.weather[0].description}`;
    })
    .catch(error => console.error(error));

  
    //replaceing images 
    if(gender=="fem" ){
      if(temp > 298){
        //hot 
        if(aesthetic == "street"){
          var image = document.getElementById("1");
          image.src = "/photos/streetfemhot/";
        }
        if(aesthetic == "costal"){
          var image = document.getElementById("2");
          image.src = "/photos/streetfemhot/";
        }
        if(aesthetic == "basic"){
          var image = document.getElementById("3");
          image.src = "/photos/streetfemhot/";
        }
      }
      else if(temp> 273){
        //mild 
        if(aesthetic == "street"){
          var image = document.getElementById("1");
          image.src = "/photos/streetfemhot/";
        }
        if(aesthetic == "costal"){
          var image = document.getElementById("2");
          image.src = "/photos/streetfemhot/";
        }
        if(aesthetic == "basic"){
          var image = document.getElementById("3");
          image.src = "/photos/streetfemhot/";
        }
      }
      else{
        //cold 
        if(aesthetic == "street"){
          var image = document.getElementById("1");
          image.src = "/photos/streetfemhot/";
        }
        if(aesthetic == "costal"){
          var image = document.getElementById("2");
          image.src = "/photos/streetfemhot/";
        }
        if(aesthetic == "basic"){
          var image = document.getElementById("3");
          image.src = "/photos/streetfemhot/";
        }
      }
    }
    else {
      //masc
      if(temp > 298){
        //hot 
        if(aesthetic == "street"){
          var image = document.getElementById("1");
          image.src = "/photos/streetfemhot/";
        }
        if(aesthetic == "costal"){
          var image = document.getElementById("2");
          image.src = "/photos/streetfemhot/";
        }
        if(aesthetic == "basic"){
          var image = document.getElementById("3");
          image.src = "/photos/streetfemhot/";
        }
      }
      else if(temp> 273){
        //mild 
        if(aesthetic == "street"){
          var image = document.getElementById("1");
          image.src = "/photos/streetfemhot/";
        }
        if(aesthetic == "costal"){
          var image = document.getElementById("2");
          image.src = "/photos/streetfemhot/";
        }
        if(aesthetic == "basic"){
          var image = document.getElementById("3");
          image.src = "/photos/streetfemhot/";
        }
      }
      else{
        //cold 
        if(aesthetic == "street"){
          var image = document.getElementById("1");
          image.src = "/photos/streetfemhot/";
        }
        if(aesthetic == "costal"){
          var image = document.getElementById("2");
          image.src = "/photos/streetfemhot/";
        }
        if(aesthetic == "basic"){
          var image = document.getElementById("3");
          image.src = "/photos/streetfemhot/";
        }
      }

    }

}

