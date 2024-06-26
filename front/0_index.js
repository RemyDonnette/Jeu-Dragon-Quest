import { creerMain } from './lib/creerMain.js'
import { lancerMenuPrincipal } from './lib/menuPrincipal.js'

// Création du header
const body = document.querySelector('#body')
const header = document.createElement('header')
const h1 = document.createElement('h1')
const logo = document.createElement('img')

header.id = 'header'
logo.src = './images/icones/dragonQuestLogo.png'
logo.alt = 'Logo Dragon Quest'
logo.id = 'logo'

creerMain()
body.insertBefore(header, main);
header.append(h1)
h1.append(logo)

// Création de l'écran d'accueil
const ecranAccueil = document.createElement('div')
const commencer = document.createElement('span')

ecranAccueil.id = 'ecranAccueil'
commencer.id = 'commencer'
commencer.innerText = 'CLIQUEZ POUR COMMENCER'
commencer.classList.add('fa-solid', 'fa-beat')

main.append(ecranAccueil)
ecranAccueil.append(commencer)

// Menu Principal
ecranAccueil.addEventListener('click', () => {
    header.remove()
    main.remove()
    lancerMenuPrincipal()
})



