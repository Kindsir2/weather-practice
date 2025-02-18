const apiKey = "1df095195f35222a797661adcc8cb1c0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search');
const searchBtn = document.querySelector('.serch-button');
const weatherIcon = document.querySelector(".sun");

async function checkWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        if (!response.ok) throw new Error("City not found");
        
        const data = await response.json();
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".humid-text").innerHTML = `${data.main.humidity}% Humidity`;
        document.querySelector(".wind-text").innerHTML = `${data.wind.speed} km/h Windspeed`;

        const weatherCondition = data.weather[0].main.toLowerCase();
        if (weatherCondition.includes("cloud")) {
            weatherIcon.src = "images/cloudy.png";
        } else if (weatherCondition.includes("mist")) {
            weatherIcon.src = "images/misty.png";
        } else if (weatherCondition.includes("clear")) {
            weatherIcon.src = "images/clear.png";
        } else if (weatherCondition.includes("rain")) {
            weatherIcon.src = "images/rain.png";
        } else if (weatherCondition.includes("drizzle")) {
            weatherIcon.src = "images/drizzle.png";
        } else {
            weatherIcon.src = "images/default.png"; 
        }
    } catch (error) {
        alert("City not found. Please try again.");
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value.trim());
});

searchBox.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value.trim());
    }
});
