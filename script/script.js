import '../pages/index.css';
import { keys, geoOptions} from './config';
import { objWeather, objCity, form, formHistory, historyOpenButton } from './doom';
import { Api } from './Api';
import { Weather } from './Weather';
import { PopupHistory } from "./PopupHistory";
import {historySearch} from "./utils";



const api = new Api(keys);
const weather = new Weather(objWeather, objCity, api, geoOptions, form);
const popupHistory = new PopupHistory(formHistory, api, weather.searchHistory);

weather.initWeather();
weather.initSearchForm();
popupHistory.initHistoryForm();

historyOpenButton.addEventListener('click', popupHistory.open);


const input = document.querySelector('#historyLogin');
input.addEventListener('input', (e) => {
    console.log(this.searchHistory,'hist');
    historySearch(e.currentTarget.value, ['Pskov']);
});