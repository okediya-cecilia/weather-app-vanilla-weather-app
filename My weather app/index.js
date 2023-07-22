const apiKey = "f2a3c6239a67b0f60f690bbe099331c9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=Lagos";

async function checkWeather(){
    const response = await fetch (apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
}


checkWeather();