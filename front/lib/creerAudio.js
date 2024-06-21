// Musique menu principal
const musiqueIntro = document.querySelector('#musique')
musiqueIntro.src = './audio/musiques/intro.mp3'
musiqueIntro.loop = 'true'
musiqueIntro.play()

const musique = document.querySelector('#musique') 
const sons = document.querySelector('#sons')
const audio = document.querySelectorAll('audio')
const boutonMuteMusique = document.querySelector('#boutonMuteMusique')
const boutonMuteSons = document.querySelector('#boutonMuteSons')
const iconeMuteMusique = document.querySelector('#iconeMuteMusique')
const iconeMuteSons = document.querySelector('#iconeMuteSons')

//Reglage initial du volume
function setVolume(volume) {
    const audioElements = document.querySelectorAll('audio');
    for (let i = 0; i < audioElements.length; i++) {
        audioElements[i].volume = volume;
    }
}

// Jauge de volume
document.addEventListener('DOMContentLoaded', function() {
    
    const volumeSlider = document.querySelector('#curseurVolume');
    const volumeValue = document.querySelector('#niveauVolume');
    
    volumeSlider.addEventListener('input', () => {
        let volume = volumeSlider.value;
        volumeValue.textContent = volume;
        setVolume(volume / 100);
    });
});

// Boutons mute audio
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


/* 

*/