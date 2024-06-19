import { switchEcran } from "./lib/fonctionsEcran.js"
import { lancerCarteDuMonde } from "./lib/menuPrincipal.js"
import { menuMagasin } from "./lib/menuMagasin.js"



// Appel de la musique de fond
// const musiqueHeliodor = document.querySelector('#musique')
//     musiqueHeliodor.src = './audio/musiques/villeDQ11.mp3'
//     musiqueHeliodor.loop = 'true'
//     musiqueHeliodor.play()

// Creation du Main
const body = document.querySelector('#body')
const main = document.createElement('main')
main.id = 'main'
body.append(main)

// Création de la ville
const heliodor = document.createElement('div')
const imageFond = document.createElement('img')
const labelLieu = document.createElement('label')
const labelNomDuLieu = document.createElement('span')

heliodor.id = 'heliodor'
imageFond.id = 'imageFond'
imageFond.alt = 'Fond Heliodor'
imageFond.src = '../images/background/heliodor.png'
labelLieu.id = 'labelLieu'
labelNomDuLieu.id = 'labelNomDuLieu'

main.append(heliodor)
heliodor.append(imageFond, labelLieu)
labelLieu.append(nomDuLieu)


// Création du hover des lieux
const deplacement = document.querySelectorAll('.deplacement')
const lieu = document.querySelector('#labelLieu')
const nomDuLieu = document.querySelector('#labelNomDuLieu')
const imageLabel = document.createElement('img')
imageLabel.src = './images/background/banniereLieux.png'
imageLabel.id = 'imageLabelInterieur'
deplacement.forEach((punaise) => {
    const punaiseNomDuLieu = punaise.getAttribute('id')
    punaise.addEventListener('mouseenter', () => {
        nomDuLieu.innerText = punaiseNomDuLieu
        lieu.append(imageLabel)
    })
    punaise.addEventListener('mouseleave', () => {
        nomDuLieu.innerText = ''
        lieu.removeChild(imageLabel)
    })
})

// Liens vers les differents lieux
const magasinHeliodor = document.querySelector('#magasinHeliodor')
const egliseHeliodor = document.querySelector('#egliseHeliodor')
const boutonMagasin = document.querySelector('.boutonMagasinHeliodor')
const boutonEglise = document.querySelector('.boutonEgliseHeliodor')
const boutonRetourVersLaCarte = document.querySelector('.boutonRetourVersLaCarte')
const boutonRetourHeliodorMagasin = document.querySelector('.boutonRetourHeliodorMagasin')
const boutonRetourHeliodorEglise = document.querySelector('.boutonRetourHeliodorEglise')

boutonRetourVersLaCarte.addEventListener('click', () => {
    lancerCarteDuMonde(heliodor)
})
boutonMagasin.addEventListener('click', () => {
    switchEcran(heliodor, magasinHeliodor)
    const musiqueHeliodor = document.querySelector('#musique')
    musiqueHeliodor.src = './audio/musiques/boutique.mp3'
    musiqueHeliodor.loop = 'true'
    musiqueHeliodor.play()
    menuMagasin(magasinHeliodor, heliodor, 0)
})
boutonEglise.addEventListener('click', () => {
    switchEcran(heliodor, egliseHeliodor)
    const musiqueHeliodor = document.querySelector('#musique')
    musiqueHeliodor.src = './audio/musiques/eglise.mp3'
    musiqueHeliodor.loop = 'true'
    musiqueHeliodor.play()
})
boutonRetourHeliodorEglise.addEventListener('click', () => {
    switchEcran(egliseHeliodor, heliodor)
})