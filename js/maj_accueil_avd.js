export class MajAccueil {

    constructor(accueil) {
        this.accueil = accueil;
        this.ajout();
    }

    ajout() {
        document.getElementById('logo_d').setAttribute('src', this.accueil.logoCab);

        document.getElementById('nameCabinet').textContent = this.accueil.nomCab;

        //document.getElementById('imagHeader').setAttribute('src', this.accueil.imgHeader);

        document.getElementById('imgUser').setAttribute('src', this.accueil.imgProfil);

        for (let note of this.accueil.notice) {

            if (note.typeNotif == 0) {

                if (note.nomPatient == this.accueil.notice[0].nomPatient) {

                    document.querySelector('#notifs').innerHTML +=
                        `<div class="col s12 m8 offset-m2 l6 offset-l3">
                            <div style="background-color: #bff5f2 !important" class="card-panel grey lighten-5 z-depth-2">
                                <div class="row valign-wrapper">
                                    <div class="phtdoc col s2">
                                        <img src="${note.imagePatient}" alt="" class="circle responsive-img">
                                    </div>
                                    <div class="Notif col s10">
                                        <span style="text-transform:uppercase;color:purple;font-size:1.1em">${note.nomPatient} : </span>${note.notification}
                                    </div>
                                </div>
                            </div>
                        </div>`

                } else {

                    document.querySelector('#notifs').innerHTML +=
                        `<div class="col s12 m8 offset-m2 l6 offset-l3">
                            <div style="background-color: #f4fffe !important" class="card-panel grey lighten-5 z-depth-2">
                                <div class="row valign-wrapper">
                                    <div class="phtdoc col s2">
                                        <img src="${note.imagePatient}" alt="" class="circle responsive-img">
                                    </div>
                                    <div class="Notif col s10">
                                        <span style="text-transform:uppercase;color:purple;font-size:1.1em">${note.nomPatient} : </span>${note.notification}
                                    </div>
                                </div>
                            </div>
                        </div>`
                }
            }
            else {

                document.querySelector('#notifs-urgent').innerHTML +=
                    `<div style="position:relative;z-index:30;margin-top:8% !important" class="col s12 m8 offset-m2 l6 offset-l3">
                        <div class="blink card-panel grey lighten-5 z-depth-2">
                            <div class="row valign-wrapper">
                                <div class="phtdoc col s2">
                                    <img src="${note.imagePatient}" alt="" class="circle responsive-img">
                                </div>
                                <div class="Notif col s10">
                                    <span style="text-transform:uppercase;color:purple;font-size:1.1em">${note.nomPatient} : </span>${note.notification}
                                </div>
                            </div>
                        </div>
                    </div>`
            }
        }
    }
}