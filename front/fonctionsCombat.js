export function ajoutBarreDeVie(emplacement) {
    const barreDeVie = document.createElement('div')
    const valeurBarreDeVie = document.createElement('div')
    const pointsDeVie = document.createElement('div')

    barreDeVie.className = 'barreDeVie'
    valeurBarreDeVie.className = 'valeurBarreDeVie'
    valeurBarreDeVie.id = 'valeurBarreDeVie'
    pointsDeVie.className = 'pointsDeVie'
    pointsDeVie.id = 'pointsDeVie'

    if (emplacement == controles) {
        valeurBarreDeVie.style.backgroundColor = 'green'
    } else if (emplacement == ecran) {
        valeurBarreDeVie.style.backgroundColor = 'red'
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

export function reduireVie(vieMaxMonstre, attMonstre) {
    
    const tabMonstres = JSON.parse(localStorage.getItem('tabMonstres'))
    const vie = tabMonstres[1].vie

    if (vie > 0) {
        const vieReduite =  vie - attMonstre
        majBarreDeVie(vieMaxMonstre, vieReduite)
        tabMonstres[1].vie = vieReduite
        localStorage.setItem('tabMonstres', JSON.stringify(tabMonstres))
    } else {
        finCombat()
    }
    console.log(vie)
}

export function augmenterVie(vieMaxJoueur, vieJoueur, vieRegen) {

    const tabMonstres = JSON.parse(localStorage.getItem('tabMonstres'))
    const vie = vieJoueur + vieRegen
    
    majBarreDeVie(vieMaxJoueur, vie)
    tabMonstres[0].vie = vie
}
