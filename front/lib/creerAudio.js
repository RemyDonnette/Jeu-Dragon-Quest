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
    const volumeSlider = document.querySelector('#curseurVolume');
    const volumeValue = document.querySelector('#niveauVolume'); 
    
    
    //Reglage initial du volume
    function setVolume(volume) {
        const audioElements = document.querySelectorAll('audio');
        for (let i = 0; i < audioElements.length; i++) {
            audioElements[i].volume = volume;
        }
    }
    
    // Jauge de volume
    document.addEventListener('DOMContentLoaded', function() {
        
        volumeSlider.addEventListener('input', () => {
            let volume = volumeSlider.value;
            volumeValue.textContent = volume;
            setVolume(volume / 100);
        });
        
        boutonMuteAudio.addEventListener("click", function() {
            
            
            if (audio.muted) {
                const volumeSave = localStorage.getItem('volumeSave')
                console.log(volumeSave)
                audio.muted = false
                iconeMuteAudio.style.color = 'goldenrod'
                volumeSlider.value = volumeSave
                setVolume(volumeSave / 100)
                
            } else {
                const volumeSave = volumeSlider.value
                localStorage.setItem('volumeSave', JSON.stringify(volumeSave))
                audio.muted = true
                iconeMuteAudio.style.color = 'red'
                volumeSlider.value = 0
                volumeValue.textContent = 0
                setVolume(0)
            }
        })
    });
}

