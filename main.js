const apiKey = "600d0fd9740296eff52816c58fa120fe";

var gender; // base this off of which gender box is checked and set to string "feminine" or "masucline"
var aesthetic; //set to string of whichever aest was inputed 
var city; 
var state; 
var temp;
var image1;
var image2;
var image3;


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
    resultElement.textContent = `Current temperature in ${city}, ${state} is: ${data.main.temp} Kelvin. The weather is ${data.weather[0].description}`;
    temp = data.main.temp;
    console.log(temp); 
    //replaceing images 
   if(gender=="fem" ){
    if(temp > 298){
      //hot 
      if(aesthetic == "street"){
        image1= document.getElementById("1");
        image1.src = "/photos/streetfemhot/Screenshot 2023-05-28 001113.png";
        image2= document.getElementById("2");
        image2.src = "/photos/streetfemhot/Screenshot 2023-05-28 001128.png";
        image3 = document.getElementById("3");
        image3.src = "/photos/streetfemhot/Screenshot 2023-05-28 001144.png";
      }
      if(aesthetic == "coastal"){
        image1= document.getElementById("1");
        image1.src = "/photos/coastalfemhot/Screenshot 2023-05-27 232907.png";
        image2= document.getElementById("2");
        image2.src = "/photos/coastalfemhot/Screenshot 2023-05-27 232927.png";
        image3 = document.getElementById("3");
        image3.src = "/photos/coastalfemhot/Screenshot 2023-05-27 233243.png";
      }
      if(aesthetic == "basic"){
        image1= document.getElementById("1");
        image1.src = "/photos/basicfemhot/Screenshot 2023-05-28 004723.png";
        image2= document.getElementById("2");
        image2.src = "/photos/basicfemhot/Screenshot 2023-05-28 004733.png";
        image3 = document.getElementById("3");
        image3.src = "/photos/basicfemhot/Screenshot 2023-05-28 004745.png";
      }
    }
    else if(temp> 273){
      //mild 
      if(aesthetic == "street"){
        image1= document.getElementById("1");
        image1.src = "/photos/streetfemmild/Screenshot 2023-05-28 000919.png";
        image2= document.getElementById("2");
        image2.src = "/photos/streetfemmild/Screenshot 2023-05-28 000934.png";
        image3 = document.getElementById("3");
        image3.src = "/photos/streetfemmild/Screenshot 2023-05-28 000952.png";
      }
      if(aesthetic == "coastal"){
        image1= document.getElementById("1");
        image1.src = "/photos/coastalfemmild/Screenshot 2023-05-28 002931.png";
        image2= document.getElementById("2");
        image2.src = "/photos/coastalfemmild/Screenshot 2023-05-28 002948.png";
        image3 = document.getElementById("3");
        image3.src = "/photos/coastalfemmild/Screenshot 2023-05-28 003006.png";
      }
      if(aesthetic == "basic"){
        image1= document.getElementById("1");
        image1.src = "/photos/basicfemmild/Screenshot 2023-05-28 004836.png";
        image2= document.getElementById("2");
        image2.src = "/photos/basicfemmild/Screenshot 2023-05-28 004901.png";
        image3 = document.getElementById("3");
        image3.src = "/photos/basicfemmild/Screenshot 2023-05-28 004915.png";
      }
    }
    else{
      //cold 
      if(aesthetic == "street"){
        image1= document.getElementById("1");
        image1.src = "/photos/streetfemcold/Screenshot 2023-05-28 003244.png";
        image2= document.getElementById("2");
        image2.src = "/photos/streetfemcold/Screenshot 2023-05-28 003257.png";
        image3 = document.getElementById("3");
        image3.src = "/photos/streetfemcold/Screenshot 2023-05-28 003312.png";
      }
      if(aesthetic == "coastal"){
        image1= document.getElementById("1");
        image1.src = "/photos/coastalfemcold/Screenshot 2023-05-28 003106.png";
        image2= document.getElementById("2");
        image2.src = "/photos/coastalfemcold/Screenshot 2023-05-28 003126.png";
        image3 = document.getElementById("3");
        image3.src = "/photos/coastalfemcold/Screenshot 2023-05-28 003138.png";
      }
      if(aesthetic == "basic"){
        image1= document.getElementById("1");
        image1.src = "/photos/basicfemcold/Screenshot 2023-05-28 005010.png";
        image2= document.getElementById("2");
        image2.src = "/photos/basicfemcold/Screenshot 2023-05-28 005023.png";
        image3 = document.getElementById("3");
        image3.src = "/photos/basicfemcold/Screenshot 2023-05-28 005037.png";
      }
    }
  }
  else {
    //masc
    if(temp > 298){
      //hot 
      if(aesthetic == "street"){
        image1= document.getElementById("1");
        image1.src = "/photos/streetmalehot/Screenshot 2023-05-28 003543.png";
        image2= document.getElementById("2");
        image2.src = "/photos/streetmalehot/Screenshot 2023-05-28 003552.png";
        image3 = document.getElementById("3");
        image3.src = "/photos/streetmalehot/Screenshot 2023-05-28 003604.png";
      }
      if(aesthetic == "coastal"){
        image1= document.getElementById("1");
        image1.src = "/photos/coastalmalehot/Screenshot 2023-05-28 003818.png";
        image2= document.getElementById("2");
        image2.src = "/photos/coastalmalehot/Screenshot 2023-05-28 003829.png";
        image3 = document.getElementById("3");
        image3.src = "/photos/coastalmalehot/Screenshot 2023-05-28 003840.png";
      }
      if(aesthetic == "basic"){
        image1= document.getElementById("1");
        image1.src = "/photos/basicmalehot/Screenshot 2023-05-28 004549.png";
        image2= document.getElementById("2");
        image2.src = "/photos/basicmalehot/Screenshot 2023-05-28 004559.png";
        image3 = document.getElementById("3");
        image3.src = "/photos/basicmalehot/Screenshot 2023-05-28 004610.png";
      }
    }
    else if(temp> 273){
      //mild 
      if(aesthetic == "street"){
        image1= document.getElementById("1");
        image1.src = "/photos/streetmalemild/Screenshot 2023-05-28 004112.png";
        image2= document.getElementById("2");
        image2.src = "/photos/streetmalemild/Screenshot 2023-05-28 004122.png";
        image3 = document.getElementById("3");
        image3.src = "/photos/streetmalemild/Screenshot 2023-05-28 004134.png";
      }
      if(aesthetic == "coastal"){
        image1= document.getElementById("1");
        image1.src = "/photos/coastalmalemild/Screenshot 2023-05-28 003412.png";
        image2= document.getElementById("2");
        image2.src = "/photos/coastalmalemild/Screenshot 2023-05-28 003422.png";
        image3 = document.getElementById("3");
        image3.src = "/photos/coastalmalemild/Screenshot 2023-05-28 003434.png";
      }
      if(aesthetic == "basic"){
        image1= document.getElementById("1");
        image1.src = "/photos/basicmalemild/Screenshot 2023-05-28 004430.png";
        image2= document.getElementById("2");
        image2.src = "/photos/basicmalemild/Screenshot 2023-05-28 004442.png";
        image3 = document.getElementById("3");
        image3.src = "/photos/basicmalemild/Screenshot 2023-05-28 004457.png";
      }
    }
    else{
      //cold 
      if(aesthetic == "street"){
        image1= document.getElementById("1");
        image1.src = "/photos/streetmalecold/Screenshot 2023-05-28 003959.png";
        image2= document.getElementById("2");
        image2.src = "/photos/streetmalecold/Screenshot 2023-05-28 004011.png";
        image3 = document.getElementById("3");
        image3.src = "/photos/streetmalecold/Screenshot 2023-05-28 004024.png";
      }
      if(aesthetic == "coastal"){
        image1= document.getElementById("1");
        image1.src = "/photos/coastalmalecold/Screenshot 2023-05-28 003654.png";
        image2= document.getElementById("2");
        image2.src = "/photos/coastalmalecold/Screenshot 2023-05-28 003706.png";
        image3 = document.getElementById("3");
        image3.src = "/photos/coastalmalecold/Screenshot 2023-05-28 003720.png";
      }
      if(aesthetic == "basic"){
        image1= document.getElementById("1");
        image1.src = "/photos/basicmalecold/Screenshot 2023-05-28 004220.png";
        image2= document.getElementById("2");
        image2.src = "/photos/basicmalecold/Screenshot 2023-05-28 004232.png";
        image3 = document.getElementById("3");
        image3.src = "/photos/basicmalecold/Screenshot 2023-05-28 004243.png";
      }
    }
  }

    })
    .catch(error => console.error(error));
  

  
   
}

