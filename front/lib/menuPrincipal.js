import { menuCombat } from "./menuCombat.js"
import { menuCarteDuMonde } from "./carteDuMonde.js"
import { menuInventaire } from "./menuInventaire.js"

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
        lancerCarteDuMonde(menuDev)
    })

    const boutonInventaire = document.querySelector('#boutonInventaire')
    boutonInventaire.addEventListener('click', () => {
        menuInventaire(menuPrincipal)
    })
}

export function lancerCombat() {
    
    menuDev.style.display = 'none'
    combat.style.display = 'flex'

    menuCombat()
}

export function lancerCarteDuMonde(lieuActuel) {

    
    lieuActuel.style.display = 'none'
    carteDuMonde.style.display = 'flex'


    menuCarteDuMonde()

}