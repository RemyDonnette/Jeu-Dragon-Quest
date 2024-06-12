import { fetchData } from "./fetch.js"
import { superposerEcranGrid } from "./fonctionsEcran.js"

export function menuMagasin(ville) {
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

    // remplissage de la colonne de selection
    const argentJoueur = document.createElement('span')
    argentJoueur.innerText = `${sauvegarde.argent} GOLD`
    magasinArgentJoueur.append(argentJoueur)

    const optionAcheter = document.createElement('span')
    const optionVendre = document.createElement('span')
    const optionSortir = document.createElement('span')

    optionAcheter.innerText = 'Acheter'
    optionAcheter.id = 'optionAcheter'
    optionVendre.innerText = 'Vendre'
    optionVendre.id = 'optionVendre'
    optionSortir.innerText = 'Sortir'
    optionSortir.id = 'optionSortir'

    magasinSelectionAction.append(optionAcheter, optionVendre, optionSortir)

    // remplissage la ligne du vendeur
    const vendeurCharset = document.createElement('img')
    vendeurCharset.src = './images/personnages/npc1.png'
    vendeurCharset.style.width = '100%'
    magasinVendeurCharset.append(vendeurCharset)

    const vendeurDialogue = document.createElement('p')
    vendeurDialogue.innerText = 'J\'ai plein d\'armes et d\'objets en stock ! Qu\'est ce qu\'il te faut ?'
    magasinVendeurDialogue.append(vendeurDialogue)

    // remplissage des objets
    console.log(objetsInventaire)
    optionAcheter.addEventListener('click', () => {

    })
    optionVendre.addEventListener('click', () => {
        objetsInventaire.forEach((objet) => {
            const objetIcone = document.createElement('img')
            const objetNom = document.createElement('span')
            const objetPrix = document.createElement('span')
            const objetImage = document.createElement('img')
            const objetDescription = document.createElement('p')

            objetIcone.src = tabObjets[objet.id].image
            objetIcone.id = 'objetIcone'
            objetNom.innerText = tabObjets[objet.id].nom
            objetNom.id = 'objetNom'
            objetPrix.innerText = tabObjets[objet.id].prixVente
            objetPrix.id = 'objetPrix'
            
            magasinObjetIcone.append(objetIcone)
            magasinObjetNom.append(objetNom)
            magasinObjetPrix.append(objetPrix)
            magasinObjetImage.append(objetImage)
            magasinObjetDescription.append(objetDescription)
            
            objetIcone.addEventListener('mouseenter', () => {
                magasinObjetImage.style.display = 'flex'
                magasinObjetDescription.style.display = 'flex'
                ecranMagasin.id = 'ecranMagasinD'
                objetImage.src = tabObjets[objet.id].image
                objetImage.id = 'objetImage'
                objetDescription.innerText = tabObjets[objet.id].description
                })
            objetIcone.addEventListener('mouseleave', () => {
                ecranMagasin.id = 'ecranMagasin'
                magasinObjetImage.style.display = 'none'
                magasinObjetDescription.style.display = 'none'
                objetImage.src = ''
                objetDescription.innerText = ''
            })



        });
    })
}