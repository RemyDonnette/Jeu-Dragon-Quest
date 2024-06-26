import { fetchData } from "./fetch.js"
import { menuMagasin } from "./menumagasin.js"
import { menuCarteDuMonde } from "./menuCarte.js"
import { menuEglise } from "./menuEglise.js"

export function creerVille (nbRefVille) {

    const donneesLieux = JSON.parse(localStorage.getItem('villes'))

    const ville = document.createElement('div')
    const imageFond = document.createElement('img')
    const labelLieu = document.createElement('label')
    const labelNomDuLieu = document.createElement('span')
    const imageLabel = document.createElement('img')

    ville.id = 'ville'
    imageFond.className = 'imageFond'
    imageFond.alt = `Fond ${donneesLieux[nbRefVille].nom}`
    imageFond.src = `./images/background/villes/${donneesLieux[nbRefVille].divId}.png`
    labelLieu.id = 'labelLieu'
    labelNomDuLieu.id = 'labelNomDuLieu'
    imageLabel.src = './images/background/banniereLieux.png'
    imageLabel.id = 'imageLabelInterieur'

    main.append(ville)
    ville.append(imageFond, labelLieu)
    labelLieu.append(labelNomDuLieu)

    const batiments = donneesLieux[nbRefVille].batiments
    
    batiments.forEach((batiment) => {

        const bouton = document.createElement('i')
        bouton.classList.add('fa', 'fa-location-pin', 'faa-vertical', 'animated-hover', 'deplacement')
        bouton.id = batiment.nom
        bouton.style.top = `${batiment.top}%`
        bouton.style.left = `${batiment.left}%`
        ville.append(bouton)

        bouton.addEventListener('mouseenter', () => {
            labelNomDuLieu.innerText = batiment.nom
            labelLieu.append(imageLabel)
        })
        bouton.addEventListener('mouseleave', () => {
            labelNomDuLieu.innerText = ''
            labelLieu.removeChild(imageLabel)
        })

        bouton.addEventListener('click', () => {
            
            switch (batiment.nom) {
                case 'Magasin':
                    main.remove()
                    menuMagasin(nbRefVille)
                    break;
                case 'Eglise':
                    main.remove()
                    menuEglise(nbRefVille)
                    break;
                case 'Retour vers la carte':
                    main.remove()
                    menuCarteDuMonde()
                    break;
                default:
                    break;
            }
        })
    })
}