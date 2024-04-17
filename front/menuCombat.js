import { appelDuHeros, appelDuMonstre, majBarreDeVie } from './fonctionsCombat.js'

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
    
    // Appel du monstre + données
    const donneesMonstre = appelDuMonstre(1, ecranMonstre)
    
    // Appel du Héros + données
    const donneesJoueur = appelDuHeros(ecranJoueur)
    
    // Création des données de combat du monstre
    let pvMonstre = donneesMonstre.pv
    const pvMaxMonstre = donneesMonstre.pvMax
    const forceMonstre = donneesMonstre.force
    const vitaliteMonstre = donneesMonstre.vitalite
    const agiliteMonstre = donneesMonstre.agilite
    const sagesseMonstre = donneesMonstre.sagesse
    const critiqueMonstre = donneesMonstre.critique
    
    // Création des données de combat du joueur
    let pvJoueur = donneesJoueur.pv
    const pvMaxJoueur = donneesJoueur.pvMax
    const forceJoueur = donneesJoueur.force
    const vitaliteJoueur = donneesJoueur.vitalite
    const agiliteJoueur = donneesJoueur.agilite
    const sagesseJoueur = donneesJoueur.sagesse
    const critiqueJoueur = donneesJoueur.critique

    const attMonstre = forceMonstre
    const defMonstre = vitaliteMonstre
    
    const attJoueur = forceJoueur //+ puissArme
    const defJoueur = vitaliteJoueur //+ resArmure

    // Création bouton Attaque
    const boutonAttaque = document.createElement('button')
    boutonAttaque.innerText = 'attaque'
    boutonAttaque.id = 'boutonAttaque'
    ecranJoueur.append(boutonAttaque)

    // Démarrer le combat
    initiative();

    // Fonction pour déterminer l'ordre d'attaque
    function initiative() {
        if ((agiliteJoueur * (Math.random() + 0.5)) > (agiliteMonstre * (Math.random() + 0.5))) {
            setTimeout(tourDuJoueur, 1000);
        } else if ((agiliteJoueur * (Math.random() + 0.5)) < (agiliteMonstre * (Math.random() + 0.5))) {
            setTimeout(tourDuMonstre, 1000);
        } else {
        // En cas d'égalité d'agilité, le joueur a la priorité
            setTimeout(tourDuJoueur, 1000);
        }
    }

    // Fonction pour le tour du joueur
    function tourDuJoueur() {
        boutonAttaque.style.display = 'flex'
        boutonAttaque.addEventListener('click', () => { 
            boutonAttaque.style.display = 'none'
            attaqueJoueur();
            if (!verifierFin()) {
                setTimeout(tourDuMonstre, 1000);
            } 
        })
    }
    
    // Fonction pour le tour du monstre
    function tourDuMonstre() {
        attaqueMonstre();
        if (!verifierFin()) {
            setTimeout(tourDuJoueur, 1000);
        }
    }

    function attaqueJoueur() {
        // Vérification de l'esquive
        if (Math.random() < agiliteMonstre * (Math.random() / 2 + 0.25) / 100) {
            console.log("Le monstre esquive l'attaque du joueur !");
            return;
        }

        let degats = Math.round((attJoueur - defMonstre) * (Math.random() / 10 + 0.95));
        
        // Vérification du coup critique
        if (Math.random() < critiqueJoueur / 100) {
            degats *= 2; 
            console.log("Coup critique !")
        }
        
        pvMonstre -= degats;
        majBarreDeVie(pvMonstre, pvMaxMonstre, 'Monstre')
        console.log(`Le joueur attaque et inflige ${degats} points de dégâts au monstre.`);
    }


    function attaqueMonstre() {
    // Vérification de l'esquive
        if (Math.random() < agiliteJoueur * (Math.random() / 2 + 0.25) / 100) {
        console.log("Le joueur esquive l'attaque du monstre !");
        return;
        }
    
        let degats = Math.round((attMonstre - defJoueur) * (Math.random() / 10 + 0.95));

        if (Math.random() < critiqueMonstre / 100) {
            degats *= 2; 
            console.log("Coup critique !")
        }

        pvJoueur -= degats;
        majBarreDeVie(pvJoueur, pvMaxJoueur, 'Joueur')
        console.log(`Le monstre attaque et inflige ${degats} points de dégâts au joueur.`);
    }

     // Fonction pour vérifier si le combat est terminé
    function verifierFin() {
        if (pvJoueur <= 0) {
        console.log("Le joueur a été vaincu. Game Over !");
        return true;
        } else if (pvMonstre <= 0) {
        console.log("Le monstre a été vaincu. Victoire !");
        victoireCombat()
        return true;
        }
        return false;
    }


    
    function victoireCombat() {
        
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
    
    // function gameOver() {
        
        
    // }
    
}