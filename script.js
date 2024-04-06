let inputBox = document.getElementById("inputBox");
let searchBtn = document.getElementById("search-btn");
let weather_img = document.getElementById("weatherImg");
let temp  = document.getElementById("temperature")
let des  = document.getElementById("description")
let humidity = document.getElementById("humidity");
let speed = document.getElementById("speed");
let location_not_found = document.querySelector("#location-not-found");
let weather_body = document.querySelector(".weather_body");




async function checkWeather(city){
    const apikey = "2782a85937e0ad151f6c2a7c40b2e70e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    const weather_data = await fetch(`${url}`).then
    (response => response.json());
    // console.log(weather_data);

    if(weather_data.cod === '404'){
        location_not_found.style.display = 'flex';
        weather_body.style.display = 'none';
        // console.log("error");
        return;
    }

    location_not_found.style.display = 'none';
    weather_body.style.display = 'flex';
    temp.innerHTML = `${Math.round(weather_data.main.temp - 
    273.15)}<sup>°C</sup>`;

    des.innerHTML = `${weather_data.weather[0].description}`

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    speed.innerHTML = `${weather_data.wind.speed}Km/H`

    switch(weather_data.weather[0].main){
        case 'Clouds' : 
        weather_img.src = "assets/cloud.png";
        break;
        case 'Clear' : 
        weather_img.src = "assets/clear.png";
        break;
        case 'Mist' : 
        weather_img.src = "assets/mist.png";
        break;
        case 'snow' : 
        weather_img.src = "assets/snow.jpg";
        break;
        case 'Rain' : 
        weather_img.src = "assets/rain.png";
        break;

    }



}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
})
