import { fetchData } from "./fetch.js"
import { superposerEcranGrid } from "./fonctionsEcran.js"

export function menuMagasin(ecranActuel) {
    // Fetch Sauvegarde et Objets
    fetchData('/sauvegarde').then((data) => {
        localStorage.setItem('sauvegarde', JSON.stringify(data))
    })
    fetchData('/sauvegarde').then((data) => {
        localStorage.setItem('inventaire', JSON.stringify(data.inventaire))
    })
    fetchData('/objets').then((data) => {
        localStorage.setItem('tabObjets', JSON.stringify(data))
    })

    // Fetch des éléments nécéssaires
    const sauvegarde = JSON.parse(localStorage.getItem('sauvegarde'))
    const objetsInventaire = JSON.parse(localStorage.getItem('inventaire'))
    const tabObjets = JSON.parse(localStorage.getItem('tabObjets'))
    const magasinHeliodor = document.querySelector('#magasinHeliodor')

    // Création des zones de grid
    const ecranMagasin = document.querySelector('#ecranMagasin')
    const magasinArgentJoueur = document.createElement('div')
    const magasinSelectionAction = document.createElement('div')
    const magasinObjetIcone = document.createElement('div')
    const magasinObjetNom = document.createElement('div')
    const magasinObjetPrix = document.createElement('div')
    const magasinObjetImage = document.createElement('div')
    const magasinObjetDescription = document.createElement('div')
    const magasinVendeurCharset = document.createElement('div')
    const magasinVendeurDialogue = document.createElement('div')
    const magasinBoxValidation = document.createElement('div')

    magasinArgentJoueur.id = 'magasinArgentJoueur'
    magasinSelectionAction.id = 'magasinSelectionAction' 
    magasinObjetIcone.id = 'magasinObjetIcone'
    magasinObjetNom.id = 'magasinObjetNom'
    magasinObjetPrix.id = 'magasinObjetPrix'
    magasinObjetImage.id = 'magasinObjetImage'
    magasinObjetDescription.id = 'magasinObjetDescription'
    magasinVendeurCharset.id = 'magasinVendeurCharset'
    magasinVendeurDialogue.id = 'magasinVendeurDialogue'
    magasinBoxValidation.id = 'magasinBoxValidation'

    ecranMagasin.append(magasinArgentJoueur, magasinSelectionAction, magasinObjetIcone, magasinObjetNom, magasinObjetPrix, magasinObjetImage, magasinObjetDescription, magasinVendeurCharset, magasinVendeurDialogue, magasinBoxValidation)


    const argentJoueur = document.createElement('span')
    argentJoueur.innerText = `${sauvegarde.argent} GOLD`
    magasinArgentJoueur.append(argentJoueur)

    const optionAcheter = document.createElement('span')
    const optionVendre = document.createElement('span')
    const optionSortir = document.createElement('span')

    optionAcheter.innerText = 'Acheter'
    optionVendre.innerText = 'Vendre'
    optionSortir.innerText = 'Sortir'

    magasinSelectionAction.append(optionAcheter, optionVendre, optionSortir)

    const vendeurCharset = document.createElement('img')
    vendeurCharset.src = './images/personnages/npc1.png'
    vendeurCharset.style.width = '100%'
    magasinVendeurCharset.append(vendeurCharset)
}