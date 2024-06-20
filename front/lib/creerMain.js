export function creerMain() {
    const body = document.querySelector('#body')
    const main = document.createElement('main')
    main.id = 'main'
    body.append(main)
    return main
}