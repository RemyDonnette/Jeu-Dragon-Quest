export function creerPersonnage(ecranCombat) {

    const sauvegarde = JSON.parse(localStorage.getItem('sauvegarde'))

    const emplacementPersonnage = document.createElement('div')
    const partieImage = document.createElement('div')
    const partieBarres = document.createElement('div')
    const imagePersonnage = document.createElement('img')
    const niveauPersonnage = document.createElement('span')
    const nomPersonnage = document.createElement('span')
    const barreDeVieMax = document.createElement('div')
    const headerBarreDeVie = document.createElement('div')
    const barreDeVie = document.createElement('div')
    const pv = document.createElement('span')
    const pointsDeVie = document.createElement('div')
    const barreDeMagieMax = document.createElement('div')
    const headerBarreDeMagie = document.createElement('div')
    const barreDeMagie = document.createElement('div')
    const pm = document.createElement('span')
    const pointsDeMagie = document.createElement('div')

    emplacementPersonnage.id = 'emplacementPersonnage'
    partieImage.id = 'partieImage'
    partieBarres.id = 'partieBarres'
    imagePersonnage.id = 'imagePersonnage'
    niveauPersonnage.id = 'niveauPersonnage'
    nomPersonnage.id = 'nomPersonnage'
    barreDeVieMax.id = 'barreDeVieMax'
    barreDeMagieMax.id = 'barreDeMagieMax'
    headerBarreDeVie.id = 'headerBarreDeVie'
    headerBarreDeMagie.id = 'headerBarreDeMagie'
    barreDeVie.id = 'barreDeVie'
    pointsDeVie.id = 'pointsDeVie'
    barreDeMagie.id = 'barreDeMagie'
    pointsDeMagie.id = 'pointsDeMagie'
    pv.id = 'pv'
    pm.id = 'pm'

    emplacementPersonnage.append(partieImage, partieBarres)
    partieImage.append(imagePersonnage, niveauPersonnage)
    partieBarres.append(nomPersonnage, barreDeVieMax, barreDeMagieMax)
    barreDeVieMax.append(barreDeVie, headerBarreDeVie)
    headerBarreDeVie.append(pv, pointsDeVie)
    barreDeMagieMax.append(barreDeMagie, headerBarreDeMagie)
    headerBarreDeMagie.append(pm, pointsDeMagie)

    imagePersonnage.src = sauvegarde.mini
    niveauPersonnage.innerText = `Niv : ${sauvegarde.niveau}`
    nomPersonnage.innerText = sauvegarde.nom
    pointsDeVie.innerText = sauvegarde.pv
    pointsDeMagie.innerText = sauvegarde.pm
    barreDeVie.style.width = `${sauvegarde.pv / sauvegarde.pvMax * 100}%`
    barreDeMagie.style.width = `${sauvegarde.pm / sauvegarde.pmMax * 100}%`
    pv.innerText = 'PV'
    pm.innerText = 'PM'

    ecranCombat.append(emplacementPersonnage)
}

// barreDeVie.className = 'barreDeVie'
// valeurBarreDeVie.className = 'valeurBarreDeVie'
// pointsDeVie.className = 'pointsDeVie'
// pointsDeVie.id = 'pointsDeVie'

// if (emplacement == emplacementBarreDeVie) {
//     valeurBarreDeVie.style.backgroundColor = 'green'
//     barreDeVie.id = 'barreDeVieJoueur'
//     valeurBarreDeVie.id = 'valeurBarreDeVieJoueur'
    
// } else if (emplacement == ecranMonstre) {
//     valeurBarreDeVie.style.backgroundColor = 'red'
//     barreDeVie.id = 'barreDeVieMonstre'
//     valeurBarreDeVie.id = 'valeurBarreDeVieMonstre'
// }


// export function majBarreDeVie(vieActuelle, vieMax, perso) {

//     const valeurBarreDeVie = document.getElementById(`valeurBarreDeVie${perso}`)
//     const pointsDeVie = document.getElementById('pointsDeVie')
    
//     const vie = vieActuelle / vieMax * 100

//     valeurBarreDeVie.style.width = `${vie}%`
//     pointsDeVie.style.innerText = `${vie}%`
// }