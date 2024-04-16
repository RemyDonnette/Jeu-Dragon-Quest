import { lancerMenuPrincipal } from './menuPrincipal.js'

// Menu Principal
const boutonLancerMenuPrincipal = document.querySelector('#lancerMenuPrincipal')

boutonLancerMenuPrincipal.addEventListener('click', () => {
    
    lancerMenuPrincipal()
    
})

// Bouton mute audio
function muteAudio() {
    const audioElements = document.querySelectorAll("audio"); 
    audioElements.forEach((audio) => {
        audio.muted = true; 
        console.log(audio)
    })
}

document.getElementById("muteButton").addEventListener("click", function() {
    muteAudio()
})


