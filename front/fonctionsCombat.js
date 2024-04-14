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

export function majBarreDeVie(vie) {

    const valeurBarreDeVie = document.getElementById('valeurBarreDeVie')
    const pointsDeVie = document.getElementById('pointsDeVie')
    
    vie = Math.max(0, Math.min(100, vie))
    
    valeurBarreDeVie.style.width = `${vie}%`
    pointsDeVie.style.innerText = `${vie}%`
}

export function reduireVie(vie, valeur) {
    const newVie = vie - valeur
    majBarreDeVie(newVie)
}

export function augmenterVie(vie, valeur) {
    vie += valeur*
    majBarreDeVie(vie)
}