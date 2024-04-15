import { menuCombat } from './menuCombat.js'

const bouton = document.querySelector('#lancerCombat')
bouton.addEventListener('click', () => {
    lancerCombat()
})

export function lancerCombat() {
    const main = document.querySelector('main')
    const combat = document.querySelector('#menuCombat')

    const combatClone = combat.content.cloneNode(true)
    main.append(combatClone)

    menuCombat()
}

