import { menuCombat } from "./menuCombat.js"
import { menuCarteDuMonde } from "./carteDuMonde.js"
import { menuInventaire } from "./menuInventaire.js"


export function lancerMenuPrincipal() {
    // Création du Main
    const body = document.querySelector('#body')
    const main = document.createElement('main')
    main.id = 'main'
    body.append(main)
    
    // Appel des écrans
    const menuPrincipal = document.createElement('div')
    const boutonNouvellePartie = document.createElement('button')
    const boutonChargerPartie = document.createElement('button')
    const boutonMenuDev = document.createElement('button')
    
    menuPrincipal.id = 'ecranMenuPrincipal'
    boutonNouvellePartie.id = 'boutonNouvellePartie'
    boutonNouvellePartie.className = 'boutonMenuPrincipal'
    boutonNouvellePartie.innerText = 'Nouvelle Partie'
    boutonChargerPartie.id = 'boutonChargerPartie'
    boutonChargerPartie.className = 'boutonMenuPrincipal'
    boutonChargerPartie.innerText = 'Charger Partie'
    boutonMenuDev.id = 'boutonMenuDev'
    boutonMenuDev.className = 'boutonMenuPrincipal'
    boutonMenuDev.innerText = 'Menu Dev'
    
    main.append(menuPrincipal)
    menuPrincipal.append(boutonNouvellePartie, boutonChargerPartie, boutonMenuDev)
    
    boutonNouvellePartie.addEventListener('click', () => {
        main.remove()
        menuCarteDuMonde()
    })

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

    // Musique Menu Principal
    const musiqueMenuPrincipal = document.querySelector('#musique')
    musiqueMenuPrincipal.src = './audio/musiques/menuPrincipal.mp3'
    musiqueMenuPrincipal.loop = 'true'
    musiqueMenuPrincipal.play()

}


// function lancerMenuDev() {
//     menuPrincipal.style.display = 'none'
//     menuDev.style.display = 'flex'

//     // Bouton Lancer Combat
//     const boutonLancerCombat = document.querySelector('#lancerCombat')
//     boutonLancerCombat.addEventListener('click', () => {
//         lancerCombat()
//     })

//     // Bouton Acces Carte du Monde
//     const boutonCarteDuMonde = document.querySelector('#boutonCarteDuMonde')
//     boutonCarteDuMonde.addEventListener('click', () => {
//         lancerCarteDuMonde(menuDev)
//     })

//     const boutonInventaire = document.querySelector('#boutonInventaire')
//     boutonInventaire.addEventListener('click', () => {
//         menuInventaire(menuPrincipal)
//     })
// }

// export function lancerCombat() {
    
//     menuDev.style.display = 'none'
//     combat.style.display = 'flex'

//     menuCombat()
// }
