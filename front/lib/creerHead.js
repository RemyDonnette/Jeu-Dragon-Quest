export function head() {

    //Création du head
    const head = document.querySelector('head')
    const titre = document.createElement('title')
    const metaDesc = document.createElement('meta')
    const meta1 = document.createElement('meta')
    const meta2 = document.createElement('meta')
    const meta3 = document.createElement('meta')
    const style = document.createElement('link')
    const font1 = document.createElement('script')
    const font2 = document.createElement('link')
    const fav1 = document.createElement('link')
    const fav2 = document.createElement('link')
    const fav3 = document.createElement('link')
    const fav4 = document.createElement('link')
    const fav5 = document.createElement('link')

    titre.innerText = 'Dragon Quest'
    metaDesc.name = 'description'
    metaDesc.content = 'Un FanGame sur l\'univers de Dragon Quest XI en point and click.'
    meta1.name = 'viewport'
    meta1.content = 'width=device-width, initial-scale=1.0'
    meta2.name = 'msapplication-TileColor'
    meta2.content = '#da532c'
    meta3.name = 'theme-color'
    meta3.content = '#ffffff'
    style.rel = 'stylesheet'
    style.href = './style.css'
    font1.src = 'https://kit.fontawesome.com/9396dc643f.js'
    font1.crossOrigin = 'anonymous'
    font2.rel = 'stylesheet' 
    font2.href = './node_modules/font-awesome-animation/css/font-awesome-animation.min.css'
    fav1.rel = 'apple-touch-icon'
    fav1.sizes = '180x180'
    fav1.href = './images/favicon/apple-touch-icon.png'
    fav2.rel = 'icon'
    fav2.type = 'image/png'
    fav2.sizes = '32x32'
    fav2.href = './images/favicon/favicon-32x32.png'
    fav3.rel = 'icon'
    fav3.type = 'image/png'
    fav3.sizes = '16x16'
    fav3.href = './images/favicon/favicon-16x16.png"'
    fav4.rel = 'manifest'
    fav4.href = './images/favicon/site.webmanifest'
    fav5.rel = 'mask-icon'
    fav5.href = 'images/favicon/safari-pinned-tab.svg'

    head.append(titre, metaDesc, meta1, meta2, meta3, style, font1, font2, fav1, fav2, fav3, fav4, fav5)
}