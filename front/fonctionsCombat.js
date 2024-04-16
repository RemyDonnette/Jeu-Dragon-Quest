import { finCombat } from './menuCombat.js'

export function ajoutBarreDeVie(emplacement) {
    const barreDeVie = document.createElement('div')
    const valeurBarreDeVie = document.createElement('div')
    const pointsDeVie = document.createElement('div')

    barreDeVie.className = 'barreDeVie'
    valeurBarreDeVie.className = 'valeurBarreDeVie'
    valeurBarreDeVie.id = 'valeurBarreDeVie'
    pointsDeVie.className = 'pointsDeVie'
    pointsDeVie.id = 'pointsDeVie'

    if (emplacement == ecranJoueur) {
        valeurBarreDeVie.style.backgroundColor = 'green'
        barreDeVie.id = 'barreDeVieJoueur'
    } else if (emplacement == ecranMonstre) {
        valeurBarreDeVie.style.backgroundColor = 'red'
        barreDeVie.id = 'barreDeVieMonstre'
    }

    emplacement.append(barreDeVie)
    barreDeVie.append(valeurBarreDeVie, pointsDeVie)
}

export function majBarreDeVie(vieMax, vieActuelle) {

    const valeurBarreDeVie = document.getElementById('valeurBarreDeVie')
    const pointsDeVie = document.getElementById('pointsDeVie')
    
    const vie = vieActuelle / vieMax * 100

    valeurBarreDeVie.style.width = `${vie}%`
    pointsDeVie.style.innerText = `${vie}%`
}

export function reduireVie(vieMaxMonstre, attJoueur) {
    
    const tabMonstres = JSON.parse(localStorage.getItem('tabMonstres'))
    const vieMonstre = tabMonstres[1].vie
    
    const vieReduite =  vieMonstre - attJoueur
    majBarreDeVie(vieMaxMonstre, vieReduite)
    tabMonstres[1].vie = vieReduite
    localStorage.setItem('tabMonstres', JSON.stringify(tabMonstres))

    if (vieMonstre <= 0) {
        finCombat()
    }
}

export function augmenterVie(vieMaxJoueur, vieJoueur, vieRegen) {

    const tabMonstres = JSON.parse(localStorage.getItem('tabMonstres'))
    const vie = vieJoueur + vieRegen
    
    majBarreDeVie(vieMaxJoueur, vie)
    tabMonstres[0].vie = vie
}
