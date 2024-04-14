import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());


app.listen(port, (error) => {
    error ? console.log(error) : console.log(`le serveur a démarré sur le port ${port}`);
})

app.get('/monstres', (request, response) => {
    const monsters = [
        {
            id: 0, 
            nom: 'Héros',
            image: './images/monstres/heros.png',
        },
        {
            id: 1, 
            nom: 'Slime',
            image: './images/monstres/slime.png',
            taille: '20%',
            decalage: '5rem'
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
    response.send(monsters);
})
app.get('/armes', (request, response) => {
    const weapons = [
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
    response.send(weapons);
})