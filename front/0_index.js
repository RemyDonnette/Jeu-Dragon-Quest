import { head } from './lib/head.js'
import { lancerMenuPrincipal } from './lib/menuPrincipal.js'


head()

// Création du header
const body = document.querySelector('#body')
const header = document.createElement('header')
const h1 = document.createElement('h1')
const logo = document.createElement('img')

header.id = 'header'
logo.src = './images/icones/dragonQuestLogo.png'
logo.alt = 'Logo Dragon Quest'
logo.id = 'logo'

body.append(header)
header.append(h1)
h1.append(logo)

// Creation du Main
const main = document.createElement('main')
main.id = 'main'
body.append(main)

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



