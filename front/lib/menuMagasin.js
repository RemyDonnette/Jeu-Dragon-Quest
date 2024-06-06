import { fetchData } from "./fetch.js"

export function menuInventaire(ecranActuel) {
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

    const sauvegarde = JSON.parse(localStorage.getItem('sauvegarde'))
    const objetsInventaire = JSON.parse(localStorage.getItem('inventaire'))
    const tabObjets = JSON.parse(localStorage.getItem('tabObjets'))

    superposerEcran(ecranMagasin, ecranActuel)
}