
class Api {
    constructor(options) {
        this.options = options;
    }
    /* Метод получения погоды через форму по городу */
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
   
  /* Метод получения текущего местоположения через координаты широты и долготы(геокодер) */
    getGeoCity(lat,lon) {
        const query = { lat, lon };
        return  fetch(`https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address`, {
            method:"POST",
            mode:"cors",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + this.options.geoKey 
            },
            body: JSON.stringify(query)    
        })
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
/* Метод получения погоды через широту и долготу */
     getGeoWeather(lat,lon){
         console.log('lat,lon', lat,lon)
        return  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=RU&exclude=hourly,minutely&appid=${this.options.key}`)
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
/* Метод получения фотографии через названия города */
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
    /* Метод получения времени через Континент и город */
    getTime(obj) {
        console.log(obj);
        return  fetch(`http://worldtimeapi.org/api/timezone/${obj.timezone}`)
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