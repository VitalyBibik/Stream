import { Popup }  from "./Popup";
import {historySearch} from "../utils/utils";

class PopupHistory extends Popup {
    constructor (containerPopup, mainApi, searchHistory, changeInfoForFormApi) {
        super(containerPopup)
        this.mainApi = mainApi;
        this.searchHistory = searchHistory;
        this.changeInfoForFormApi = changeInfoForFormApi;
    }


    _removeDisable = (button, email, password, userName) => {
        button.removeAttribute('disabled');
        email.removeAttribute('disabled');
        password.removeAttribute('disabled');
        userName.removeAttribute('disabled');
    }
    _removeEnabled = (button, email, password, userName) => {
        button.setAttribute('disabled',true);
        email.setAttribute('disabled',true);
        password.setAttribute('disabled',true);
        userName.setAttribute('disabled',true);
    }
    initHistoryForm ()  {
       const form = this.containerPopup.querySelector('#historyForm');
       const popup = this.containerPopup;
            form.addEventListener('submit', (e) => {
            e.preventDefault();
            try {
                const inputValue = e.target.historySearch.value;
                console.log(inputValue,'input');
                this.changeInfoForFormApi(inputValue);
                e.target.reset();
                this._closePopup(e);
            }
            catch (e) {
                console.log(e);
            }
        });

    }




}
export { PopupHistory };
