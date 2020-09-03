import '../pages/index.css';
import { keys, geoOptions} from './config';
import { objWeather, objCity, form, formHistory, historyOpenButton } from './doom';
import { Api } from './Api';
import { Weather } from './Weather';
import { PopupHistory } from "./PopupHistory";



const api = new Api(keys);
const weather = new Weather(objWeather, objCity, api, geoOptions, form);
const popupHistory = new PopupHistory(formHistory, api, weather.searchHistory);

weather.initWeather();
weather.initSearchForm();
popupHistory.initHistoryForm();

historyOpenButton.addEventListener('click', popupHistory.open);


