const API_KEY = "7f15ab1d9929c67b5cc9a3970541235f";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) =>{
            // const city = document.querySelector('#weather h4:first-child');
            // const weather = document.querySelector('#weather h4:last-child');
            // city.innerText = data.name;
            // weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;

            const temperature = document.querySelector('#weather h3:first-child');
            const weather = document.querySelector('#weather h4:last-child');
            temperature.innerText = `${data.main.temp} ℃`;
            weather.innerText = `${data.weather[0].main}`;
        })
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);