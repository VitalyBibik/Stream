import {urlLit} from './utils';

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
     }, error => {
        console.log(error);
     })       
      }, error => {
        console.error(error);
      })
    }

 changeWeatherInfo (data) {
           console.log(data);
           this.timeObj.timezone = data.timezone.split('/')[0];
 }

 changeCity (data) {
        const cityName = this.objCity.city.textContent = data.suggestions[0].value.split(',')[0];
        this.objCity.city.textContent = cityName;                       
        this.timeObj.city = urlLit(cityName.split(' ')[1]);
        
       
 }

 changeTime () {
      this.api.getTime(this.timeObj);
 }
 

/*
 navigator.geolocation.getCurrentPosition(position => {
    api.getGeoWeather(position.coords.latitude, position.coords.longitude).then((data)=> {
        console.log(data);
    })
    api.test(position.coords.latitude, position.coords.longitude).then((data)=> {
        console.log(data);
    })
  }, error => {
    console.error(error);
  }, geoOptions )
*/
}
export {Weather}