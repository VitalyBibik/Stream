import '../pages/index.css';
import { keys, geoOptions} from './config';
import { objWeather, objCity, form } from './doom';
import { Api } from './Api';
import { Weather } from './Weather';


const api = new Api(keys);
const weather = new Weather(objWeather, objCity, api, geoOptions, form);
weather.initWeather();
weather.initSearchForm();
