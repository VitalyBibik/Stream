import '../pages/index.css';
import { keys, geoOptions} from './config';
import { objWeather, objCity, buttonSearch, buttonSearchGeo } from './doom';
import { Api } from './Api';
import { Weather } from './Weather';


const api = new Api(keys);
const weather = new Weather(objWeather, objCity, api, geoOptions);
weather.initWeather();


 /*

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
       const test =  document.querySelector('.box-big__image');
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
buttonSearch.addEventListener('click', sendCity);
buttonSearchGeo.addEventListener('click', sendGeo);
*/


