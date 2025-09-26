const gallery = document.getElementById("gallery");

window.addEventListener('mousemove',(e) => {
  const mouseX = e.clientX,
  mouseY = e.clientY;

const xDecimal = mouseX / window.innerWidth,
  yDecimal = mouseY / window.innerHeight;

const maxX = gallery.offsetWidth - window.innerWidth +300,
  maxY = gallery.offsetHeight - window.innerHeight+300 ;

const panX = maxX * xDecimal * -1,
  panY = maxY * yDecimal * -1;

gallery.animate({
transform: `translate(${panX}px, ${panY}px)`
}, {
duration: 4000,
fill: "forwards",
easing: "ease"
})
})

window.addEventListener('mousemove',(e) => {
  const dot = document.querySelector('.dot');
  const dream = document.querySelector('.dream-section');
  dream.addEventListener('mouseenter',()=>{
    dot.style.backgroundColor = 'white';
  })
  dream.addEventListener('mouseleave',()=>{
    dot.style.backgroundColor = 'black';
  })
  const mouseX = e.clientX,
        mouseY = e.clientY;

dot.animate({
transform: `translate(${mouseX-10}px, ${mouseY-10}px)`

}, {
duration: 500,
fill: "forwards",
easing: "ease"
})
})




document.addEventListener("DOMContentLoaded", ()=>{

      const button = document.querySelector(".close-button");

      if(button){
            button.addEventListener("click",()=>{
                  button.closest(".notification").style.display = "none";
            }
            )
      } else{
            console.log("something went wrong");
      }
});

/// Dream section 
document.addEventListener('DOMContentLoaded',()=>{
    const dream = document.querySelector('.dreamzz');


  dream.addEventListener('click',()=>{
    console.log("clicked");
    dreamSection.classList.toggle('running');
  })

})


// weather fetch function ////////////////////////

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "068bf76117f8d0a0f7dc758a267a8afd";

weatherForm.addEventListener("submit",async event =>{
  event.preventDefault();

  const city = cityInput.value;
  cityInput.value ="";

  if(city){
      try{
        const weatherData = await getWeather(city);
        console.log(weatherData);
        displayWeather(weatherData);
      }catch(error){
        displayError(error.message);
      }
  }
  else{
    displayError("please enter a city name");
  }


});

async function getWeather(city){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(url);
  if(!response.ok){
    throw new Error("could not fetch");
  }
  const data = await response.json();

  return data;
}

function displayWeather(data){
 const {name: city, 
        main:{temp,humidity},
        weather :[{description , id}]} = data;

        card.textContent = "";
        card.style.display = "flex";

        const cityName = document.createElement("h1");
        const tempDisplay = document.createElement("p");
        const humidityDisplay = document.createElement("p");
        const descDisplay = document.createElement("p");
        const emoji = document.createElement("p");

        cityName.textContent = city;
        tempDisplay.textContent = `${temp.toFixed(1)} ° C`;
        humidityDisplay.textContent = `Humidity: ${humidity}%`;
        descDisplay.textContent = description;
        emoji.textContent = displayEmoji(id);


        cityName.classList.add("cityDisplay");
        tempDisplay.classList.add("descDisplay");
        humidityDisplay.classList.add("humidDisplay");
        descDisplay.classList.add("cityDisplay");
        emoji.classList.add("emoji");

        card.appendChild(cityName);
        card.appendChild(tempDisplay);
        card.appendChild(humidityDisplay);
        card.appendChild(descDisplay);
        card.appendChild(emoji);

}

function displayEmoji(weatherId){

  switch(true){
    case (weatherId >= 200 && weatherId < 300):
      return "⛈️";
    case (weatherId >= 300 && weatherId < 400):
      return "⛈️";
    case (weatherId >= 500 && weatherId < 600):
      return "⛈️";
    case (weatherId >= 600 && weatherId < 700):
      return "❄️";
    case (weatherId >= 700 && weatherId < 800):
      return "😶‍🌫️";
    case (weatherId === 800):
      return"☀️";
    case (weatherId >= 801 && weatherId < 810):
      return "☁️";
    default:
      return "⁉️";
  }

}
function displayError(message){
  const errordisplay = document.createElement("p");
  errordisplay.textContent = message;
  errordisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errordisplay);

}
