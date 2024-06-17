import { fetchData } from "./fetch.js"
import { switchEcran } from "./fonctionsEcran.js"

export function menuMagasin(magasinVille, ville, nbRefMag) {
    // Fetch Sauvegarde et Objets
    fetchData('/sauvegarde').then((data) => {
        localStorage.setItem('sauvegarde', JSON.stringify(data))
    })
    fetchData('/sauvegarde').then((data) => {
        localStorage.setItem('inventaire', JSON.stringify(data.inventaire))
    })
    fetchData('/magasins').then((data) => {
        localStorage.setItem('magasins', JSON.stringify(data))
        console.log(data)
    })
    fetchData('/magasins').then((data) => {
        localStorage.setItem('articles', JSON.stringify(data.inventaire))
    })
    fetchData('/objets').then((data) => {
        localStorage.setItem('tabObjets', JSON.stringify(data))
    })

    // Fetch des éléments nécéssaires
    const sauvegarde = JSON.parse(localStorage.getItem('sauvegarde'))
    const objetsInventaire = JSON.parse(localStorage.getItem('inventaire'))
    const infosMagasins = JSON.parse(localStorage.getItem('magasins'))
    const infosMagasinActuel = infosMagasins[nbRefMag]
    const articles = infosMagasins[nbRefMag].inventaire
    const tabObjets = JSON.parse(localStorage.getItem('tabObjets'))

    const magasin = document.querySelector(`#${magasinVille.id}`)
    console.log(infosMagasinActuel)
    console.log(articles)

    // Création des zones de grid et leurs ids
    const ecranMagasin = document.createElement('div')
    const imageMagasin = document.createElement('img')
    const magasinArgentJoueur = document.createElement('div')
    const magasinSelectionAction = document.createElement('div')
    const magasinObjetIcone = document.createElement('div')
    const magasinObjetNom = document.createElement('div')
    const magasinObjetPrix = document.createElement('div')
    const magasinObjetImage = document.createElement('div')
    const magasinObjetDescription = document.createElement('div')
    const magasinVendeurCharset = document.createElement('div')
    const magasinVendeurDialogue = document.createElement('div')
    const magasinBoxValidation = document.createElement('div')

    ecranMagasin.id = 'ecranMagasin'
    imageMagasin.className = 'imageFond'
    imageMagasin.src = infosMagasinActuel.image
    imageMagasin.alt = infosMagasinActuel.nom

    magasinArgentJoueur.id = 'magasinArgentJoueur'
    magasinSelectionAction.id = 'magasinSelectionAction' 
    magasinObjetIcone.id = 'magasinObjetIcone'
    magasinObjetNom.id = 'magasinObjetNom'
    magasinObjetPrix.id = 'magasinObjetPrix'
    magasinObjetImage.id = 'magasinObjetImage'
    magasinObjetDescription.id = 'magasinObjetDescription'
    magasinVendeurCharset.id = 'magasinVendeurCharset'
    magasinVendeurDialogue.id = 'magasinVendeurDialogue'
    magasinBoxValidation.id = 'magasinBoxValidation'
    
    magasin.append(ecranMagasin, imageMagasin)
    ecranMagasin.append(magasinArgentJoueur, magasinSelectionAction, magasinObjetIcone, magasinObjetNom, magasinObjetPrix, magasinObjetImage, magasinObjetDescription, magasinVendeurCharset, magasinVendeurDialogue, magasinBoxValidation)
    
    // remplissage de la colonne de selection
    const argentJoueur = document.createElement('span')
    argentJoueur.innerText = `${sauvegarde.argent} GOLD`
    magasinArgentJoueur.append(argentJoueur)
    
    const optionAcheter = document.createElement('span')
    const optionVendre = document.createElement('span')
    const optionSortir = document.createElement('span')
    
    optionAcheter.innerText = 'Acheter'
    optionAcheter.id = 'optionAcheter'
    optionVendre.innerText = 'Vendre'
    optionVendre.id = 'optionVendre'
    optionSortir.innerText = 'Sortir'
    optionSortir.id = 'optionSortir'
    
    magasinSelectionAction.append(optionAcheter, optionVendre, optionSortir)
    
    // remplissage la ligne du vendeur
    const vendeurCharset = document.createElement('img')
    const vendeurDialogue = document.createElement('p')
    
    vendeurCharset.src = './images/personnages/npc1.png'
    vendeurCharset.style.width = '100%'
    
    magasinVendeurCharset.append(vendeurCharset)
    magasinVendeurDialogue.append(vendeurDialogue)
    
    magasinArgentJoueur.style.display = 'none'
    magasinSelectionAction.style.display = 'none'
    magasinObjetIcone.style.display = 'none'
    magasinObjetNom.style.display = 'none'
    magasinObjetPrix.style.display = 'none'
    magasinVendeurDialogue.innerText = 'Bien le Bonjour !'
    
    
    setTimeout(() => {
        
        magasinArgentJoueur.style.display = 'flex'
        magasinSelectionAction.style.display = 'flex'
        magasinObjetIcone.style.display = 'flex'
        magasinObjetNom.style.display = 'flex'
        magasinObjetPrix.style.display = 'flex'
        magasinVendeurDialogue.innerText = 'J\'ai plein d\'armes et d\'objets en reserve.\n Qu\'est ce qu\'il te faut ?'
        
        const objetImage = document.createElement('img')
        const objetDescription = document.createElement('p')

        objetImage.id = 'objetImage'
        objetDescription.id = 'objetDescription'
        
        // remplissage des objets
        optionAcheter.addEventListener('click', () => {
            
            const testObjet = document.querySelector('#objetIcone') 

            if (testObjet  !== null) {
                
                const objetIcone = document.querySelectorAll('#objetIcone')
                const objetNom = document.querySelectorAll('#objetNom')
                const objetPrix = document.querySelectorAll('#objetPrix')

                objetIcone.forEach((objet) => {
                    magasinObjetIcone.removeChild(objet)
                })
                objetNom.forEach((objet) => {
                    magasinObjetNom.removeChild(objet)
                })
                objetPrix.forEach((objet) => {
                    magasinObjetPrix.removeChild(objet)
                })
            }

            magasinVendeurDialogue.innerText = 'J\'ai plein de merveilles à vendre ?'
        
            
        
        
        })
        
        optionVendre.addEventListener('click', () => {       

            const testObjet = document.querySelector('#objetIcone')

            if (testObjet  !== null) {

                const objetIcone = document.querySelectorAll('#objetIcone')
                const objetNom = document.querySelectorAll('#objetNom')
                const objetPrix = document.querySelectorAll('#objetPrix')

                objetIcone.forEach((objet) => {
                    magasinObjetIcone.removeChild(objet)
                })
                objetNom.forEach((objet) => {
                    magasinObjetNom.removeChild(objet)
                })
                objetPrix.forEach((objet) => {
                    magasinObjetPrix.removeChild(objet)
                })
            }

            magasinVendeurDialogue.innerText = 'Que veux tu vendre ?'
            
            objetsInventaire.forEach((objet) => {
                
                const objetIcone = document.createElement('img')
                const objetNom = document.createElement('span')
                const objetPrix = document.createElement('span')
                
                objetIcone.id = 'objetIcone'
                objetNom.id = 'objetNom'
                objetPrix.id = 'objetPrix'

                objetIcone.src = tabObjets[objet.id].image
                objetNom.innerText = tabObjets[objet.id].nom
                objetPrix.innerText = `${tabObjets[objet.id].prixVente} G`
                
                magasinObjetIcone.append(objetIcone)
                magasinObjetNom.append(objetNom)
                magasinObjetPrix.append(objetPrix)

                objetIcone.addEventListener('mouseenter', () => {
                    ecranMagasin.id = 'ecranMagasinD'
                    magasinObjetImage.style.display = 'flex'
                    magasinObjetDescription.style.display = 'flex'
                    
                    objetImage.src = tabObjets[objet.id].image
                    objetDescription.innerText = tabObjets[objet.id].description

                    magasinObjetImage.append(objetImage)
                    magasinObjetDescription.append(objetDescription)
                    })

                objetIcone.addEventListener('mouseleave', () => {
                    ecranMagasin.id = 'ecranMagasin'
                    magasinObjetImage.style.display = 'none'
                    magasinObjetDescription.style.display = 'none'
                })
            });
        })

        optionSortir.addEventListener('click', () => {
            magasinArgentJoueur.style.display = 'none'
            magasinSelectionAction.style.display = 'none'
            magasinObjetIcone.style.display = 'none'
            magasinObjetNom.style.display = 'none'
            magasinObjetPrix.style.display = 'none'
            magasinVendeurDialogue.innerText = 'A la prochaine !'
            setTimeout( () => {
            ecranMagasin.style.display = 'none'
            ecranMagasin.remove()
            imageMagasin.remove()
            switchEcran(magasinVille, ville)
            }, 1000)
        })
    }, 1000)

    
}