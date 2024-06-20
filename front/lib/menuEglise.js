import { fetchData } from "./fetch.js"
import { creerMain } from "./creerMain.js"
import { changerScript } from "./changerScript.js"

export function menuMagasin(nbRefVille) {
    // Fetch Sauvegarde et Objets
    fetchData('/sauvegarde').then((data) => {
        localStorage.setItem('sauvegarde', JSON.stringify(data))
    })
    fetchData('/sauvegarde').then((data) => {
        localStorage.setItem('inventaire', JSON.stringify(data.inventaire))
    })
    fetchData('/magasins').then((data) => {
        localStorage.setItem('magasins', JSON.stringify(data))
    })
    fetchData('/magasins').then((data) => {
        localStorage.setItem('articles', JSON.stringify(data.inventaire))
    })
    fetchData('/objets').then((data) => {
        localStorage.setItem('objets', JSON.stringify(data))
    })
    fetchData('/armes').then((data) => {
        localStorage.setItem('armes', JSON.stringify(data))
    })
    fetchData('/armures').then((data) => {
        localStorage.setItem('armures', JSON.stringify(data))
    })
    fetchData('/lieux').then((data) => {
        localStorage.setItem('lieux', JSON.stringify(data))
    })

    // Fetch des éléments nécéssaires
    const sauvegarde = JSON.parse(localStorage.getItem('sauvegarde'))
    const objetsInventaire = JSON.parse(localStorage.getItem('inventaire'))
    const infosMagasins = JSON.parse(localStorage.getItem('magasins'))
    const infosMagasinActuel = infosMagasins[nbRefVille]
    const articles = infosMagasins[nbRefVille].inventaire
    const objets = JSON.parse(localStorage.getItem('objets'))
    const armes = JSON.parse(localStorage.getItem('armes'))
    const armures = JSON.parse(localStorage.getItem('armures'))
    const lieux = JSON.parse(localStorage.getItem('lieux'))

    // creation du main et du magasin
    creerMain()
    const magasin = document.createElement('div')
    magasin.id = 'magasin'
    main.append(magasin)

    // Gestion de l'audio
    // const musiqueHeliodor = document.querySelector('#musique')
    // musiqueHeliodor.src = './audio/musiques/boutique.mp3'
    // musiqueHeliodor.loop = 'true'
    // musiqueHeliodor.play()

    // Création des zones de grid et leurs ids
    const ecranMagasin = document.createElement('div')
    const imageMagasin = document.createElement('img')
    const magasinArgentJoueur = document.createElement('div')
    const magasinSelectionAction = document.createElement('div')
    const magasinObjetIcone = document.createElement('div')
    const magasinObjetNom = document.createElement('div')
    const magasinObjetPrix = document.createElement('div')
    const magasinObjetImage = document.createElement('div')
    const magasinObjetDescription = document.createElement('div')
    const magasinObjetEffet = document.createElement('div')
    const magasinVendeurCharset = document.createElement('div')
    const magasinVendeurDialogue = document.createElement('div')
    const magasinBoxValidation = document.createElement('div')

    ecranMagasin.id = 'ecranMagasin'
    imageMagasin.className = 'imageFond'
    imageMagasin.src = infosMagasinActuel.image
    imageMagasin.alt = infosMagasinActuel.nom

    magasinArgentJoueur.id = 'magasinArgentJoueur'
    magasinSelectionAction.id = 'magasinSelectionAction' 
    magasinObjetIcone.id = 'magasinObjetIcone'
    magasinObjetNom.id = 'magasinObjetNom'
    magasinObjetPrix.id = 'magasinObjetPrix'
    magasinObjetImage.id = 'magasinObjetImage'
    magasinObjetDescription.id = 'magasinObjetDescription'
    magasinObjetEffet.id = 'magasinObjetEffet'
    magasinVendeurCharset.id = 'magasinVendeurCharset'
    magasinVendeurDialogue.id = 'magasinVendeurDialogue'
    magasinBoxValidation.id = 'magasinBoxValidation'
    
    magasin.append(ecranMagasin, imageMagasin)
    ecranMagasin.append(magasinArgentJoueur, magasinSelectionAction, magasinObjetIcone, magasinObjetNom, magasinObjetPrix, magasinObjetImage, magasinObjetDescription, magasinObjetEffet, magasinVendeurCharset, magasinVendeurDialogue, magasinBoxValidation)
    
    // remplissage de la colonne de selection
    const argentJoueur = document.createElement('span')
    argentJoueur.innerText = `${sauvegarde.argent} G`
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
}
/* 
<div id="egliseHeliodor">
    <i class="fa fa-right-from-bracket faa-passing faa-fast animated-hover deplacement boutonRetourHeliodorEglise" style="top: 90%; left: 94%"></i>
</div> 
*/