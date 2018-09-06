import {
    InfosProfil
} from './InfosProfil.js';

class InitProfile {
    constructor() {
        this.request = new XMLHttpRequest();
        this.request.open('GET', 'json/profil.json');
        this.request.responseType = 'json';
        this.request.send();
        this.request.onload = () => {
            this.jsonObject = this.request.response;
            this.Profil = new InfosProfil(this.jsonObject);
        }
    }
}
var init = new InitProfile();