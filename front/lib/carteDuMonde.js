
export function menuCarteDuMonde() {

    // Appel de la musique de la carte du Monde
    const musiqueCarte = document.querySelector('#musique')
    musiqueCarte.src = './audio/musiques/carteDuMonde.mp3'
    musiqueCarte.loop = 'true'
    musiqueCarte.play()

    const punaise = document.querySelectorAll('.punaise')
    const lieu = document.querySelector('.lieu')
    const nomDuLieu = document.querySelector('.nomDuLieu')
    const imageLabel = document.createElement('img')
    imageLabel.src = './images/background/banniereLieux.png'
    imageLabel.id = 'imageLabel'
    punaise.forEach((punaise) => {
        const punaiseNomDuLieu = punaise.getAttribute('id')
        punaise.addEventListener('mouseenter', () => {
            nomDuLieu.innerText = punaiseNomDuLieu
            lieu.append(imageLabel)
        })
        punaise.addEventListener('mouseleave', () => {
            lieu.removeChild(imageLabel)
        })
    })
}