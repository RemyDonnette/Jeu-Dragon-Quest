import { fetchData } from "./fetch.js"
import { creerMain } from "./creerMain.js"
import { changerScript } from "./changerScript.js"

export function menuCarteDuMonde() {

    const lieuxDebloques = JSON.parse(localStorage.getItem('sauvegarde'))
    const donneesLieux = JSON.parse(localStorage.getItem('lieux'))

    // Creation du Main
    creerMain()

    // Appel de la musique de la carte du Monde
    // const musiqueCarte = document.querySelector('#musique')
    // musiqueCarte.src = '../audio/musiques/carteDuMonde.mp3'
    // musiqueCarte.loop = 'true'
    // musiqueCarte.play()

    //Création du template
    const carteDuMonde = document.createElement('div')
    const imageCarteDuMonde = document.createElement('img')
    const lieu = document.createElement('label')
    const nomDuLieu = document.createElement('span')
    
    carteDuMonde.id = 'carteDuMonde'
    imageCarteDuMonde.id = 'imageCarteDuMonde'
    imageCarteDuMonde.src = './images/background/carte.png'
    imageCarteDuMonde.alt = 'Carte du Monde'
    lieu.className = 'lieu'
    nomDuLieu.className = 'nomDuLieu'
    
    main.append(carteDuMonde)
    carteDuMonde.append(imageCarteDuMonde, lieu)
    lieu.append(nomDuLieu)
    
    lieuxDebloques.lieux.forEach((idLieux) => {
        
        const imageLabel = document.createElement('img')
        imageLabel.src = './images/background/banniereLieux.png'
        imageLabel.id = 'imageLabel'
        
        const icone = document.createElement('img')
        icone.src = './images/icones/iconeSelection.png'
        icone.id = donneesLieux[idLieux].divId
        icone.classList.add('faa-float', 'animated-hover', 'faa-fast', 'punaise')

        if (icone.id !== 'testLocalisation') {
            icone.style.top = `${donneesLieux[idLieux].punaise.top}%`
            icone.style.left = `${donneesLieux[idLieux].punaise.left}%`
        }

        carteDuMonde.append(icone)
        
        icone.addEventListener('mouseenter', () => {
            nomDuLieu.innerText = donneesLieux[idLieux].nom
            lieu.append(imageLabel)
        })
        icone.addEventListener('mouseleave', () => {
            lieu.removeChild(imageLabel)
        })
        icone.addEventListener('click', () => {
            main.remove()
            changerScript(donneesLieux[idLieux].lien)
        })
    })
}

/* 
<img src="images/icones/iconeSelection.png" class="faa-float animated-hover faa-fast punaise" style="top: 58%; left: 48%" id="Caubaltin"></i>
<a href="1_heliodor.html"><img src="images/icones/iconeSelection.png" class="faa-float animated-hover faa-fast punaise" style="top: 42%; left: 48%" id="Heliodor"></i></a>
<img src="images/icones/iconeSelection.png" class="faa-float animated-hover faa-fast punaise" style="top: 48%; left: 45%" id="Malgrove"></i>
<img src="images/icones/iconeSelection.png" class="faa-float animated-hover faa-fast punaise" style="top: 62%; left: 58%" id="Côte d'emeraude"></i>
<img src="images/icones/iconeSelection.png" class="faa-float animated-hover faa-fast punaise" style="top: 65%; left: 80%" id="Yotto"></i>
<img src="images/icones/iconeSelection.png" class="faa-float animated-hover faa-fast punaise" style="top: 17%; left: 17%" id="Sniflheim"></i> 
*/