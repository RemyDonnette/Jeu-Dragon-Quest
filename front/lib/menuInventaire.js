import { superposerEcran } from "./fonctionsEcran.js";
import { fetchData } from "./fetch.js";


export function menuInventaire(ecranActuel) {
    // Fetch Sauvegarde et Objets
    fetchData('/sauvegarde').then((data) => {
        localStorage.setItem('inventaire', JSON.stringify(data.inventaire))
    })
    fetchData('/objets').then((data) => {
        localStorage.setItem('tabObjets', JSON.stringify(data))
    })

    const donneesSauvegarde = JSON.parse(localStorage.getItem('sauvegarde'))
    // les objets stockés dans le tableau doivent être les ids
    const objetsInventaire = JSON.parse(localStorage.getItem('inventaire'))
    const tabObjets = JSON.parse(localStorage.getItem('tabObjets'))

    // Selection et Superposition des écrans
    const ecranInventaire = document.querySelector('#ecranInventaire')
    const partieEcranObjets = document.querySelector('#partieEcranObjets')
    const partieEcranDescription = document.querySelector('#partieEcranDescription') 
    superposerEcran(ecranInventaire, ecranActuel)

    // Création des objets à partir de la sauvegarde
    objetsInventaire.forEach((objet) => {
        console.log(objet.id)
        console.log(objet.nb)
        
        const emplacementObjet = document.createElement('div')
        const labelObjet = document.createElement('label')
        const imageObjet = document.createElement('img')
        const nombreObjet = document.createElement('p')
        const descriptionObjet = document.createElement('p')

        console.log(nombreObjet)
        
        emplacementObjet.id = 'emplacementObjet'
        imageObjet.className = 'imageObjet'
        nombreObjet.id = 'nombreObjet'
        descriptionObjet.id = 'descriptionObjet'


        imageObjet.src = tabObjets[objet.id].image
        nombreObjet.innerText = objet.nb
        descriptionObjet.innerText = tabObjets[objet.id].description

        partieEcranObjets.append(emplacementObjet)
        emplacementObjet.append(labelObjet)
        labelObjet.append(imageObjet)
        labelObjet.append(nombreObjet)
        partieEcranDescription.append(descriptionObjet)
    });
}
