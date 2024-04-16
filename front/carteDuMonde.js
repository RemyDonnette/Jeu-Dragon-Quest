
export function menuCarteDuMonde() {

    // Appel de la musique de la carte du Monde
    const musiqueCarte = document.querySelector('#musique')
    musiqueCarte.src = './audio/musiques/combatSimple.mp3'
    musiqueCarte.loop = 'true'
    musiqueCarte.play()


}