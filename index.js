const apiKey= "ff5283661ccfe756dd657ca2c50bc355";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function chechWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);


}

chechWeather();