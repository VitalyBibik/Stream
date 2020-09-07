import '../pages/index.css';
import { keys, geoOptions} from './config/config';
import { objWeather, objCity, form, formHistory, historyOpenButton, buttonHistorySearch, historyPopup } from './dom/doom';
import { Api } from './api/Api';
import { Weather } from './component/Weather';
import { PopupHistory } from "./component/PopupHistory";
import { FormValidator } from "./component/FormValidator";
import { errorMsg } from "./constants/constants";


const api = new Api(keys);
const weather = new Weather(objWeather, objCity, api, geoOptions, form);
const popupHistory = new PopupHistory(formHistory, api, weather.searchHistory, weather.changeInfoForFormApi);
const historyValidator = new FormValidator(historyPopup, buttonHistorySearch, errorMsg);

historyOpenButton.addEventListener('click', popupHistory.open);

weather.initWeather();
weather.initSearchForm();
popupHistory.initHistoryForm();
historyValidator.setEventListeners();

window.addEventListener('keydown', function closeFormByKeydown(event) {
    if (event.keyCode === 27) {
        popupHistory.removePopup();
    }
})
