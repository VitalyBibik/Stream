
/* html info  start */
const weatherTitle = document.querySelector('.weather__title');
const weatherTemp = document.querySelector('.weather__temp');
const weatherPressure = document.querySelector('.weather__pressure');
const weatherWind = document.querySelector('.weather__wind');
const weatherType = document.querySelector('.weather__type');

// icon
const weatherIcon = document.querySelector('.weather__img');
/* html info end */

// buttons
const buttonSearch = document.querySelector('#search'); // button Search for Weather
const buttonSearchGeo = document.querySelector('#searchGeo'); // button Search for searchGeo

export {weatherTitle, weatherTemp, weatherPressure, weatherWind, weatherType, weatherIcon, buttonSearch, buttonSearchGeo }