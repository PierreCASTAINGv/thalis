import { InfosCabinet } from './InfosCabinet.js';

class InitCabinet {
    constructor() {
        // Requête vers liens du JSON
        this.request = new XMLHttpRequest();
        this.request.open('GET', './json/cabinet.json');
        // Identification du type de données
        this.request.responseType = 'json';
        this.request.send();
        // On utilise une méthode en flat arrow éviter que le onload (asynchrone) n'ait de contexte
        this.request.onload = () => {
            this.jsonObj = this.request.response;
            this.cabinet = new InfosCabinet(this.jsonObj);
        }
    }
}

var init = new InitCabinet();

// améliorer pour lundi : local storage & session storage