
export function menuCarteDuMonde() {

    // Disparition du Logo
    const header = document.querySelector('header')
    header.style.display = 'none'

    // Appel de la musique de la carte du Monde
    const musiqueCarte = document.querySelector('#musique')
    musiqueCarte.src = './audio/musiques/carteDuMonde.mp3'
    musiqueCarte.loop = 'true'
    musiqueCarte.play()

    // // Animation des punaises
    // const punaise = document.querySelector('.punaise')
    // punaise.addEventListener('mouseenter', () => {
    //     punaise.classList.toggle('fa-beat')
    // })
    // punaise.addEventListener('mouseleave', () => {
    //     punaise.classList.toggle('fa-beat')
    // })

    const punaise = document.querySelectorAll('.punaise')
    const lieu = document.querySelector('#lieu')
    const nomDuLieu = document.querySelector('#nomDuLieu')
    const imageLabel = document.createElement('img')
    imageLabel.src = './images/background/banniereLieux.png'
    imageLabel.id = 'imageLabel'
    punaise.forEach((punaise) => {
        const punaiseNomDuLieu = punaise.getAttribute('id')
        punaise.addEventListener('mouseenter', () => {
            punaise.classList.toggle('fa-beat')
            nomDuLieu.innerText = punaiseNomDuLieu
            lieu.append(imageLabel)
        })
        punaise.addEventListener('mouseleave', () => {
            punaise.classList.toggle('fa-beat')
            nomDuLieu.innerText = ''
            lieu.removeChild(imageLabel)
        })
    })
}