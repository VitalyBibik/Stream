
const weatherDays = document.querySelectorAll('.box-item__day');
const weatherIcons = document.querySelectorAll('.box-item__icon');
const weatherTemp = document.querySelectorAll('.box-item__temp');
const weatherWind = document.querySelector('.box-item__wind');

// icon
const weatherBackImg = document.querySelector('.box-big__image');

const objWeather = {
  weatherDays, weatherIcons, weatherTemp, weatherWind, weatherBackImg
}




// buttons
const buttonSearch = document.querySelector('#search'); // button Search for Weather
const buttonSearchGeo = document.querySelector('#searchGeo'); // button Search for searchGeo

export { objWeather, buttonSearch, buttonSearchGeo }