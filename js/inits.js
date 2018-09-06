// import 2 js :
import { RequeteAjax } from "./req_ajax.js";
import { MajAccueil } from "./maj_accueil.js";

class Init {

    constructor() {
        this.xhr = new RequeteAjax('./json/accueil.json', 'json');
        this.xhr.xmlhttp.onload = () => {
            this.myObj = this.xhr.xmlhttp.response;
            this.page = new MajAccueil(this.myObj);
        }
    }
}
var init = new Init();