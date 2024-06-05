export function switchEcran (ancien, nouveau) {
    ancien.style.display = 'none'
    nouveau.style.display = 'flex'
}

export function superposerEcran (dessus, dessous) {
    dessus.style.display = 'flex'
    dessus.style.position = 'absolute'
    dessous.style.position = 'relative'
}