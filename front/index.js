import { lancerCombat } from './menuCombat.js'

// const musiqueIntro = document.createElement('audio')
// musiqueIntro.src = './sons/musiques/intro.mp3'
// musiqueIntro.play()

function muteAudio() {
    const audioElements = document.querySelectorAll("audio"); 
    audioElements.forEach(function(audio) {
        audio.muted = true; 
        console.log(audio)
    });
}
document.getElementById("muteButton").addEventListener("click", function() {
    muteAudio(); 
});


const bouton = document.querySelector('#lancerCombat')
bouton.addEventListener('click', () => {
    bouton.style.display = 'none'
    lancerCombat()
})


