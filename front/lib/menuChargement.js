import { fetchData, fetchAllData } from "./fetch.js";
import { creerMain } from "./creerMain.js";
import { menuMagasin } from "./menumagasin.js";
import { menuCarteDuMonde } from "./menuCarte.js";

export function chargerPartie() {

    fetchData(`/sauvegarde1`).then((data) => {
        localStorage.setItem('sauvegarde1', JSON.stringify(data))
    })
    fetchData(`/sauvegarde2`).then((data) => {
        localStorage.setItem('sauvegarde2', JSON.stringify(data))
    })
    fetchData(`/sauvegarde3`).then((data) => {
        localStorage.setItem('sauvegarde3', JSON.stringify(data))
    })

    const sauvegarde1 = JSON.parse(localStorage.getItem('sauvegarde1'))
    const sauvegarde2 = JSON.parse(localStorage.getItem('sauvegarde2'))
    const sauvegarde3 = JSON.parse(localStorage.getItem('sauvegarde3'))
    const sauvegarde = [sauvegarde1, sauvegarde2, sauvegarde3]

    creerMain()
    main.style.flexDirection = 'column'

    sauvegarde.forEach((s) => {
        
        const save = document.createElement('div')
        save.id = 'save'
        save.innerText = `sauvegarde${s.id}`
        main.append(save)

        save.addEventListener('click', async () => {
            localStorage.setItem(s, 'sauvegarde')
            function verification() {
                return new Promise((resolve, reject) => {
                    const donnees = localStorage.getItem(`${s}`);
                    if (donnees === 'sauvegarde') {
                        fetchAllData(s.id)
                        save.innerText = 'Chargement...'
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
    })
}