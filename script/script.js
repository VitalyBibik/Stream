const config = {
    key:'e7e013145e8f764392b0517c2ab23d80'
};
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

/* html info  start */


const weatherTitle = document.querySelector('.weather__title');
const weatherTime = document.querySelector('.weather__time');
const weatherTemp = document.querySelector('.weather__temp');
const weatherPressure = document.querySelector('.weather__pressure');
const weatherWind = document.querySelector('.weather__wind');
const weatherType = document.querySelector('.weather__type');

/* html info end */

const formWeather = document.querySelector('.form__container'); // Form weather

const buttonSearch = document.querySelector('#search'); // button Search for Weather



function sendCity (event) {
    event.preventDefault();
    const inputValue = document.querySelector('#searchValue').value;
    getWeatherCity(inputValue)
        .then((data)=> {
            console.log(data,'data button input');
            weatherTitle.textContent = `Город: ${data.name}`;
            weatherTemp.textContent = `Темпмература: ${ Math.floor(data.main.temp)}`;
            weatherPressure.textContent = `Давление: ${data.main.pressure}`;
            weatherWind.textContent = `Скорость ветра: ${data.wind.speed} mph`;
            weatherType.textContent = `Тип погоды: ${data.weather[0]['description']}`;
        })
        .catch((err) => {
            console.log(err)
        });
    getTime(inputValue)
        .then((timeData) => {
            console.log(timeData)
            weatherTime.textContent = `Время:${timeData.datetime.slice(11,16)}`;
        })
        .catch((err) => {
            console.log(err)
        });
}


function getWeatherCity(city) {
    return  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${config.key}&lang=ru`)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Что то пошло не так ${res.status}`)
        })
        .catch((err) => {
            console.log(err);
        });
}

function getTime(city){

    return  fetch(`http://worldtimeapi.org/api/timezone/Europe/${city}`)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Что то пошло не так ${res.status}`)
        })
        .catch((err) => {
            console.log(err);
        });
}
// next code use in geolocation TODO

function getGeoWeather(lat,lon){
    return  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=RU&exclude=hourly,daily&appid=${config.key}`)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Что то пошло не так ${res.status}`)
        })
        .catch((err) => {
            console.log(err);
        });

}
function success(pos) {
    const crd = pos.coords;
    console.log('Ваше текущее метоположение:');
    console.log(`Широта: ${crd.latitude}`);
    console.log(`Долгота: ${crd.longitude}`);
    console.log(`Плюс-минус ${crd.accuracy} метров.`);
    getGeoWeather(crd.latitude, crd.longitude)
        .then((data) => {
          console.log('geolocation weather data', data);
            weatherTime.textContent = ''; // TODO need time
            weatherTitle.textContent = `Город: ${data.timezone}`;
            weatherTemp.textContent = `Темпмература: ${data.current.temp}`;
            weatherPressure.textContent = `Давление: ${data.current.pressure}`;
            weatherWind.textContent = `Скорость ветра: ${data.current.wind_speed} mph`;
            weatherType.textContent = `Тип погоды: ${data.current.weather[0]['description']}`;
        })
        .catch((err) => console.log(`Что то пошло не так с геолокацией ${err}`));
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);




// Слушатели
buttonSearch.addEventListener('click', sendCity );