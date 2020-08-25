import '../pages/index.css'
import { options, keys } from './config'
import { weatherTitle, weatherTemp, weatherPressure, weatherWind, weatherType, weatherIcon, buttonSearch, buttonSearchGeo } from './doom'

// Показать изменения в верстке, дизайне, коде + сборщик

   function sendCity  (event) {
    event.preventDefault();
    const inputValue = document.querySelector('#searchValue').value;
    getWeatherCity(inputValue)
        .then((data)=> {
            weatherTitle.textContent = `Город: ${data.name}`;
            weatherTemp.textContent = `Темпмература: ${ Math.floor(data.main.temp)}`;
            weatherPressure.textContent = `Давление: ${data.main.pressure}`;
            weatherWind.textContent = `Скорость ветра: ${data.wind.speed} mph`;
            weatherType.textContent = `Тип погоды: ${data.weather[0]['description']}`;
            weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`
        })
        .catch((err) => {
            console.log(err)
        });
    // Код с изображением старт
    getPhoto(inputValue)
        .then((data) => {
            console.log(data);
        const min = 0;
        const max = 20;
        const lucky = Math.floor(Math.random() * (max - min) + min);
     //   const test = document.querySelector('.super');
     //   test.src = `${data['hits'][lucky]['largeImageURL']}`
       const test =  document.querySelector('.body-style');
       test.setAttribute('style', `background-image:url(${data['hits'][lucky]['largeImageURL']}`) ;
    })
        .catch((err) => {
            console.log(err)
        });
    // Код с изображением конец
}
function sendGeo(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(success, error, options);
}

function getWeatherCity(city) {
    return  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${keys.key}&lang=ru`)
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

function getGeoWeather(lat,lon){
    return  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat.toFixed(2)}&lon=${lon.toFixed(2)}&units=metric&lang=RU&exclude=hourly,daily&appid=${keys.key}`)
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
    getGeoWeather(crd.latitude, crd.longitude)
        .then((data) => {
            console.log(data, 'geoData');
            weatherTitle.textContent = `Город: ${data.timezone}`;
            weatherTemp.textContent = `Температура: ${data.current.temp}`;
            weatherPressure.textContent = `Давление: ${data.current.pressure}`;
            weatherWind.textContent = `Скорость ветра: ${data.current.wind_speed} mph`;
            weatherType.textContent = `Тип погоды: ${data.current.weather[0]['description']}`;
            weatherIcon.src = `http://openweathermap.org/img/wn/${data.current.weather[0]['icon']}@2x.png`
        })
        .catch((err) => console.log(`Что то пошло не так с геолокацией ${err}`));
}



function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}
navigator.geolocation.getCurrentPosition(success, error, options);

// Слушатели
buttonSearch.addEventListener('click', sendCity );
buttonSearchGeo.addEventListener('click', sendGeo);


// Мой код для изображений

function getPhoto(cityImage) {
    return  fetch(`https://pixabay.com/api/?key=${keys.imageKey}&q=${cityImage}&image_type=photo`)
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
