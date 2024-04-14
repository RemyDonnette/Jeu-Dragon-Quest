import { majBarreDeVie, ajoutBarreDeVie, reduireVie, augmenterVie } from './fonctionsCombat.js'

export function menuCombat() {
    fetch('http://localhost:3000/monstres', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify()

    }).then((response) => {
        return response.json();

    }).then((data) => {
        const tabMonstres = data

        // Partie ecran
        const ecran = document.querySelector('#ecran')
        ecran.classList.toggle('ecranCombat')

        // Création du monstre
        const imageMonstre = document.createElement('img')
        const urlImageMonstre = tabMonstres[1].image
        const tailleImageMonstre = tabMonstres[1].taille
        const decalageImageMonstre = tabMonstres[1].decalage

        imageMonstre.src = urlImageMonstre
        imageMonstre.style.width = tailleImageMonstre
        imageMonstre.style.paddingBottom = decalageImageMonstre

        ajoutBarreDeVie(ecran)
        ecran.append(imageMonstre)


        // Partie Controles
        const controles = document.querySelector('#controles')
        controles.classList.toggle('controlesCombat')

        // Création du header vie + Nom
        const headerControles = document.createElement('div')
        controles.append(headerControles)

        const nomHeros = document.createElement('h2')
        nomHeros.innerText = tabMonstres[0].nom
        headerControles.append(nomHeros)

        ajoutBarreDeVie(headerControles)
        
        
        const imageHeros = document.createElement('img')
        const urlImageHeros = tabMonstres[0].image
        
        imageHeros.src = urlImageHeros
        imageHeros.style.width = '50%'
        
        controles.append(imageHeros)





        let vie = 100
        let attM = 5
        const boutonAttaque = document.createElement('button')
        boutonAttaque.innerText = 'attaque'
        controles.append(boutonAttaque)

        boutonAttaque.addEventListener('click', () => {
            reduireVie(vie, attM)
        })
    })
}