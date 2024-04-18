import { lancerMenuPrincipal } from './menuPrincipal.js'

// Menu Principal
const boutonLancerMenuPrincipal = document.querySelector('#ecranAccueil')
boutonLancerMenuPrincipal.addEventListener('click', () => {
    lancerMenuPrincipal()
})

// Musique menu principal
const musiqueIntro = document.querySelector('#musique')
musiqueIntro.src = './audio/musiques/intro.mp3'
musiqueIntro.loop = 'true'
musiqueIntro.play()

// Bouton mute audio
const musique = document.querySelector('#musique'); 
const sons = document.querySelectorAll('#sons')
const boutonMuteMusique = document.querySelector('#boutonMuteMusique')
const boutonMuteSons = document.querySelector('#boutonMuteSons')
const iconeMuteMusique = document.querySelector('#iconeMuteMusique')
const iconeMuteSons = document.querySelector('#iconeMuteSons')

function muteMusique() {
    if (musique.muted) {
        musique.muted = false
        iconeMuteMusique.style.color = 'goldenrod'
    
    } else {
        musique.muted = true
        iconeMuteMusique.style.color = 'red'
    }
}

function muteSons() {
    if (sons.muted) {
        sons.muted = false
        iconeMuteSons.style.color = 'goldenrod'
    
    } else {
        sons.muted = true
        iconeMuteSons.style.color = 'red'
    }
}

boutonMuteMusique.addEventListener("click", function() {
    muteMusique()
})

boutonMuteSons.addEventListener("click", function() {
    muteSons()
})


