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
            animation: 'fa-bounce',
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
            animation: 'faa-bounce',
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
        'armes',
        {
            id: 1, 
            nom: 'Baton de cypres',
            image: '../front/images/icones/armes/batonDeCypres.webp',
            description: 'Un simple baton de bois. Cette arme est faible, certes, mais tapera toujours plus que vos poings.',
            effetDescription: 'Attaque +7',
            puissance: 7,
            prixAchat: 10,
            prixVente: 5,
        },
        {
            id: 2,
            nom: 'Epée de cuivre',
            image: '../front/images/icones/armes/epeeDeCuivre.png',
            description: 'Tout voyageur qui se respecte sait ce que c\'est. C\'est une épée de cuivre. Comme son nom l\'indique, elle n\'est faite que de cuivre. Faut pas s\'attendre à faire des miracles avec...',
            effetDescription: 'Attaque +13',
            puissance: 13,
            prixAchat: 270,
            prixVente: 135,
        },
        {
            id: 3,
            nom: 'Epée large de fer',
            image: '',
            description: '',
            effetDescription: '',
            puissance: 20,
            prixAchat: 500,
            prixVente: 250,
        },

    ];
    response.send(armes);
})

app.get('/armures', (request, response) => {
    const armures = [
        'armures',
        {
            id: 1, 
            nom: 'Tenue de voyageur',
            image: '../front/images/icones/armures/tenueDeVoyageur.png',
            description: 'Ce sont de bons vêtements solides. Ils ne céderont pas facilement, mais ce n\'est pas non plus une tenue de combat.',
            effetDescription: 'Defense +7',
            puissance: '',
            prixAchat: 70,
            prixVente: 35,
        },
        {
            id: 2,
            nom: 'Armure de cuir',
            image: '../front/images/icones/armures/armureDeCuir.png',
            description: 'Oui, cette armure est en peau. Qu\'est-ce que je peux vous dire C\'est une armure qui améliorera votre défense. Voilà, c\'est tout.',
            effetDescription: 'Defense +11',
            puissance: '',
            prixAchat: 180,
            prixVente: 90,
        },
        {
            id: 3,
            nom: 'Epée en fer',
            image: '',
            description: '',
            effetDescription: '',
            puissance: '',
            prixAchat: 0,
            prixVente: 0,
        },

    ];
    response.send(armures);
})

app.get('/objets', (request, response) => {
    const objets = [
        'objets',
        {
            id: 1, 
            nom: 'Herbe medicinale',
            image: '../front/images/icones/objets/herbeMedicinale.png',
            description: 'Cet objet est très utile pour soigner vos compagnons. Mangez-la pour regagner un peu de forces. Vous ne pouvez vous en servir qu\'une fois.',
            effet: 30,
            effetDescription: 'Soigne 30 PV',
            prixAchat: 8,
            prixVente: 4,
        },
        {
            id: 2,
            nom: ''
        },
        {
            id: 3,
            nom: ''
        },

    ];
    response.send(objets);
})

app.get('/magasins', (request, response) => {
    const magasins = [
        {id: 0},
        {id: 1},
        {
            id: 2, 
            nom: 'magasinHeliodor',
            image: '../front/images/background/magasinHeliodor.png',
            charset: '../front/images/personages/npc1.png',
            phraseEntree: 'Bien le Bonjour !',
            phraseAttente: 'J\'ai plein d\'armes et d\'objets en reserve.\n Qu\'est ce qu\'il te faut ?',
            phraseAchat: 'J\'ai plein de merveilles à vendre !',
            phraseVente: 'Que veux tu vendre ?',
            phraseSortie: 'A la prochaine !',
            inventaire: [
                {type: 'objets', id: 1},
                {type: 'armes', id: 1},
                {type: 'armes', id: 2},
                {type: 'armures',id: 1},
                {type: 'armures',id: 2},
            ],
        },
        {
            id: 2,
            nom: 'magasinYotto',
        },
    ];
    response.send(magasins);
})

app.get('/lieux', (request, response) => {
    const lieux = [
        {id: 0},
        {
            id: 1, 
            nom: 'Caubaltin',
            divId: 'caubaltin',
            image: '',
            lien: '1_caubaltin.js',
            punaise: {top: 58, left: 48},
            batiments: [
                {},
                {},
                {},
            ]
        },
        {
            id: 2,
            nom: 'Heliodor',
            divId: 'heliodor',
            image: '',
            lien: '2_heliodor.js',
            punaise: {top: 42, left: 48},
            batiments: [
                {nom: 'Magasin', top: 28, left: 7},
                {nom: 'Eglise', top: 23, left: 89},
                {nom: 'Chemin vers le chateau', top: 33, left: 40},
                {nom: 'Retour vers la carte', top: 90, left: 94},  
            ]
        },
    ];
    response.send(lieux);
})

app.get('/sauvegarde', (req, res) => {
    lireSauvegarde().then((r) => res.send(r));
});