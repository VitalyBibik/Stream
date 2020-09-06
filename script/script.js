import '../pages/index.css';
import { keys, geoOptions} from './config/config';
import { objWeather, objCity, form, formHistory, historyOpenButton } from './dom/doom';
import { Api } from './api/Api';
import { Weather } from './component/Weather';
import { PopupHistory } from "./component/PopupHistory";
import {historySearch} from "./utils/utils";



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

