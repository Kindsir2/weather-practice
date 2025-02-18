const apiKey = "1df095195f35222a797661adcc8cb1c0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector('.search');
const searchBtn = document.querySelector('.serch-button');
let weathericon = document.querySelector(".sun");

async function checkWeather(city) {
   const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   let data = await response.json();

   document.querySelector(".city").innerHTML= data.name;
   document.querySelector(".temp").innerHTML= Math.round(data.main.temp)  + "°c";
   document.querySelector(".humid-text").innerHTML= data.main.humidity+ "% Humidity";
   document.querySelector(".wind-text").innerHTML= data.wind.speed + " km/h Windspeed";

   if (data.sys.sunrise == 'Clouds') {
    weathericon.src = "images/cloudy.png"
  } else if (data.weather[0].main == 'Mist') {
    weathericon.src= "images/misty.png"
  } else if (data.weather[0].main == 'Clear') {
    weathericon.src= "images/clear.png"
  } else if (data.weather[0].main == 'Rain') {
    weathericon.src= "images/rain.png"
  } else if (data.weather[0].main == 'Drizzle') {
    weathericon.src= "images/drizzle.png"
  };
 
};

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);  

});






