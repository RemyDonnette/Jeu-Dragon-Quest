// import { appelDuHeros, appelDuMonstre, majBarreDeVie, disparitionMonstre } from './fonctionsCombat.js'
// import { menuInventaire } from './menuInventaire.js';
// import { switchEcran } from './fonctionsEcran.js';


// const sauvegarde = JSON.parse(localStorage.getItem('sauvegarde')) 

// export let pvJoueur = sauvegarde.pv

// export function menuCombat() {
    
//     // Recuperation du tableau Monstres
//     const tabMonstres = JSON.parse(localStorage.getItem('monstres'))

//     // Appel de la musique et des sons de combat
//     const musiqueCombat = document.querySelector('#musique')
//     const sonsCombat = document.querySelector('#sons')
//     musiqueCombat.src = './audio/musiques/combatSimple.mp3'
//     musiqueCombat.loop = 'true'
//     musiqueCombat.play()

//     // Determination de tout les emplacements de combats
//     const ecranCombat = document.querySelector('#ecranCombat')
//     const ecranJoueur = document.querySelector('#ecranJoueur')
//     const ecranMonstre = document.querySelector('#ecranMonstre')
//     const emplacementBoutons = document.querySelector('#emplacementBoutons')
    
//     // Appel du monstre + données
//     const donneesMonstre = appelDuMonstre(1, ecranMonstre)
    
//     // Appel du Héros + données
//     const donneesJoueur = appelDuHeros(ecranJoueur)
    
//     // Création des données de combat du monstre
//     let pvMonstre = donneesMonstre.pv
//     const nomMonstre = donneesMonstre.nom
//     const pvMaxMonstre = donneesMonstre.pvMax
//     const forceMonstre = donneesMonstre.force
//     const vitaliteMonstre = donneesMonstre.vitalite
//     const agiliteMonstre = donneesMonstre.agilite
//     const sagesseMonstre = donneesMonstre.sagesse
//     const critiqueMonstre = donneesMonstre.critique
    
//     // Création des données de combat du joueur
//     const pvMaxJoueur = donneesJoueur.pvMax
//     const forceJoueur = donneesJoueur.force
//     const vitaliteJoueur = donneesJoueur.vitalite
//     const agiliteJoueur = donneesJoueur.agilite
//     const sagesseJoueur = donneesJoueur.sagesse
//     const critiqueJoueur = donneesJoueur.critique

//     const attMonstre = forceMonstre
//     const defMonstre = vitaliteMonstre
    
//     const attJoueur = forceJoueur //+ puissArme 
//     const defJoueur = vitaliteJoueur //+ resArmure

//     // Création bouton Attaque
//     const boutonAttaque = document.createElement('img')
//     boutonAttaque.src = './images/icones/boutonAttaque.png'
//     boutonAttaque.id = 'boutonAttaque'
//     boutonAttaque.className = 'boutonCombat'
//     emplacementBoutons.append(boutonAttaque)

//     // Création bouton Inventaire
//     const boutonInventaire = document.createElement('img')
//     boutonInventaire.src = './images/icones/boutonInventaire.png'
//     boutonInventaire.id = 'boutonInventaire'
//     boutonInventaire.className = 'boutonCombat'
//     emplacementBoutons.append(boutonInventaire)

//     // Création bouton fuite
//     const boutonFuite = document.createElement('img')
//     boutonFuite.src = './images/icones/boutonFuite.png'
//     boutonFuite.id = 'boutonFuite'
//     boutonFuite.className = 'boutonCombat'
//     emplacementBoutons.append(boutonFuite)

//     // Ammorce des tours
//     let tourMonstre = 0
//     let tourJoueur = 0

//     // Démarrer le combat
//     initiative();

//     // Fonction pour déterminer l'ordre d'attaque
//     function initiative() {
//         let initiativeJoueur = agiliteJoueur * (Math.random() + 0.5)
//         let initiativeMonstre = agiliteMonstre * (Math.random() + 0.5)
//         if (initiativeJoueur > initiativeMonstre) {
//             setTimeout(tourDuJoueur, 1000)
//         } else if (initiativeJoueur < initiativeMonstre && tourMonstre === 0) {
//             console.log(`Embuscade ! Un ${nomMonstre} vous attaque par surprise !`)
//             setTimeout(tourDuMonstre, 1000)
//         } else if (initiativeJoueur < initiativeMonstre && tourMonstre !== 0) {
//             console.log(`Le ${nomMonstre} attaque en premier !`)
//             setTimeout(tourDuMonstre, 1000)
//         } else {
//         // En cas d'égalité d'agilité, le joueur a la priorité
//             setTimeout(tourDuJoueur, 1000)
//         }
//     }

//     // Fonction pour le tour du joueur
//     function tourDuJoueur() {
//         tourJoueur++
//         boutonAttaque.style.display = 'flex'
//         boutonAttaque.addEventListener('click', clickAttaque)
//         boutonInventaire.addEventListener('click', clickInventaire)
//         boutonFuite.addEventListener('click', clickFuite)

//     }
    
    
//     function clickAttaque() { 
//         attaqueJoueur()
//         if (!verifierFin() && tourMonstre !== tourJoueur) {
//             setTimeout(tourDuMonstre, 1500)
//         } else if (!verifierFin() && tourMonstre === tourJoueur) {
//             initiative()
//         }
//         boutonAttaque.removeEventListener('click', clickAttaque)
//     }
    
//     function clickInventaire() {
//         menuInventaire(ecranCombat)
//     }

//     function clickFuite() {
//         let initiativeJoueur = agiliteJoueur * (Math.random() + 0.5)
//         let initiativeMonstre = agiliteMonstre * (Math.random() + 0.5)
//         if (initiativeJoueur >= initiativeMonstre) {
//             console.log('Vous avez réussi à fuir !')
//             setTimeout(lancerCarteDuMonde(ecranCombat), 3000)
//         } else if (initiativeJoueur < initiativeMonstre) {
//             console.log(`Le ${nomMonstre} vous empêche de fuir !`)
//             setTimeout(tourDuMonstre, 1000)
//         }
//     }

//     function attaqueJoueur() {
//         // Vérification de l'esquive
//         let esquiveMonstre = agiliteMonstre * (Math.random() / 10 + 0.1) / 100
//         if (Math.random() < esquiveMonstre) {
//             console.log(`Le ${nomMonstre} esquive l'attaque du joueur !`)
//             return;
//         }
        
//         let degats = Math.round((attJoueur - defMonstre) * (Math.random() / 5 + 0.90) + Math.round(Math.random()));
        
//         // Vérification du coup critique
//         if (Math.random() < critiqueJoueur / 100) {
//             degats = Math.round(attJoueur * (Math.random() / 5 + 0.90) + Math.round(Math.random()))
//             console.log("Coup critique !")
//         } else {
//             sonsCombat.src = './audio/sons/sword.mp3'
//             sonsCombat.play()
//         }
        
//         pvMonstre -= degats
        
//         setTimeout(() => {
//             majBarreDeVie(pvMonstre, pvMaxMonstre, 'Monstre')
//             console.log(`Le joueur attaque et inflige ${degats} points de dégâts au ${nomMonstre}.`)
//         }, 700)
//     }

//     // Fonction pour le tour du monstre
//     function tourDuMonstre() {
//         tourMonstre++
//         attaqueMonstre()
//         if (!verifierFin() && (tourMonstre !== tourJoueur)) {
//             setTimeout(tourDuJoueur, 1500)
//         } else if (!verifierFin() && (tourMonstre === tourJoueur)) {
//             initiative()
//         }
//     }
    
//     function attaqueMonstre() {
//     // Vérification de l'esquive
//         let esquiveJoueur = agiliteJoueur * (Math.random() / 10 + 0.1) / 100
//         if (Math.random() < esquiveJoueur) {
//         console.log(`Le joueur esquive l'attaque du ${nomMonstre} !`)
//         return;
//         }
    
//         let degats = Math.round((attMonstre - defJoueur) * (Math.random() / 5 + 0.90) + Math.round(Math.random()))

//         if (Math.random() < critiqueMonstre / 100) {
//             degats = Math.round(attMonstre * (Math.random() / 5 + 0.90) + Math.round(Math.random()))
//             console.log("Coup critique !")
//         } else {
//             sonsCombat.src = './audio/sons/sword.mp3'
//             sonsCombat.play()
//         }

//         pvJoueur -= degats

//         setTimeout(() => {
//             majBarreDeVie(pvJoueur, pvMaxJoueur, 'Joueur')
//             console.log(`Le ${nomMonstre} attaque et inflige ${degats} points de dégâts au joueur.`)
//         }, 700)
//     }

//      // Fonction pour vérifier si le combat est terminé
//     function verifierFin() {
//         if (pvJoueur <= 0) {
//         console.log("Game Over !")
//         return true
//         } else if (pvMonstre <= 0) {
//             victoireCombat()
//         return true
//         }
//         return false
//     }


    
//     function victoireCombat() {
//         // Animation de disparition
//         setTimeout(() => {
//             disparitionMonstre()
//         }, 2000)

//         setTimeout(() => {
//             console.log('Victoire !')
//             //Suppression du monstre et de sa barre de vie
//             const imageMonstre = document.querySelector('#imageMonstre')
//             const barreDeVieMonstre = document.querySelector('#barreDeVieMonstre')
//             const emplacementBoutons = document.querySelector('#emplacementBoutons')
            
//             ecranMonstre.removeChild(imageMonstre)
//             ecranMonstre.removeChild(barreDeVieMonstre)
//             emplacementBoutons.style.display = 'none'
            
//             // Gestion de la musique et des sons
//             const musiqueCombat = document.querySelector('#musique')
//             musiqueCombat.pause()
//             const jingleVictoire = document.querySelector('#sons')
//             jingleVictoire.src = './audio/jingles/finCombat.mp3'
//             jingleVictoire.play()
//         }, 3000)
//     }
// }

// /* 
// <div id="ecranCombat">
//     <div id="ecranMonstre"></div>
//     <div id="ecranJoueur">
//         <div id="headerPlusBoutons">
//             <div id="headerEcranJoueur">
//                 <div id="emplacementNomNiveau"></div>
//                 <div id="emplacementBarreDeVie"></div>
//             </div>
//             <div id="emplacementImageHeros"></div>
//             <div id="emplacementBoutons"></div>
//         </div>
//         <div id="emplacementImageHerosMini"></div>
//     </div>
// </div> 
// */