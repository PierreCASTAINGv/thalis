export class RequeteAjax {

    constructor(requestURL, responseType) {
        this.requestURL = requestURL;
        this.xmlhttp = new XMLHttpRequest();
        this.xmlhttp.responseType = responseType;
        this.createReq();
    }
    createReq() {
        this.xmlhttp.open("GET", this.requestURL, true);
        this.xmlhttp.send();
    }
}