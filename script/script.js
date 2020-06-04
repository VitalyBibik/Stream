const config = {
    key:'e7e013145e8f764392b0517c2ab23d80'
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
            console.log(data,'data');
            weatherTitle.textContent = `Город: ${data.name}`;
            weatherTemp.textContent = `Темпмература: ${ Math.floor(data.main.temp - 272)}`;
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
    return  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.key}&lang=ru`)
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


buttonSearch.addEventListener('click', sendCity );