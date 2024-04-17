import { ajoutBarreDeVie, reduireVie, augmenterVie } from './fonctionsCombat.js'




export function menuCombat() {
    
    // Fetch Monstres
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
        
        localStorage.setItem('tabMonstres', JSON.stringify(data))
    })
    
    // Recuperation du tableau Monstres
    const tabMonstres = JSON.parse(localStorage.getItem('tabMonstres'))
    
    // Appel de la musique de combat
    const musiqueCombat = document.querySelector('#musique')
    musiqueCombat.src = './audio/musiques/combatSimple.mp3'
    musiqueCombat.loop = 'true'
    musiqueCombat.play()
    
    const ecranJoueur = document.querySelector('#ecranJoueur')
    const ecranMonstre = document.querySelector('#ecranMonstre')
    

    // Création du monstre
    function appelDuMonstre(i, ecran) {
        
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
    function appelDuHeros(ecran) {

        // Création du header vie + Nom
        const headerEcranJoueur = document.createElement('div')
        ecranJoueur.append(headerEcranJoueur)
        
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
    
    // Appel du Héros + données
    const donneesHeros = appelDuHeros(ecranJoueur)

    // Appel du monstre + données
    const donneesMonstre = appelDuMonstre(1, ecranMonstre)

    // Création des données de combat
    const vieMaxMonstre = donneesMonstre.vieMax
    const vieMonstre = donneesMonstre.vie
    const vieMaxJoueur = donneesMonstre.vieMax
    const vieJoueur = donneesMonstre.vie
    
    const attJoueur = 30

    // Création bouton Attaque
    const boutonAttaque = document.createElement('button')
    boutonAttaque.innerText = 'attaque'
    boutonAttaque.id = 'boutonAttaque'
    ecranJoueur.append(boutonAttaque)


    function tourDeJeu(tabMonstres) {

        function tourDuJoueur(tabMonstres) {
            boutonAttaque.addEventListener('click', () => { 
                // const coupEpee = document.createElement('audio')
                // coupEpee.src = ''
                // coupEpee.play()
                reduireVie(vieMaxMonstre, attJoueur)
            })
        }
        tourDuJoueur(tabMonstres)
        async function tourDuMonstre() {
            const tour = await tourDuJoueur()
        }
        tourDuMonstre()

    }
    tourDeJeu()

    function finCombat() {

        // Gestion de la musique et des sons
        const musiqueCombat = document.querySelector('#musique')
        musiqueCombat.pause()
        const jingleVictoire = document.createElement('audio')
        jingleVictoire.src = './audio/jingles/finCombat.mp3'
        jingleVictoire.play()

        //Suppression du monstre et de sa barre de vie
        const ecranMonstre = document.querySelector('#ecranMonstre')
        const ecranJoueur = document.querySelector('#ecranJoueur')
        const imageMonstre = document.querySelector('#imageMonstre')
        const barreDeVieMonstre = document.querySelector('#barreDeVieMonstre')
        const boutonAttaque = document.querySelector('#boutonAttaque')

        ecranMonstre.removeChild(imageMonstre)
        ecranMonstre.removeChild(barreDeVieMonstre)
        ecranJoueur.removeChild(boutonAttaque)

    }
}