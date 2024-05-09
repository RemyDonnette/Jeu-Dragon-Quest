import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import express from 'express';
import cors from 'cors';
import { open, readFile, writeFile } from 'node:fs/promises';


// Récuperation de l'url
const dir = dirname(fileURLToPath(import.meta.url))
const nomFichier = join(dir, '/sauvegardes/emplacement1.json')
console.log(nomFichier)

// Fonction de lecture du fichier
export async function lireSauvegarde() {
    const lireSauvegarde1 = await readFile(nomFichier, { encoding: 'utf8' })
    return JSON.parse(lireSauvegarde1)
    }

// Fonction d'écrasement du fichier
export async function ecraserSauvegarde() {
    const ecraserSauvegarde = await writeFile(nomFichier, ecraserSauvegarde, { encoding: 'utf8' })
    return JSON.parse(ecraserSauvegarde)
}


const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());


app.listen(port, (error) => {
    error ? console.log(error) : console.log(`le serveur a démarré sur le port ${port}`);
})


app.get('/monstres', (request, response) => {
    const monstres = [
        {
            id: 0, 
            nom: 'Héros',
            image: './images/heros/heros.png',
            mini: './images/heros/herosMini.png',
            niveau: 1,
            argent: 0,
            pvMax: 50,
            pv: 50,
            pmMax: 15,
            pm: 15,
            force: 12,
            vitalite: 5,
            agilite: 8,
            sagesse: 10,
            critique: 5,
            esquive: 5,
            inventaire: [],
        },
        {
            id: 1, 
            nom: 'Slime',
            image: './images/monstres/slime.png',
            taille: '20%',
            decalage: '10%',
            pvMax: 35,
            pv: 35,
            pmMax: 0,
            pm: 0,
            force: 12,
            vitalite: 5,
            agilite: 8,
            sagesse: 8,
            critique: 3,
            esquive: 3,
        },
        {
            id: 2,
            nom: 'Cyclope',
            image: './images/monstres/cyclope.png',
            taille: '80%',
            decalage: '10%',
            pvMax: 35,
            pv: 35,
            pmMax: 0,
            pm: 0,
            force: 12,
            vitalite: 5,
            agilite: 8,
            sagesse: 8,
            critique: 3,
            esquive: 3,
        },
        {
            id: 3,
            nom: 'Golem de Briques',
        },

    ];
    response.send(monstres);
})

app.get('/armes', (request, response) => {
    const armes = [
        {
            id: 1, 
            nom: 'Baton de cypres',
            image: '',
            puissance: '',
        },
        {
            id: 2,
            nom: 'Epée de cuivre',
            image: '',
            puissance: '',
        },
        {
            id: 3,
            nom: 'Epée large de fer',
            image: '',
            puissance: '',
        },

    ];
    response.send(armes);
})

app.get('/armures', (request, response) => {
    const armures = [
        {
            id: 1, 
            nom: 'tenue de voyageur'
        },
        {
            id: 2,
            nom: 'Tenue de voyageur'
        },
        {
            id: 3,
            nom: 'Epée en fer'
        },

    ];
    response.send(armures);
})

app.get('/objets', (request, response) => {
    const objets = [
        {
            id: 1, 
            nom: 'Herbe medicinale',
            image: '../front/images/icones/objets/herbeMedicinale.webp',
            description: 'Une herbe curative qui rend 30PV'
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
    response.send(objets);
})

app.get('/sauvegarde', (req, res) => {
    lireSauvegarde().then((r) => res.send(r));
    });