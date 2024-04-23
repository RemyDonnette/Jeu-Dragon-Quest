import { superposerEcran } from "./fonctionsEcran";


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

    const ecranObjets = document.querySelector('#ecranObjets')
    const ecranStats = document.querySelector('#ecranStats')
    
    superposerEcran(ecranObjets, ecranActuel)





}
