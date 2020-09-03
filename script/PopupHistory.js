import { Popup }  from "./Popup";
import {historySearch} from "./utils";

class PopupHistory extends Popup {
    constructor (containerPopup, mainApi, searchHistory) {
        super(containerPopup)
        this.mainApi = mainApi;
        this.searchHistory = searchHistory;
    }

    _register = (event) => {
        event.preventDefault();
        const button = event.currentTarget;
        const form = this.containerPopup.querySelector('#signUp');
        const email = this.containerPopup.querySelector('#email');
        const password = this.containerPopup.querySelector('#password');
        const userName = this.containerPopup.querySelector('#userName');

        this._removeEnabled(button, email, password, userName);

        this.mainApi.signUp(email.value, password.value, userName.value).then((data) => {
            this._removeDisable(button, email, password, userName);
            if (data !== undefined) {
                form.reset();
                this.removePopup();
                this.openSuccessForm();
            }
        }).catch((e) => {
            this._removeDisable(button, email, password, userName);
            this.containerPopup.querySelector('.error-message_type_server').textContent = e.message;
        })
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
    initHistoryForm() {
       const form = this.containerPopup.querySelector('#historyForm');
            form.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputValue = e.target.historySearch.value;
            console.log(inputValue);
            e.target.reset();

        });
       const input = this.containerPopup.querySelector('#historyLogin');
            input.addEventListener('input', (e) => {
                console.log(this.searchHistory,'hist');
                historySearch(e.currentTarget.value, this.searchHistory);
        });

    }


}
export { PopupHistory };
