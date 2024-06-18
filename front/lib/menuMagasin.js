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
    })
    fetchData('/magasins').then((data) => {
        localStorage.setItem('articles', JSON.stringify(data.inventaire))
    })
    fetchData('/objets').then((data) => {
        localStorage.setItem('objets', JSON.stringify(data))
    })
    fetchData('/armes').then((data) => {
        localStorage.setItem('armes', JSON.stringify(data))
    })
    fetchData('/armures').then((data) => {
        localStorage.setItem('armures', JSON.stringify(data))
    })

    // Fetch des éléments nécéssaires
    const sauvegarde = JSON.parse(localStorage.getItem('sauvegarde'))
    const objetsInventaire = JSON.parse(localStorage.getItem('inventaire'))
    const infosMagasins = JSON.parse(localStorage.getItem('magasins'))
    const infosMagasinActuel = infosMagasins[nbRefMag]
    const articles = infosMagasins[nbRefMag].inventaire
    const objets = JSON.parse(localStorage.getItem('objets'))
    const armes = JSON.parse(localStorage.getItem('armes'))
    const armures = JSON.parse(localStorage.getItem('armures'))

    const magasin = document.querySelector(`#${magasinVille.id}`)

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
    argentJoueur.innerText = `${sauvegarde.argent} G`
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

            magasinVendeurDialogue.innerText = 'J\'ai plein de merveilles à vendre !'
        
            articles.forEach((objet) => {
                
                const objetIcone = document.createElement('img')
                const objetNom = document.createElement('div')
                const objetPrix = document.createElement('div')
                
                objetIcone.id = 'objetIcone'
                objetNom.id = 'objetNom'
                objetPrix.id = 'objetPrix'

                switch (objet.type) {
                    case objets[0]:
                        objetIcone.src = objets[objet.id].image
                        objetNom.innerText = objets[objet.id].nom
                        objetPrix.innerText = `${objets[objet.id].prixAchat} G`
                        break;
                    case armes[0]:
                        objetIcone.src = armes[objet.id].image
                        objetNom.innerText = armes[objet.id].nom
                        objetPrix.innerText = `${armes[objet.id].prixAchat} G`
                        break;
                    case armures[0]:
                        objetIcone.src = armures[objet.id].image
                        objetNom.innerText = armures[objet.id].nom
                        objetPrix.innerText = `${armures[objet.id].prixAchat} G`
                        break;
                    default:
                        break;
                }
                
                magasinObjetIcone.append(objetIcone)
                magasinObjetNom.append(objetNom)
                magasinObjetPrix.append(objetPrix)

                const ligne = [objetIcone, objetNom, objetPrix]

                ligne.forEach((element) => {
        
                    element.addEventListener('mouseenter', () => {
                        ecranMagasin.id = 'ecranMagasinD'
                        magasinObjetImage.style.display = 'flex'
                        magasinObjetDescription.style.display = 'flex'

                        objetIcone.classList.add('selectionActive')
                        objetNom.classList.add('selectionActive')
                        objetPrix.classList.add('selectionActive')
                        
                        switch (objet.type) {
                            case objets[0]:
                                objetImage.src = objets[objet.id].image
                                objetDescription.innerText = objets[objet.id].description
                                break;
                            case armes[0]:
                                objetImage.src = armes[objet.id].image
                                objetDescription.innerText = armes[objet.id].description
                                break;
                            case armures[0]:
                                objetImage.src = armures[objet.id].image
                                objetDescription.innerText = armures[objet.id].description
                                break;
                            default:
                                break;
                        }
                        magasinObjetImage.append(objetImage)
                        magasinObjetDescription.append(objetDescription)
                    })
    
                    element.addEventListener('mouseleave', () => {
                        ecranMagasin.id = 'ecranMagasin'
                        magasinObjetImage.style.display = 'none'
                        magasinObjetDescription.style.display = 'none'
                        
                        objetIcone.classList.remove('selectionActive')
                        objetNom.classList.remove('selectionActive')
                        objetPrix.classList.remove('selectionActive')
                    })
                })
            });
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

                switch (objet.type) {
                    case objets[0]:
                        objetIcone.src = objets[objet.id].image
                        objetNom.innerText = objets[objet.id].nom
                        objetPrix.innerText = `${objets[objet.id].prixVente} G`
                        break;
                    case armes[0]:
                        objetIcone.src = armes[objet.id].image
                        objetNom.innerText = armes[objet.id].nom
                        objetPrix.innerText = `${armes[objet.id].prixVente} G`
                        break;
                    case armures[0]:
                        objetIcone.src = armures[objet.id].image
                        objetNom.innerText = armures[objet.id].nom
                        objetPrix.innerText = `${armures[objet.id].prixVente} G`
                        break;
                    default:
                        break;
                }
                
                magasinObjetIcone.append(objetIcone)
                magasinObjetNom.append(objetNom)
                magasinObjetPrix.append(objetPrix)

                const ligne = [objetIcone, objetNom, objetPrix]
                
                ligne.forEach((element) => {
                    
                    element.addEventListener('mouseenter', () => {
                        ecranMagasin.id = 'ecranMagasinD'
                        magasinObjetImage.style.display = 'flex'
                        magasinObjetDescription.style.display = 'flex'

                        objetIcone.classList.add('selectionActive')
                        objetNom.classList.add('selectionActive')
                        objetPrix.classList.add('selectionActive')
                        
                        switch (objet.type) {
                            case objets[0]:
                                objetImage.src = objets[objet.id].image
                                objetDescription.innerText = objets[objet.id].description
                                break;
                            case armes[0]:
                                objetImage.src = armes[objet.id].image
                                objetDescription.innerText = armes[objet.id].description
                                break;
                            case armures[0]:
                                objetImage.src = armures[objet.id].image
                                objetDescription.innerText = armures[objet.id].description
                                break;
                            default:
                                break;
                        }
                        magasinObjetImage.append(objetImage)
                        magasinObjetDescription.append(objetDescription)
                    })
    
                    element.addEventListener('mouseleave', () => {
                        ecranMagasin.id = 'ecranMagasin'
                        magasinObjetImage.style.display = 'none'
                        magasinObjetDescription.style.display = 'none'

                        objetIcone.classList.remove('selectionActive')
                        objetNom.classList.remove('selectionActive')
                        objetPrix.classList.remove('selectionActive')
                    })
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


    // function commerce() {
        
    //     const testObjet = document.querySelector('#objetIcone') 
    
    //     if (testObjet  !== null) {
            
    //         const objetIcone = document.querySelectorAll('#objetIcone')
    //         const objetNom = document.querySelectorAll('#objetNom')
    //         const objetPrix = document.querySelectorAll('#objetPrix')
    
    //         objetIcone.forEach((objet) => {
    //             magasinObjetIcone.removeChild(objet)
    //         })
    //         objetNom.forEach((objet) => {
    //             magasinObjetNom.removeChild(objet)
    //         })
    //         objetPrix.forEach((objet) => {
    //             magasinObjetPrix.removeChild(objet)
    //         })
    //     }
    
    //     magasinVendeurDialogue.innerText = 'J\'ai plein de merveilles à vendre !'
    
    //     articles.forEach((objet) => {
            
    //         const objetIcone = document.createElement('img')
    //         const objetNom = document.createElement('div')
    //         const objetPrix = document.createElement('div')
            
    //         objetIcone.id = 'objetIcone'
    //         objetNom.id = 'objetNom'
    //         objetPrix.id = 'objetPrix'
    
    //         switch (objet.type) {
    //             case objets[0]:
    //                 objetIcone.src = objets[objet.id].image
    //                 objetNom.innerText = objets[objet.id].nom
    //                 objetPrix.innerText = `${objets[objet.id].prixAchat} G`
    //                 break;
    //             case armes[0]:
    //                 objetIcone.src = armes[objet.id].image
    //                 objetNom.innerText = armes[objet.id].nom
    //                 objetPrix.innerText = `${armes[objet.id].prixAchat} G`
    //                 break;
    //             case armures[0]:
    //                 objetIcone.src = armures[objet.id].image
    //                 objetNom.innerText = armures[objet.id].nom
    //                 objetPrix.innerText = `${armures[objet.id].prixAchat} G`
    //                 break;
    //             default:
    //                 break;
    //         }
            
    //         magasinObjetIcone.append(objetIcone)
    //         magasinObjetNom.append(objetNom)
    //         magasinObjetPrix.append(objetPrix)
    
    //         const ligne = [objetIcone, objetNom, objetPrix]
    
    //         ligne.forEach((element) => {
    
    //             element.addEventListener('mouseenter', () => {
    //                 ecranMagasin.id = 'ecranMagasinD'
    //                 magasinObjetImage.style.display = 'flex'
    //                 magasinObjetDescription.style.display = 'flex'
    
    //                 objetIcone.classList.add('selectionActive')
    //                 objetNom.classList.add('selectionActive')
    //                 objetPrix.classList.add('selectionActive')
                    
    //                 switch (objet.type) {
    //                     case objets[0]:
    //                         objetImage.src = objets[objet.id].image
    //                         objetDescription.innerText = objets[objet.id].description
    //                         break;
    //                     case armes[0]:
    //                         objetImage.src = armes[objet.id].image
    //                         objetDescription.innerText = armes[objet.id].description
    //                         break;
    //                     case armures[0]:
    //                         objetImage.src = armures[objet.id].image
    //                         objetDescription.innerText = armures[objet.id].description
    //                         break;
    //                     default:
    //                         break;
    //                 }
    //                 magasinObjetImage.append(objetImage)
    //                 magasinObjetDescription.append(objetDescription)
    //             })
    
    //             element.addEventListener('mouseleave', () => {
    //                 ecranMagasin.id = 'ecranMagasin'
    //                 magasinObjetImage.style.display = 'none'
    //                 magasinObjetDescription.style.display = 'none'
                    
    //                 objetIcone.classList.remove('selectionActive')
    //                 objetNom.classList.remove('selectionActive')
    //                 objetPrix.classList.remove('selectionActive')
    //             })
    // }

}