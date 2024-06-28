import { fetchData, fetchAllData } from "./fetch.js";
import { creerMain } from "./creerMain.js";
import { menuMagasin } from "./menumagasin.js";
import { menuCarteDuMonde } from "./menuCarte.js";

export function menuSauvegarde(type) {

    const sauvegarde1 = JSON.parse(localStorage.getItem('sauvegarde1'))
    const sauvegarde2 = JSON.parse(localStorage.getItem('sauvegarde2'))
    const sauvegarde3 = JSON.parse(localStorage.getItem('sauvegarde3'))
    const sauvegardes = [sauvegarde1, sauvegarde2, sauvegarde3]

    const egliseEmplacementSauvegardes = document.querySelector('#egliseEmplacementSauvegardes')
    
    if (egliseEmplacementSauvegardes === null) {
        creerMain()
        const ecranSauvegardes = document.createElement('div')
        ecranSauvegardes.id = 'ecranSauvegardes'
        main.append(ecranSauvegardes)
    } 

    sauvegardes.forEach((s) => {
        
        const cadreSauvegarde = document.createElement('div')
        cadreSauvegarde.id = 'cadreSauvegarde'

        if (s.nom !== '') {
            // Créer un emplacement de sauvegarde décent
            const cadreSauvegardeNom = document.createElement('div')
            const cadreSauvegardeDate = document.createElement('div')
            const cadreSauvegardeLieu = document.createElement('div')
            const cadreSauvegardeInfos = document.createElement('div')
            const cadreSauvegardeCharset = document.createElement('div')
    
            cadreSauvegardeNom.id = 'cadreSauvegardeNom'
            cadreSauvegardeDate.id = 'cadreSauvegardeDate'
            cadreSauvegardeLieu.id = 'cadreSauvegardeLieu'
            cadreSauvegardeInfos.id = 'cadreSauvegardeInfos'
            cadreSauvegardeCharset.id = 'cadreSauvegardeCharset'
    
            cadreSauvegarde.append(cadreSauvegardeNom, cadreSauvegardeDate, cadreSauvegardeLieu, cadreSauvegardeInfos, cadreSauvegardeCharset)
    
            const sauvegardeNom = document.createElement('span')
            const sauvegardeDate = document.createElement('span')
            const sauvegardeLieu = document.createElement('span')
            const sauvegardeNiveau = document.createElement('span')
            const sauvegardeArgent = document.createElement('span')
            const sauvegardeCharset = document.createElement('img')
            
            sauvegardeNom.innerText = s.nom
            sauvegardeDate.innerText = s.date
            sauvegardeLieu.innerText = `${s.lieuSauvegarde} - Eglise`
            sauvegardeNiveau.innerText = `Niveau : ${s.niveau}`
            sauvegardeArgent.innerText = `Argent : ${s.argent} Gold`
            sauvegardeCharset.src = s.mini
            sauvegardeCharset.id = 'sauvegardeCharset'
    
            cadreSauvegardeNom.append(sauvegardeNom)
            cadreSauvegardeDate.append(sauvegardeDate)
            cadreSauvegardeLieu.append(sauvegardeLieu)
            cadreSauvegardeInfos.append(sauvegardeNiveau, sauvegardeArgent)
            cadreSauvegardeCharset.append(sauvegardeCharset)
        } else {
            cadreSauvegarde.innerText = 'Emplacement Vide'
            cadreSauvegarde.style.display = 'flex'
        }
        
        if (egliseEmplacementSauvegardes === null) {
            const ecranSauvegardes = document.querySelector('#ecranSauvegardes')
            ecranSauvegardes.append(cadreSauvegarde)
        } else {
            egliseEmplacementSauvegardes.append(cadreSauvegarde)
        }

        if (type === 'sauvegarder') {

            // save.addEventListener('click', () => {
            //     fetchData(`/sauvegarder${s.id}`)
            // })
        
        } else if (type === 'charger') {

            if (cadreSauvegarde.innerText !== 'Emplacement Vide') {
                cadreSauvegarde.addEventListener('click', async () => {
                    localStorage.setItem(s, 'sauvegarde')
                    function verification() {
                        return new Promise((resolve, reject) => {
                            const donnees = localStorage.getItem(`${s}`);
                            if (donnees === 'sauvegarde') {
                                fetchAllData(s.id)
                                cadreSauvegarde.innerText = 'Chargement...'
                                cadreSauvegarde.style.display = 'flex'
                                resolve()
                            } else {
                                reject(new Error("Les données n'ont pas été correctement copiées dans le localStorage"));
                            }
                        });
                    };
                    await verification()
                    setTimeout(() => {
                        main.remove()
                        menuCarteDuMonde()
                    }, 1000)
                })
            }    
        }
    })
}