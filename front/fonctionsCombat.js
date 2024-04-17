
// Recuperation du tableau Monstres
const tabMonstres = JSON.parse(localStorage.getItem('tabMonstres'))

const ecranJoueur = document.querySelector('#ecranJoueur')
const headerEcranJoueur = document.querySelector('#headerEcranJoueur')
const ecranMonstre = document.querySelector('#ecranMonstre')

// Création du monstre
export function appelDuMonstre(i, ecran) {
        
    // Images du monstre
    const imageMonstre = document.createElement('img')
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

    // Création du header vie + Nom
    // const headerEcranJoueur = document.createElement('div')
    // ecranJoueur.append(headerEcranJoueur)
    
    const nomHeros = document.createElement('h2')
    nomHeros.innerText = tabMonstres[0].nom
    headerEcranJoueur.append(nomHeros)
    ajoutBarreDeVie(headerEcranJoueur)
    
    // Creation de l'image du héros
    const imageHeros = document.createElement('img')
    const urlImageHeros = tabMonstres[0].image
    
    imageHeros.src = urlImageHeros
    imageHeros.style.width = '50%'
    
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
    
    if (emplacement == headerEcranJoueur) {
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
