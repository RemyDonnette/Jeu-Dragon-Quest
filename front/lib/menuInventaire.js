import { superposerEcran } from "./fonctionsEcran.js";


export function menuInventaire(ecranActuel) {
    // Fetch Objets
    fetch('http://localhost:3000/sauvegarde', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify()
    }).then((response) => {
        return response.json();
    }).then((data) => {
        localStorage.setItem('sauvegarde', JSON.stringify(data))
        localStorage.setItem('inventaire', JSON.stringify(data.inventaire))
    })

    fetch('http://localhost:3000/objets', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify()
    }).then((response) => {
        return response.json();
    }).then((data) => {
        localStorage.setItem('tabObjets', JSON.stringify(data))
    })


    const donneesSauvegarde = JSON.parse(localStorage.getItem('sauvegarde'))
    // les objets stockés dans le tableau doivent être les ids
    const objetsInventaire = JSON.parse(localStorage.getItem('inventaire'))
    const tabObjets = JSON.parse(localStorage.getItem('tabObjets'))

    const ecranInventaire = document.querySelector('#ecranInventaire')
    console.log(ecranInventaire)
    
    superposerEcran(ecranInventaire, ecranActuel)
    console.log(superposerEcran)

    const partieEcranObjets = document.querySelector('#partieEcranObjet')
    const partieEcranDescription = document.querySelector('#partieEcranDescription') 

    objetsInventaire.forEach((objetId) => {
        const labelObjet = document.createElement('label')
        const imageObjet = document.createElement('img')
        
        imageObjet.src = tabObjets[objetId].image
    });




}
