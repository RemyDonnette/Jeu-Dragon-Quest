import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());


app.listen(port, (error) => {
    error ? console.log(error) : console.log(`le serveur a démarré sur le port ${port}`);
})


// app.get('/donnees', (request, response) => {
//     const donnees = [
//         {
//             id: 0, 
//             niveau: 1,
//             argent: 0,
//         },
//     ];
//     response.send(donnees);
// })

app.get('/monstres', (request, response) => {
    const monstres = [
        {
            id: 0, 
            nom: 'Héros',
            image: './images/monstres/heros.png',
            niveau: 1,
            argent: 0,
            vieMax: 100,
            vie: 100,
            inventaire: [],
        },
        {
            id: 1, 
            nom: 'Slime',
            image: './images/monstres/slime.png',
            taille: '20%',
            decalage: '5rem',
            vieMax: 60,
            vie: 60
        },
        {
            id: 2,
            nom: 'Smilodon'
        },
        {
            id: 3,
            nom: 'Golem de terre'
        },

    ];
    response.send(monstres);
})

app.get('/armes', (request, response) => {
    const armes = [
        {
            id: 1, 
            nom: 'Baton de cypres'
        },
        {
            id: 2,
            nom: 'Epée en cuivre'
        },
        {
            id: 3,
            nom: 'Epée en fer'
        },

    ];
    response.send(armes);
})