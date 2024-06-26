import { creerMain } from "./creerMain.js";
import { creerPersonnage } from "./creerPersonnage.js";


const tabMonstres = JSON.parse(localStorage.getItem('monstres'))
const zoneCombat = JSON.parse(localStorage.getItem('zoneCombat'))

export function menuCombat(idLieu) {

    creerMain()

    const ecranCombat = document.createElement('div')
    const imageCombat = document.createElement('img')

    ecranCombat.id = 'ecranCombat'
    imageCombat.id = 'imageCombat'
    imageCombat.src = './images/background/prairie.png'
    
    main.append(ecranCombat)
    ecranCombat.append(imageCombat)

    creerPersonnage(ecranCombat)

    const monstreAleatoire = () => {
        const aleatoire = Math.random()

        if (aleatoire < 0.5) {
            return 
        }
    }


    function creerMonstre() {

        const imageMonstre = document.createElement('img')
        imageMonstre.id = 'monstre'
        imageMonstre.src = tabMonstres
        ecranCombat.append(imageMonstre)

    }
}