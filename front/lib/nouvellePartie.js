import { fetchData } from "./fetch.js";
import { creerMain } from "./creerMain.js";

export function nouvellePartie() {

    fetchData('/monstres').then((data) => {
        localStorage.setItem('heros', JSON.stringify(data[0]))
    })
    const heros = JSON.parse(localStorage.getItem('heros')) 
    console.log(heros)

    creerMain()

    const save1 = document.createElement('div')
    save1.style.width = '500px'
    save1.style.height = '75px'
    save1.style.border = 'solid 5px black'
    save1.style.backgroundColor = 'white'
    main.append(save1)

    save1.addEventListener('click', () => {
        
    })



}