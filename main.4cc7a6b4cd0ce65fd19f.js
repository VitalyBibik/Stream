!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(module,__webpack_exports__,__webpack_require__){"use strict";function urlLit(w,v){var tr='a b v g d e ["zh","j"] z i y k l m n o p r s t u f h c ch sh ["shh","shch"] ~ y ~ e yu ya ~ ["jo","e"]'.split(" "),ww="";w=w.toLowerCase();for(var i=0;i<w.length;++i){var cc=w.charCodeAt(i),ch=cc>=1072?tr[cc-1072]:w[i];ch.length<3?ww+=ch:ww+=eval(ch)[v]}return ww.replace(/[^a-zA-Z0-9\-]/g,"-").replace(/[-]{2,}/gim,"-").replace(/^\-+/g,"").replace(/\-+$/g,"")}function getWeekDay(e){for(var t=["SUN","MON","TUE","WED","THU","FRI","SAT"],n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],o=(e=e||new Date).getDay(),r=n[o],i=n.indexOf(r),a=[],c=i;c<=n.length-1;c++)a.push(t[c]);for(var u=0;u<i;u++)a.push(t[u]);return[n[o],a]}__webpack_require__.d(__webpack_exports__,"b",(function(){return urlLit})),__webpack_require__.d(__webpack_exports__,"a",(function(){return getWeekDay}))},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(1);var o=document.querySelectorAll(".box-item__day"),r=document.querySelectorAll(".box-item__icon"),i=document.querySelectorAll(".box-item__temp"),a=document.querySelector(".box-item__wind"),c=document.querySelector(".info__city"),u=document.querySelector(".info__time"),s={weatherDays:o,weatherIcons:r,weatherTemp:i,weatherWind:a,weatherBackImg:document.querySelector(".box-big__image")},l={city:c,cityTime:u},h=document.querySelector(".box-big__form");function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t}var t,n,o;return t=e,(n=[{key:"getWeatherCity",value:function(e){return fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=metric&appid=").concat(this.options.key,"&lang=ru")).then((function(e){return e.ok?e.json():Promise.reject("Что то пошло не так ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"getGeoCity",value:function(e,t){var n={lat:e,lon:t};return fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Token "+this.options.geoKey},body:JSON.stringify(n)}).then((function(e){return e.ok?e.json():Promise.reject("Что то пошло не так ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"getGeoWeather",value:function(e,t){return fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e,"&lon=").concat(t,"&units=metric&lang=RU&exclude=hourly,minutely&appid=").concat(this.options.key)).then((function(e){return e.ok?e.json():Promise.reject("Что то пошло не так ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"getPhoto",value:function(e){return fetch("https://pixabay.com/api/?key=".concat(this.options.imageKey,"&q=").concat(e,"&image_type=photo")).then((function(e){return e.ok?e.json():Promise.reject("Что то пошло не так ".concat(e.status))})).catch((function(e){console.log(e)}))}},{key:"getTime",value:function(e){return console.log(e),fetch("http://worldtimeapi.org/api/timezone/".concat(e.timezone)).then((function(e){return e.ok?e.json():Promise.reject("Что то пошло не так ".concat(e.status))})).catch((function(e){console.log(e)}))}}])&&f(t.prototype,n),o&&f(t,o),e}(),g=n(0);function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var m=new(function(){function e(t,n,o,r,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.objWeather=t,this.objCity=n,this.api=o,this.geoOptions=r,this.form=i,this.timeObj={timezone:"",city:""},this.searchHistory=[]}var t,n,o;return t=e,(n=[{key:"initWeather",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){e.getGeoFullInfo(t.coords.latitude,t.coords.longitude)}),(function(e){console.error(e)}))}},{key:"getGeoFullInfo",value:function(e,t){var n=this,o=[this.api.getGeoWeather(e,t).then((function(e){console.log("Все данные о погоде в этом городе",e),n.changeWeatherInfo(e)}),(function(e){console.log(e)})),this.api.getGeoCity(e,t).then((function(e){console.log("Геоданные",e),n.changeCity(e)}),(function(e){console.log(e)}))];Promise.allSettled(o).then((function(){n.changeTime(),n.changeImage()}))}},{key:"changeWeatherInfo",value:function(e){this.timeObj.timezone=e.timezone;var t=Array.from(this.objWeather.weatherIcons),n=Array.from(this.objWeather.weatherTemp),o=Array.from(this.objWeather.weatherDays),r=this.objWeather.weatherWind,i=new Date,a=Object(g.a)(i);r.textContent=e.current.wind_speed+" mph";for(var c=0;c<=t.length;c++)n[c].textContent=Math.floor(e.daily[c].temp.day),0===c?(t[c].src="http://openweathermap.org/img/wn/".concat(e.daily[c].weather[0].icon,"@4x.png"),o[c].textContent=a[c]):(t[c].src="http://openweathermap.org/img/wn/".concat(e.daily[c].weather[0].icon,"@2x.png"),o[c].textContent=a[1][c])}},{key:"changeCity",value:function(e){console.log("Город",e);var t=this.objCity.city.textContent=e.suggestions[0].data.city;this.objCity.city.textContent=t,this.timeObj.city=Object(g.b)(t)}},{key:"changeTime",value:function(){var e=this;this.api.getTime(this.timeObj).then((function(t){var n=t.datetime.split("T")[1].split(".")[0].slice(0,5);e.objCity.cityTime.textContent=n})).catch((function(e){console.log(e)}))}},{key:"changeImage",value:function(){var e=this;this.api.getPhoto(this.timeObj.city).then((function(t){if(void 0!==t){console.log(t);var n=t.hits.length,o=Math.floor(Math.random()*(n-0)+0),r=t.hits[o].largeImageURL;e.objWeather.weatherBackImg.src=r}})).catch((function(e){console.log(e)}))}},{key:"initSearchForm",value:function(){var e=this;this.form.addEventListener("submit",(function(t){t.preventDefault();var n=t.target.searchValue.value;e.api.getWeatherCity(n).then((function(t){e.timeObj.city=Object(g.b)(t.name),e.objCity.city.textContent=t.name,console.log("Пришедший город с getWeatherCity",t),e.searchHistory.push(n),e.getGeoFullInfo(t.coord.lat,t.coord.lon),console.log("История",e.searchHistory)})),t.target.reset()}))}}])&&p(t.prototype,n),o&&p(t,o),e}())(s,l,new y({key:"e7e013145e8f764392b0517c2ab23d80",imageKey:"16932497-da77038ac64e17ff9ad2c6a4e",geoKey:"0fc39a2abbc5fbc725494cf468bf07aa8f080070"}),{timeout:2e3,maximumAge:1e4,enableHighAccuracy:!0},h);m.initWeather(),m.initSearchForm()}]);