import {urlLit, getWeekDay} from './utils';

class Weather {
    constructor(objWeather, objCity, api, geoOptions) {
        this.objWeather = objWeather;
        this.objCity = objCity;
        this.api = api;
        this.geoOptions = geoOptions;
        this.timeObj = {
            timezone:'',
            city:''
        }
    }

 initWeather () {
     navigator.geolocation.getCurrentPosition(position => {

    const promise1 = this.api.getGeoWeather(position.coords.latitude, position.coords.longitude)
        .then((data) => {
            this.changeWeatherInfo(data);
            }, error => {
                console.log(error);
            })
    const promise2 = this.api.getGeoCity(position.coords.latitude, position.coords.longitude)
        .then((data) => {
            this.changeCity(data);
                }, error => {
                console.log(error);
            })
            const promises = [promise1, promise2];
            Promise.allSettled(promises).then(() => {
                this.changeTime();
                this.changeImage();
     }, error => {
        console.log(error);
     })
      }, error => {
        console.error(error);
      })
    }

 changeWeatherInfo (data) {
          console.log(data);
          this.timeObj.timezone = data.timezone;
          const iconArray = Array.from(this.objWeather.weatherIcons);
          const weatherTemp = Array.from(this.objWeather.weatherTemp);
          const weatherDays = Array.from(this.objWeather.weatherDays);
          const weatherWind = this.objWeather.weatherWind;

          const day = new Date();
          const currentDay = getWeekDay(day);

          weatherWind.textContent = data.current['wind_speed'] + ' mph' ;
          for (let i = 0; i <= iconArray.length; i++) {
            weatherTemp[i].textContent = Math.floor(data.daily[i].temp.day);

              if (i === 0) {
                iconArray[i].src = `http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@4x.png`;
                  weatherDays[i].textContent = currentDay[i];
              } else {
              iconArray[i].src = `http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png`;
              weatherDays[i].textContent = currentDay[1][i];
              }

          }
 }

 changeCity (data) {
        const cityName = this.objCity.city.textContent = data.suggestions[0].value.split(',')[0];
        this.objCity.city.textContent = cityName;
        this.timeObj.city = urlLit(cityName.split(' ')[1]);
 }

 changeTime () {
      this.api.getTime(this.timeObj).then((data) => {
          const time = data.datetime.split('T')[1].split('.')[0].slice(0, 5);
          this.objCity.cityTime.textContent = time;
      })
      .catch((e) => {
        console.log(e);
    })
 }
 changeImage () {
     this.api.getPhoto(this.timeObj.city).then((data) => {
        if (data === undefined) {
            return
        }
        console.log(data);
        const min = 0;
        const max = data.totalHits;
        const lucky = Math.floor(Math.random() * (max - min) + min);
        const linkImage = data['hits'][lucky]['largeImageURL'];
        this.objWeather.weatherBackImg.src= linkImage;
     })
     .catch((e) => {
         console.log(e);
     })
 }
 privet = (e) =>  {
        e.preventDefault();
        console.log('privet');
 }

}
export {Weather}
