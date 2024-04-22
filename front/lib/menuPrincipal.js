import { menuCombat } from "./menuCombat.js"
import { menuCarteDuMonde } from "./carteDuMonde.js"

// Appel des écrans
const accueil = document.querySelector('#ecranAccueil')
const menuPrincipal = document.querySelector('#ecranMenuPrincipal')
const menuDev = document.querySelector('#ecranMenuDev')
const combat = document.querySelector('#ecranCombat')
const carteDuMonde = document.querySelector('#carteDuMonde')

// Animation des boutons
const boutonsMenu = document.querySelectorAll('.boutonMenuPrincipal')
boutonsMenu.forEach((bouton) => {
    bouton.addEventListener('mouseenter', () => {
        bouton.classList.toggle('fa-beat')
    })
    bouton.addEventListener('mouseleave', () => {
        bouton.classList.toggle('fa-beat')
    })
})

export function lancerMenuPrincipal() {
    
    accueil.style.display = 'none'
    menuPrincipal.style.display = 'flex'


    // Musique Menu Principal
    const musiqueMenuPrincipal = document.querySelector('#musique')
    musiqueMenuPrincipal.src = './audio/musiques/menuPrincipal.mp3'
    musiqueMenuPrincipal.loop = 'true'
    musiqueMenuPrincipal.play()

    // Bouton Lancer Combat
    const boutonLancerMenuDev = document.querySelector('#boutonMenuDev')
    boutonLancerMenuDev.addEventListener('click', () => {
        lancerMenuDev()
    })


    
}

function lancerMenuDev() {
    menuPrincipal.style.display = 'none'
    menuDev.style.display = 'flex'

    // Bouton Lancer Combat
    const boutonLancerCombat = document.querySelector('#lancerCombat')
    boutonLancerCombat.addEventListener('click', () => {
        lancerCombat()
    })

    // Bouton Acces Carte du Monde
    const boutonCarteDuMonde = document.querySelector('#boutonCarteDuMonde')
    boutonCarteDuMonde.addEventListener('click', () => {
        lancerCarteDuMonde()
    })
}

export function lancerCombat() {
    
    menuDev.style.display = 'none'
    combat.style.display = 'flex'

    menuCombat()
}

export function lancerCarteDuMonde() {

    menuDev.style.display = 'none'
    carteDuMonde.style.display = 'flex'

    menuCarteDuMonde()

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

















