
const weatherDays = document.querySelectorAll('.box-item__day');
const weatherIcons = document.querySelectorAll('.box-item__icon');
const weatherTemp = document.querySelectorAll('.box-item__temp');
const weatherWind = document.querySelector('.box-item__wind');
const city = document.querySelector('.info__city');
const cityTime = document.querySelector('.info__time');
// icon
const weatherBackImg = document.querySelector('.box-big__image');

const formHistory = document.querySelector('.popup__history');

const objWeather = {
  weatherDays, weatherIcons, weatherTemp, weatherWind, weatherBackImg
}
const objCity = {
    city, cityTime
}
const form = document.querySelector('.box-big__form');

const historyOpenButton = document.querySelector('#lastLocation');




export { objWeather, objCity, form, formHistory, historyOpenButton }

