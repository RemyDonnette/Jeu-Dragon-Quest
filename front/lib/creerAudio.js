export function appelMusique(source) {

    const musique = document.querySelector('#musique')
    musique.src = source
    musique.loop = 'true'
    musique.play()
}

export function appelBoutonsAudio() {
    const audio = document.querySelectorAll('audio')
    const boutonMuteAudio = document.querySelector('#boutonMuteAudio')
    const iconeMuteAudio = document.querySelector('#iconeMuteAudio')
    const curseurVolume = document.querySelector('#curseurVolume');
    const niveauVolume = document.querySelector('#niveauVolume');
    
    
    //Reglage initial du volume
    function setVolume(volume) {
        const audioElements = document.querySelectorAll('audio');
        for (let i = 0; i < audioElements.length; i++) {
            audioElements[i].volume = volume;
        }
    }
    
    // Jauge de volume
    document.addEventListener('DOMContentLoaded', function() {
        
        curseurVolume.addEventListener('input', () => {
            let volume = curseurVolume.value;
            niveauVolume.textContent = volume;
            setVolume(volume / 100);
        });
        
        boutonMuteAudio.addEventListener("click", function() {
            
            
            if (audio.muted) {
                const volumeSave = localStorage.getItem('volumeSave')
                console.log(volumeSave)
                audio.muted = false
                curseurVolume.value = volumeSave
                iconeMuteAudio.classList.remove('fa-volume-mute')
                iconeMuteAudio.classList.add('fa-volume-high')
                setVolume(volumeSave / 100)
                
            } else {
                const volumeSave = curseurVolume.value
                localStorage.setItem('volumeSave', JSON.stringify(volumeSave))
                audio.muted = true
                curseurVolume.value = 0
                niveauVolume.textContent = 0
                iconeMuteAudio.classList.remove('fa-volume-high')
                iconeMuteAudio.classList.add('fa-volume-mute')
                setVolume(0)
            }
        })
    });
}

