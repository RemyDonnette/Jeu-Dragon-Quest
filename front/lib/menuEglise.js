import { creerMain } from "./creerMain.js"
import { changerScript } from "./changerScript.js"
import { menuSauvegarde } from "./menuSauvegarde.js"

export function menuEglise(nbRefVille) {

    const sauvegarde = JSON.parse(localStorage.getItem('sauvegarde'))
    const infosEglises = JSON.parse(localStorage.getItem('eglises'))
    const infosEgliseActuelle = infosEglises[nbRefVille]
    const lieux = JSON.parse(localStorage.getItem('villes'))

    // creation du main et du magasin
    creerMain()
    const eglise = document.createElement('div')
    eglise.id = 'eglise'
    main.append(eglise)

    // Gestion de l'audio
    const musiqueHeliodor = document.querySelector('#musique')
    musiqueHeliodor.src = './audio/musiques/boutique.mp3'
    musiqueHeliodor.loop = 'true'
    musiqueHeliodor.play()

    // Création des zones de grid et leurs ids
    const ecranEglise = document.createElement('div')
    const imageEglise = document.createElement('img')

    const egliseSelectionAction = document.createElement('div')
    const egliseEmplacementSauvegardes = document.createElement('div')
    
    const eglisePretreCharset = document.createElement('div')
    const eglisePretreDialogue = document.createElement('div')
    const egliseBoxValidation = document.createElement('div')

    ecranEglise.id = 'ecranEglise'
    imageEglise.className = 'imageFond'
    imageEglise.src = infosEgliseActuelle.image
    imageEglise.alt = infosEgliseActuelle.nom


    egliseSelectionAction.id = 'egliseSelectionAction' 
    egliseEmplacementSauvegardes.id = 'egliseEmplacementSauvegardes'

    eglisePretreCharset.id = 'eglisePretreCharset'
    eglisePretreDialogue.id = 'eglisePretreDialogue'
    egliseBoxValidation.id = 'egliseBoxValidation'
    
    eglise.append(ecranEglise, imageEglise)
    ecranEglise.append(egliseSelectionAction, egliseEmplacementSauvegardes, eglisePretreCharset, eglisePretreDialogue, egliseBoxValidation)
    
    // remplissage de la colonne de selection
    const optionSauvegarder = document.createElement('span')
    const optionCharger = document.createElement('span')
    const optionSortir = document.createElement('span')
    
    optionSauvegarder.innerText = 'Sauvegarder'
    optionSauvegarder.id = 'optionSauvegarder'
    optionCharger.innerText = 'Charger'
    optionCharger.id = 'optionCharger'
    optionSortir.innerText = 'Sortir'
    optionSortir.id = 'optionSortir'
    
    egliseSelectionAction.append(optionSauvegarder, optionCharger, optionSortir)

    // remplissage la ligne du pretre
    const pretreCharset = document.createElement('img')
    const pretreDialogue = document.createElement('p')
    const boxOui = document.createElement('p')
    const boxNon = document.createElement('p')
    
    pretreCharset.src = './images/personnages/npc1.png'
    pretreCharset.style.width = '100%'
    boxOui.id = 'boxOui'
    boxNon.id = 'boxNon'
    boxOui.innerText = 'Oui'
    boxNon.innerText = 'Non'
    
    eglisePretreCharset.append(pretreCharset)
    eglisePretreDialogue.append(pretreDialogue)
    egliseBoxValidation.append(boxOui, boxNon)
    

    egliseSelectionAction.style.display = 'none'
    egliseEmplacementSauvegardes.style.display = 'none'
    eglisePretreDialogue.innerText = infosEgliseActuelle.phraseEntree
    
    
    setTimeout(() => {
        
        egliseSelectionAction.style.display = 'flex'
        eglisePretreDialogue.innerText = infosEgliseActuelle.phraseAttente

        optionSauvegarder.addEventListener('click', () => {

            optionSauvegarder.classList.add('clickActive')
            optionCharger.classList.remove('clickActive')

            egliseEmplacementSauvegardes.style.display = 'flex'
            boxOui.style.display = 'none'
            boxNon.style.display = 'none'

            const testSave = document.querySelector('#cadreSauvegarde')
            if (testSave  !== null) {
                const sauvegardes = document.querySelectorAll('#cadreSauvegarde')
                sauvegardes.forEach((save) => {
                    egliseEmplacementSauvegardes.removeChild(save)
                })
            }
            menuSauvegarde('sauvegarde')
        })

        optionCharger.addEventListener('click', () => {

            optionCharger.classList.add('clickActive')
            optionSauvegarder.classList.remove('clickActive')

            egliseEmplacementSauvegardes.style.display = 'flex'
            boxOui.style.display = 'none'
            boxNon.style.display = 'none'

            const testSave = document.querySelector('#cadreSauvegarde')
            if (testSave  !== null) {
                const sauvegardes = document.querySelectorAll('#cadreSauvegarde')
                sauvegardes.forEach((save) => {
                    egliseEmplacementSauvegardes.removeChild(save)
                })
            }
            menuSauvegarde('charger')
        })

        optionSortir.addEventListener('click', () => {

            egliseSelectionAction.style.display = 'none'
            egliseEmplacementSauvegardes.style.display = 'none'
            boxOui.style.display = 'none'
            boxNon.style.display = 'none'
            eglisePretreDialogue.innerText = infosEgliseActuelle.phraseSortie

            setTimeout( () => {
                main.remove()
                changerScript(`./${lieux[nbRefVille].id}_${lieux[nbRefVille].divId}.js`)
            }, 1000)
        })
    }, 1000)
}
