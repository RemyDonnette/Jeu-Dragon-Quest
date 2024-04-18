
// Recuperation du tableau Monstres
const tabMonstres = JSON.parse(localStorage.getItem('tabMonstres'))

const ecranJoueur = document.querySelector('#ecranJoueur')
const ecranMonstre = document.querySelector('#ecranMonstre')
const headerEcranJoueur = document.querySelector('#headerEcranJoueur')
const emplacementBarreDeVie = document.querySelector('#emplacementBarreDeVie')
const imageMonstre = document.createElement('img')

// Création du monstre
export function appelDuMonstre(i, ecran) {
    
    // Images du monstre
    const urlImageMonstre = tabMonstres[i].image
    const tailleImageMonstre = tabMonstres[i].taille
    const decalageImageMonstre = tabMonstres[i].decalage
    
    imageMonstre.src = urlImageMonstre
    imageMonstre.id = "imageMonstre"
    imageMonstre.style.width = tailleImageMonstre
    imageMonstre.style.paddingBottom = decalageImageMonstre
    imageMonstre.classList.add('fa-bounce')
    
    ajoutBarreDeVie(ecranMonstre)
    ecran.append(imageMonstre)

    // Données du monstres
    return tabMonstres[i]
}

// Création du Joueur
export function appelDuHeros(ecran) {
    
    const nomHeros = document.createElement('h2')
    const lvlHeros = document.createElement('h2')
    nomHeros.innerText = tabMonstres[0].nom
    lvlHeros.innerText = `Lvl:${tabMonstres[0].niveau}`
    headerEcranJoueur.append(nomHeros)
    headerEcranJoueur.append(lvlHeros)
    
    // Creation de l'image du héros
    const imageHeros = document.createElement('img')
    const urlImageHeros = tabMonstres[0].image
    
    imageHeros.src = urlImageHeros
    imageHeros.id = 'imageHeros'
    
    ajoutBarreDeVie(emplacementBarreDeVie)
    ecran.append(imageHeros)

    // Données du joueur
    return tabMonstres[0]
}

export function ajoutBarreDeVie(emplacement) {
    const barreDeVie = document.createElement('div')
    const valeurBarreDeVie = document.createElement('div')
    const pointsDeVie = document.createElement('div')

    barreDeVie.className = 'barreDeVie'
    valeurBarreDeVie.className = 'valeurBarreDeVie'
    pointsDeVie.className = 'pointsDeVie'
    pointsDeVie.id = 'pointsDeVie'
    
    if (emplacement == emplacementBarreDeVie) {
        valeurBarreDeVie.style.backgroundColor = 'green'
        barreDeVie.id = 'barreDeVieJoueur'
        valeurBarreDeVie.id = 'valeurBarreDeVieJoueur'
        
    } else if (emplacement == ecranMonstre) {
        valeurBarreDeVie.style.backgroundColor = 'red'
        barreDeVie.id = 'barreDeVieMonstre'
        valeurBarreDeVie.id = 'valeurBarreDeVieMonstre'
    }
    
    emplacement.append(barreDeVie)
    barreDeVie.append(valeurBarreDeVie, pointsDeVie)
}

export function majBarreDeVie(vieActuelle, vieMax, perso) {

    const valeurBarreDeVie = document.getElementById(`valeurBarreDeVie${perso}`)
    const pointsDeVie = document.getElementById('pointsDeVie')
    
    const vie = vieActuelle / vieMax * 100

    valeurBarreDeVie.style.width = `${vie}%`
    pointsDeVie.style.innerText = `${vie}%`
}

export function disparitionMonstre() {
    imageMonstre.animate([
        {
            opacity: 1,
            opacity: 0,
        }
        ], {
            duration: 2000,
        })
}