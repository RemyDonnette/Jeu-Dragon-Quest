import { superposerEcran } from "./fonctionsEcran.js";
import { fetchData } from "./fetch.js";
import { appelDesStats, majBarreDeVie } from "./fonctionsCombat.js";


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
    fetchData('/monstres').then((data) => {
        localStorage.setItem('tabMonstres', JSON.stringify(data))
    })


    // les objets stockés dans le tableau doivent être les ids
    const sauvegarde = JSON.parse(localStorage.getItem('sauvegarde'))
    const objetsInventaire = JSON.parse(localStorage.getItem('inventaire'))
    const tabObjets = JSON.parse(localStorage.getItem('tabObjets'))
    const tabMonstres = JSON.parse(localStorage.getItem('tabMonstres'))

    // Selection et Superposition des écrans
    const ecranInventaire = document.querySelector('#ecranInventaire')
    const listeObjets = document.querySelector('#listeObjets') 
    const descriptionObjet = document.querySelector('#descriptionObjet')
    superposerEcran(ecranInventaire, ecranActuel)

    console.log(sauvegarde)

    // Création des objets à partir de la sauvegarde
    objetsInventaire.forEach((objet) => {
        
        const emplacementObjet = document.createElement('div')
        const imageObjet = document.createElement('img')
        const nombreObjet = document.createElement('p')
        
        emplacementObjet.id = 'emplacementObjet'
        imageObjet.className = 'imageObjet'
        nombreObjet.id = 'nombreObjet'

        imageObjet.src = tabObjets[objet.id].image
        nombreObjet.innerText = objet.nb

        listeObjets.append(emplacementObjet)
        emplacementObjet.append(imageObjet)
        emplacementObjet.append(nombreObjet)

        emplacementObjet.addEventListener('mouseenter', () => {
            imageObjet.classList.toggle('fa-fade')
            descriptionObjet.style.border = 'solid'
            descriptionObjet.innerText = tabObjets[objet.id].description
        })
        emplacementObjet.addEventListener('mouseleave', () => {
            imageObjet.classList.toggle('fa-fade')
            descriptionObjet.style.border = ''
            descriptionObjet.innerText = ''
        })
        emplacementObjet.addEventListener('click', () => {
            sauvegarde.pv + objet.effet
            objet.nb -= 1
            nombreObjet.innerText = objet.nb
            majBarreDeVie(sauvegarde.pv, sauvegarde.pvMax, 'Joueur')
            if (objet.nb <= 0) {
                listeObjets.removeChild(emplacementObjet)
                descriptionObjet.innerText = ''
            }
        })
    })

    // Construction de l'écran Stats en fonction de la sauvegarde
    appelDesStats()

}

/* 
<div id="ecranInventaire">
    <div id="ecranObjets">
        <div id="partieEcranObjets">
            <div id="listeObjets"></div>
        </div>
        <div id="partieEcranDescription">
            <p id="descriptionObjet"></p>
        </div>
    </div>
    <div id="ecranStats">
        <div id="headerPlusBoutonsS">
            <div id="headerEcranJoueurS">
                <div id="emplacementNomNiveauS"></div>
                <div id="emplacementBarreDeVieS"></div>
            </div>
            <div id="emplacementStatsHeros"></div>
            <div id="emplacementBoutonsS"></div>
        </div>
        <div id="emplacementStatsHerosMini"></div>
    </div>
</div>
*/