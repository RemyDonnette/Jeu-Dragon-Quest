import { superposerEcran } from "./fonctionsEcran.js";


export function menuInventaire(ecranActuel) {
    // Fetch Objets
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

    const ecranInventaire = document.querySelector('#ecranInventaire')
    console.log(ecranInventaire)
    
    superposerEcran(ecranInventaire, ecranActuel)
    console.log(superposerEcran)





}
