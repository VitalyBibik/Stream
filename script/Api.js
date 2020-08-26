import { keys } from "./config";

class Api {
    constructor(options) {
        this.options = options;
        console.log(options,'opt')
    }

     getWeatherCity(city) {
        return  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.options.key}&lang=ru`)
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
         

     getGeoWeather(lat,lon){
        return  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=RU&exclude=daily&appid=${this.options.key}`)
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

     getPhoto(cityImage) {
        return  fetch(`https://pixabay.com/api/?key=${this.options.imageKey}&q=${cityImage}&image_type=photo`)
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

}

export {Api};