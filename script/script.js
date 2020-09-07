import '../pages/index.css';
import { keys, geoOptions} from './config/config';
import { objWeather, objCity, form, formHistory, historyOpenButton, buttonHistorySearch, historyPopup } from './dom/doom';
import { Api } from './api/Api';
import { Weather } from './component/Weather';
import { PopupHistory } from "./component/PopupHistory";
import { errorMsg } from "../../popular-news/src/js/constants/constants";
import { FormValidator } from "../../popular-news/src/js/components/FormValidator";




const api = new Api(keys);
const weather = new Weather(objWeather, objCity, api, geoOptions, form);
const popupHistory = new PopupHistory(formHistory, api, weather.searchHistory);
const historyValidator = new FormValidator(historyPopup, buttonHistorySearch, errorMsg);

historyOpenButton.addEventListener('click', popupHistory.open);

weather.initWeather();
weather.initSearchForm();
popupHistory.initHistoryForm();
historyValidator.setEventListeners();
