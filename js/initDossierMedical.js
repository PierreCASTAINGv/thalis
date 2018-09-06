
import { DossierMedical, HistoRdv } from './dossierMedical.js';
/**
 *
 *
 * @class InitDossiermedical
 */

class InitDossiermedical {
    constructor() {
        // Requête vers liens du JSON
        this.request = new XMLHttpRequest();
        this.request.open('GET', 'json/dossierMedical.json');

        // Identification du type de données
        this.request.responseType = 'json';
        this.request.send();
        // On utilise une méthode en flat arrow éviter que le onload (asynchrone) n'ait de contexte
        this.request.onload = () => {

            this.myJson = this.request.response;
            this.DossierMedical = new DossierMedical(this.myJson.factures, this.myJson.histoRdv,this.myJson[0].download,    this.myJson[0].solde);
            ;
            console.log(this.myJson[0].solde);

            var fa = this.myJson[0].factures;

            for (let facture of fa) {

                let divFact = document.createElement("div");
                divFact.classList.add("collapsible-header");
                // console.log(divFact);

                let iFact = document.createElement("i");
                // iFact.classList.add("material-icons");
                // iFact.innerHTML = "file_download";
                let aFact = document.createElement("a");
                aFact.appendChild(iFact);
                divFact.appendChild(aFact);
                // aFact.href = " pdf/" + facture.facturesLien;
                // aFact.target = "_blank";
                // console.dir(aFact);

                document.querySelector("#fact").appendChild(divFact);
                let spanFact = document.createElement("span");
                spanFact.innerHTML = facture.facturesDate;
                divFact.appendChild(spanFact);
                document.querySelector("#fact").appendChild(divFact);
                // console.log(iFact);
                // console.log(divFact); 
            }


            console.log(this.myJson[0].histoRdv);

            var fl = this.myJson[0].histoRdv;

            for (let histoRdv of fl) {

                let divRdv = document.createElement("div");
                divRdv.classList.add("collapsible-header");
                console.log(divRdv);

                let iRdv = document.createElement("i");
                let aHisto = document.createElement("a");
                // aHisto.classList.add("material-icons");
                // aHisto.innerHTML = "file_download";

                aHisto.appendChild(iRdv);
                divRdv.appendChild(aHisto);
                // aHisto.href = " pdf/" + histoRdv.histoLien;
                // aHisto.target = "_blank";
                console.dir(aHisto);


                // console.log(divRdv);
                document.querySelector("#historendv").appendChild(divRdv);
                let spanRdv = document.createElement("span");
                spanRdv.innerHTML = histoRdv.histoDate;
                divRdv.appendChild(spanRdv);
                document.querySelector("#historendv").appendChild(divRdv);




            }
        }
    }
}
var init = new InitDossiermedical;