import { menuCombat } from "./menuCombat.js"
import { menuCarteDuMonde } from "./carteDuMonde.js"

const main = document.querySelector('#main')
const accueil = document.querySelector('#ecranAccueil')
const menuPrincipal = document.querySelector('#ecranMenuPrincipal')
const combat = document.querySelector('#ecranCombat')
const carteDuMonde = document.querySelector('#carteDuMonde')

export function lancerMenuPrincipal() {
    
    accueil.style.display = 'none'
    menuPrincipal.style.display = 'flex'

    // Musique Menu Principal
    const musiqueIntro = document.querySelector('#musique')
    musiqueIntro.src = './audio/musiques/intro.mp3'
    musiqueIntro.play()

    // Bouton Lancer Combat
    const boutonLancerCombat = document.querySelector('#lancerCombat')
    boutonLancerCombat.addEventListener('click', () => {
        lancerCombat()
    })

    // Bouton Acces Carte du Monde
    const boutonCarteDuMonde = document.querySelector('#boutonCarteDuMonde')
    boutonCarteDuMonde.addEventListener('click', () => {
        menuCarteDuMonde()
    })
}

export function lancerCombat() {
    
    menuPrincipal.style.display = 'none'
    combat.style.display = 'flex'

    menuCombat()
}

export function lancerCarteDuMonde() {

    menuPrincipal.style.display = 'none'
    carteDuMonde.style.display = 'flex'

    carteDuMonde()

}














// ///CODE CHAT GPT

// import { menuCombat } from "./menuCombat.js"

// let menuPrincipalClone
// // On s'assure que le DOM est complètement chargé avant d'exécuter le reste du code.
// document.addEventListener('DOMContentLoaded', function() {
//     lancerMenuPrincipal();
// });

// function lancerMenuPrincipal() {
//     const main = document.querySelector('#main');
//     const menuPrincipalTemplate = document.querySelector('.menuPrincipal');

//     if (menuPrincipalTemplate) {
//         menuPrincipalClone = menuPrincipalTemplate.content.cloneNode(true);
//         menuPrincipalClone.style.display = "block"; // Visible initialement
//         main.appendChild(menuPrincipalClone);
//     }

//     const musiqueIntro = document.createElement('audio');
//     musiqueIntro.src = './audio/musiques/intro.mp3';
//     musiqueIntro.play();

//     const boutonLancerCombat = document.querySelector('#lancerCombat');
//     if (boutonLancerCombat) {
//         boutonLancerCombat.addEventListener('click', () => {
//             if (menuPrincipalClone) {
//                 menuPrincipalClone.style.display = "none"; // Cacher au lieu de retirer
//             }

//             const combatTemplate = document.querySelector('.menuCombat');
//             if (combatTemplate) {
//                 const combatClone = combatTemplate.content.cloneNode(true);
//                 combatClone.style.display = "block";
//                 main.appendChild(combatClone);
//             }

//             menuCombat();
//         });
//     }
// }

// function lancerCombat(main) {
//     // On supprime le menu principal du DOM.
//     if (menuPrincipalClone && main.contains(menuPrincipalClone)) {
//         main.removeChild(menuPrincipalClone);
//     }
        

//     // Chargement du menu combat.
//     const combatTemplate = document.querySelector('.menuCombat');
//     if (combatTemplate) {
//         const combatClone = combatTemplate.content.cloneNode(true);
//         main.appendChild(combatClone);
//     }

//     // Appel de la fonction de menuCombat exportée.
//     menuCombat();
// }

// export { lancerMenuPrincipal, lancerCombat };

















