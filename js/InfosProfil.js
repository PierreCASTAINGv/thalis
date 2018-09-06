export class InfosProfil {
    constructor(profil) {
        this.profil = profil;

        this.recupererInfosProfil();
    }
    recupererInfosProfil() {
        for (let i in this.profil) {
            console.log(i, this.profil[i]);
            document.getElementById(i).value = this.profil[i];
            document.getElementById(i).src = this.profil[i];
        }

    }
}