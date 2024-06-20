import { menuCombat } from "./menuCombat.js"
import { menuInventaire } from "./menuInventaire.js"
import { menuMagasin } from "./menumagasin.js"
import { menuCarteDuMonde } from "./menuCarte.js"
import { creerMain } from "./creerMain.js"
import { changerScript } from "./changerScript.js"
import { nouvellePartie } from "./nouvellePartie.js"


export function lancerMenuPrincipal() {
    // Création du Main
    creerMain()
    
    // Création du menu
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
    
    // Listener boutons
    boutonNouvellePartie.addEventListener('click', () => {
        main.remove()
        nouvellePartie()
    })

    boutonMenuDev.addEventListener('click', () => {
        main.remove()
        changerScript('2_heliodor.js')
        // menuCombat()
        // menuMagasin(2)
        // menuEglise(1)
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
    // const musiqueMenuPrincipal = document.querySelector('#musique')
    // musiqueMenuPrincipal.src = './audio/musiques/menuPrincipal.mp3'
    // musiqueMenuPrincipal.loop = 'true'
    // musiqueMenuPrincipal.play()

}
