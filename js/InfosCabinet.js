// Classe InfosCabinet, se sert de la partie cabinet de la bdd pour remplir son contenu
// Export rend cette classe publique, elle peut être importée
export class InfosCabinet {

    constructor(cabinet) {
        this.cabinet = cabinet;
        this.recupererInfosCabinet();
    }

    recupererInfosCabinet() {
        document.querySelector("#cabinetImage").src = this.cabinet.image;
        document.querySelector("#cabinetDescription").textContent = this.cabinet.description;
        document.querySelector("#cabinetAdresse").textContent = this.cabinet.adresse;
        document.querySelector("#cabinetTel").textContent = this.cabinet.tel;
        document.querySelector("#cabinetMail").textContent = this.cabinet.mail;
        document.querySelector("#cabinetHoraires").innerHTML = this.cabinet.horaires;

        // Classe SliderCabinet, se sert de la partie praticiens de la bdd pour remplir son contenu
        // Export rend cette classe publique, elle peut être importée


        for (let slide of this.cabinet.praticiens) {

            document.querySelector(".carousel").innerHTML +=
                `<a class="carousel-item">
            <div class="card Formecard">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src=${slide.praticienPhoto}>
                </div>
            
                <div class="card-content pad">
                    <span class="card-title activator grey-text text-darken-4 Taillepolice ">
                        <i class="material-icons right teal-text text-accent-4">add_circle_outline</i>${slide.praticienNom}</span>
                    <!-- <p><a href="#">This is a link</a></p> -->
                </div>
                <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">${slide.praticienNom}
                        <i class="material-icons right">close</i>
                    </span>
                    <p>${slide.praticienDesc}</p>
                </div>
            </div>
        </a>`;
            $('.carousel').carousel();
        }
    }
}
