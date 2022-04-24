let api = "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=baeaa9dd4ba7c67a06d7a1473c1dc31d"
let temp, humidity // data => main
let lat, long // data => coord
let weatherDesc // data => weather => [0] => description
let windSpeed // data => wind => speed

let heading = document.getElementById("ApiDataHtml")
let heading2 = document.getElementById("ApiDataHtml2")

fetch(api)
    .then(res => res.json())
    .then(data => {
        temp = data.main.temp;
        humidity = data.main.humidity;
        lat = data.coord.lat
        long = data.coord.lon
        weatherDesc = data.weather[0].description
        windSpeed = data.wind.speed

        console.log(temp, humidity, lat, long, weatherDesc, windSpeed);
        heading.innerHTML = "Temperature : " + temp
        heading2.innerHTML = "Humidity : " + humidity
    })
    .catch(error => console.log('ERROR'))
