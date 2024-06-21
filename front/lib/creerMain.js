export function creerMain() {
    const body = document.querySelector('#body')
    const footer = document.querySelector('#footer')
    const main = document.createElement('main')
    main.id = 'main'
    body.insertBefore(main, footer);
    return main
}