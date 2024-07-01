import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import express from 'express';
import cors from 'cors';
import { open, readFile, writeFile } from 'node:fs/promises';


// Récuperation de l'url
const dir = dirname(fileURLToPath(import.meta.url))
const emplacement1 = join(dir, '/sauvegardes/emplacement1.json')
const emplacement2 = join(dir, '/sauvegardes/emplacement2.json')
const emplacement3 = join(dir, '/sauvegardes/emplacement3.json')


// Fonction de lecture du fichier
export async function lireSauvegarde(emplacement) {
    const lireSauvegarde1 = await readFile(emplacement, { encoding: 'utf8' })
    return JSON.parse(lireSauvegarde1)
    }

// Fonction d'écrasement du fichier
export async function ecraserSauvegarde(emplacement) {
    const ecraserSauvegarde = await writeFile(emplacement, ecraserSauvegarde, { encoding: 'utf8' })
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
            image: '../front/images/icones/armes/batonDeCypres.png',
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
        {   id: 0   },
        {
            id: 1, 
            nom: 'magasinCaubaltin',
            image: '../front/images/background/magasins/magasinCaubaltin.png',
            charset: '../front/images/personnages/vendeurCaubaltin.png',
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
            nom: 'magasinHeliodor',
            image: '../front/images/background/magasins/magasinHeliodor.png',
            charset: '../front/images/personnages/npc1.png',
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
            id: 3, 
            nom: 'magasinYotto',
            image: '../front/images/background/magasins/magasinYotto.png',
            charset: '../front/images/personnages/npc1.png',
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
            id: 4, 
            nom: 'magasinGallopolis',
            image: '../front/images/background/magasins/magasinGallopolis.png',
            charset: '../front/images/personnages/npc1.png',
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
            id: 5, 
            nom: 'magasinGondolia',
            image: '../front/images/background/magasins/magasinGondolia.png',
            charset: '../front/images/personnages/npc1.png',
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
            id: 6, 
            nom: 'magasinOctogonia',
            image: '../front/images/background/magasins/magasinOctogonia.png',
            charset: '../front/images/personnages/npc1.png',
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
            id: 7, 
            nom: 'magasinPuertoValor',
            image: '../front/images/background/magasins/magasinPuertoValor.png',
            charset: '../front/images/personnages/npc1.png',
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
            id: 8, 
            nom: 'magasinTahitirea',
            image: '../front/images/background/magasins/magasinTahitirea.png',
            charset: '../front/images/personnages/npc1.png',
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
            id: 9, 
            nom: 'magasinNauticaa',
            image: '../front/images/background/magasins/magasinNauticaa.png',
            charset: '../front/images/personnages/npc1.png',
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
            id: 10, 
            nom: 'magasinPhnomPenh',
            image: '../front/images/background/magasins/magasinPhnomPenh.png',
            charset: '../front/images/personnages/npc1.png',
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
            id: 11, 
            nom: 'magasinSniflheim',
            image: '../front/images/background/magasins/magasinSniflheim.png',
            charset: '../front/images/personnages/npc1.png',
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
            id: 12, 
            nom: 'magasinArborea',
            image: '../front/images/background/magasins/magasinArborea.png',
            charset: '../front/images/personnages/npc1.png',
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
        
    ];
    response.send(magasins);
})

app.get('/eglises', (request, response) => {
    const eglises = [
        {   id: 0   },
        {
            id: 1, 
            nom: 'egliseCaubaltin',
            image: '../front/images/background/eglises/egliseCaubaltin.png',
            charset: '../front/images/personnages/npc1.png',
            phraseEntree: 'Bien le Bonjour !',
            phraseAttente: 'J\'ai plein d\'armes et d\'objets en reserve.\n Qu\'est ce qu\'il te faut ?',
            phraseAchat: 'J\'ai plein de merveilles à vendre !',
            phraseVente: 'Que veux tu vendre ?',
            phraseSortie: 'A la prochaine !',
        },
        {
            id: 2, 
            nom: 'egliseHeliodor',
            image: '../front/images/background/eglises/egliseHeliodor.png',
            charset: '../front/images/personnages/npc1.png',
            phraseEntree: 'Bien le Bonjour !',
            phraseAttente: 'J\'ai plein d\'armes et d\'objets en reserve.\n Qu\'est ce qu\'il te faut ?',
            phraseAchat: 'J\'ai plein de merveilles à vendre !',
            phraseVente: 'Que veux tu vendre ?',
            phraseSortie: 'A la prochaine !'
        },
        {
            id: 3, 
            nom: 'egliseYotto',
            image: '../front/images/background/eglises/egliseYotto.png',
            charset: '../front/images/personnages/npc1.png',
            phraseEntree: 'Bien le Bonjour !',
            phraseAttente: 'J\'ai plein d\'armes et d\'objets en reserve.\n Qu\'est ce qu\'il te faut ?',
            phraseAchat: 'J\'ai plein de merveilles à vendre !',
            phraseVente: 'Que veux tu vendre ?',
            phraseSortie: 'A la prochaine !',
        },
        {
            id: 4, 
            nom: 'egliseGallopolis',
            image: '../front/images/background/eglises/egliseGallopolis.png',
            charset: '../front/images/personnages/npc1.png',
            phraseEntree: 'Bien le Bonjour !',
            phraseAttente: 'J\'ai plein d\'armes et d\'objets en reserve.\n Qu\'est ce qu\'il te faut ?',
            phraseAchat: 'J\'ai plein de merveilles à vendre !',
            phraseVente: 'Que veux tu vendre ?',
            phraseSortie: 'A la prochaine !',
        },
        {
            id: 5, 
            nom: 'egliseGondolia',
            image: '../front/images/background/eglises/egliseGondolia.png',
            charset: '../front/images/personnages/npc1.png',
            phraseEntree: 'Bien le Bonjour !',
            phraseAttente: 'J\'ai plein d\'armes et d\'objets en reserve.\n Qu\'est ce qu\'il te faut ?',
            phraseAchat: 'J\'ai plein de merveilles à vendre !',
            phraseVente: 'Que veux tu vendre ?',
            phraseSortie: 'A la prochaine !',
        },
        {
            id: 6, 
            nom: 'egliseOctogonia',
            image: '../front/images/background/eglises/egliseOctogonia.png',
            charset: '../front/images/personnages/npc1.png',
            phraseEntree: 'Bien le Bonjour !',
            phraseAttente: 'J\'ai plein d\'armes et d\'objets en reserve.\n Qu\'est ce qu\'il te faut ?',
            phraseAchat: 'J\'ai plein de merveilles à vendre !',
            phraseVente: 'Que veux tu vendre ?',
            phraseSortie: 'A la prochaine !',
        },
        {
            id: 7, 
            nom: 'eglisePuertoValor',
            image: '../front/images/background/eglises/eglisePuertoValor.png',
            charset: '../front/images/personnages/npc1.png',
            phraseEntree: 'Bien le Bonjour !',
            phraseAttente: 'J\'ai plein d\'armes et d\'objets en reserve.\n Qu\'est ce qu\'il te faut ?',
            phraseAchat: 'J\'ai plein de merveilles à vendre !',
            phraseVente: 'Que veux tu vendre ?',
            phraseSortie: 'A la prochaine !',
        },
        {
            id: 8, 
            nom: 'egliseTahitirea',
            image: '../front/images/background/eglises/egliseTahitirea.png',
            charset: '../front/images/personnages/npc1.png',
            phraseEntree: 'Bien le Bonjour !',
            phraseAttente: 'J\'ai plein d\'armes et d\'objets en reserve.\n Qu\'est ce qu\'il te faut ?',
            phraseAchat: 'J\'ai plein de merveilles à vendre !',
            phraseVente: 'Que veux tu vendre ?',
            phraseSortie: 'A la prochaine !',
        },
        {
            id: 9, 
            nom: 'egliseNauticaa',
            image: '../front/images/background/eglises/egliseNauticaa.png',
            charset: '../front/images/personnages/npc1.png',
            phraseEntree: 'Bien le Bonjour !',
            phraseAttente: 'J\'ai plein d\'armes et d\'objets en reserve.\n Qu\'est ce qu\'il te faut ?',
            phraseAchat: 'J\'ai plein de merveilles à vendre !',
            phraseVente: 'Que veux tu vendre ?',
            phraseSortie: 'A la prochaine !',
        },
        {
            id: 10, 
            nom: 'eglisePhnomPenh',
            image: '../front/images/background/eglises/eglisePhnomPenh.png',
            charset: '../front/images/personnages/npc1.png',
            phraseEntree: 'Bien le Bonjour !',
            phraseAttente: 'J\'ai plein d\'armes et d\'objets en reserve.\n Qu\'est ce qu\'il te faut ?',
            phraseAchat: 'J\'ai plein de merveilles à vendre !',
            phraseVente: 'Que veux tu vendre ?',
            phraseSortie: 'A la prochaine !',
        },
        {
            id: 11, 
            nom: 'egliseSniflheim',
            image: '../front/images/background/eglises/egliseSniflheim.png',
            charset: '../front/images/personnages/npc1.png',
            phraseEntree: 'Bien le Bonjour !',
            phraseAttente: 'J\'ai plein d\'armes et d\'objets en reserve.\n Qu\'est ce qu\'il te faut ?',
            phraseAchat: 'J\'ai plein de merveilles à vendre !',
            phraseVente: 'Que veux tu vendre ?',
            phraseSortie: 'A la prochaine !',
        },
        {
            id: 12, 
            nom: 'egliseArborea',
            image: '../front/images/background/eglises/egliseArborea.png',
            charset: '../front/images/personnages/npc1.png',
            phraseEntree: 'Bien le Bonjour !',
            phraseAttente: 'J\'ai plein d\'armes et d\'objets en reserve.\n Qu\'est ce qu\'il te faut ?',
            phraseAchat: 'J\'ai plein de merveilles à vendre !',
            phraseVente: 'Que veux tu vendre ?',
            phraseSortie: 'A la prochaine !',
        },
    ];
    response.send(eglises);
})

app.get('/villes', (request, response) => {
    const villes = [
        {   
            id: 0,
            nom: 'Test',
            divId: 'testLocalisation',
        },
        {
            id: 1, 
            nom: 'Caubaltin',
            divId: 'caubaltin',
            image: '',
            lien: '1_caubaltin.js',
            punaise: {top: 57, left: 47},
            batiments: [
                {nom: 'Magasin', top: 40, left: 30},
                {nom: 'Eglise', top: 40, left: 70},
                {nom: 'Retour vers la carte', top: 90, left: 94},  
            ]
        },
        {
            id: 2,
            nom: 'Heliodor',
            divId: 'heliodor',
            image: '',
            lien: '2_heliodor.js',
            punaise: {top: 42.7, left: 47.8},
            batiments: [
                {nom: 'Magasin', top: 28, left: 7},
                {nom: 'Eglise', top: 23, left: 89},
                {nom: 'Chemin vers le chateau', top: 33, left: 40},
                {nom: 'Retour vers la carte', top: 90, left: 94},  
            ]
        },
        {
            id: 3,
            nom: 'Yotto',
            divId: 'yotto',
            image: '',
            lien: '3_yotto.js',
            punaise: {top: 65, left: 80},
            batiments: [
                {nom: 'Magasin', top: 40, left: 30},
                {nom: 'Eglise', top: 40, left: 70},
                {nom: 'Retour vers la carte', top: 90, left: 94},  
            ]
        },
        {
            id: 4,
            nom: 'Gallopolis',
            divId: 'gallopolis',
            image: '',
            lien: '4_gallopolis.js',
            punaise: {top: 74.5, left: 63.2},
            batiments: [
                {nom: 'Magasin', top: 40, left: 30},
                {nom: 'Eglise', top: 40, left: 70},
                {nom: 'Retour vers la carte', top: 90, left: 94},  
            ]
        },
        {
            id: 5,
            nom: 'Gondolia',
            divId: 'gondolia',
            image: '',
            lien: '5_gondolia.js',
            punaise: {top: 72.5, left: 45.2},
            batiments: [
                {nom: 'Magasin', top: 40, left: 30},
                {nom: 'Eglise', top: 40, left: 70},
                {nom: 'Retour vers la carte', top: 90, left: 94},  
            ]
        },
        {
            id: 6,
            nom: 'Octogonia',
            divId: 'octogonia',
            image: '',
            lien: '6_octogonia.js',
            punaise: {top: 14, left: 60.1},
            batiments: [
                {nom: 'Magasin', top: 40, left: 30},
                {nom: 'Eglise', top: 40, left: 70},
                {nom: 'Retour vers la carte', top: 90, left: 94},  
            ]
        },
        {
            id: 7,
            nom: 'Puerto Valor',
            divId: 'puertoValor',
            image: '',
            lien: '7_puertoValor.js',
            punaise: {top: 61.5, left: 38.3},
            batiments: [
                {nom: 'Magasin', top: 40, left: 30},
                {nom: 'Eglise', top: 40, left: 70},
                {nom: 'Retour vers la carte', top: 90, left: 94},  
            ]
        },
        {
            id: 8,
            nom: 'Tahitirea',
            divId: 'tahitirea',
            image: '',
            lien: '8_tahitirea.js',
            punaise: {top: 77, left: 78.7},
            batiments: [
                {nom: 'Magasin', top: 40, left: 30},
                {nom: 'Eglise', top: 40, left: 70},
                {nom: 'Retour vers la carte', top: 90, left: 94},  
            ]
        },
        {
            id: 9,
            nom: 'Nauticaa',
            divId: 'nauticaa',
            image: '',
            lien: '9_nauticaa.js',
            punaise: {top: 47, left: 63.3},
            batiments: [
                {nom: 'Magasin', top: 40, left: 30},
                {nom: 'Eglise', top: 40, left: 70},
                {nom: 'Retour vers la carte', top: 90, left: 94},  
            ]
        },
        {
            id: 10,
            nom: 'Phnom Penh',
            divId: 'phnomPenh',
            image: '',
            lien: '10_phnomPenh.js',
            punaise: {top: 63.5, left: 25.8},
            batiments: [
                {nom: 'Magasin', top: 40, left: 30},
                {nom: 'Eglise', top: 40, left: 70},
                {nom: 'Retour vers la carte', top: 90, left: 94},  
            ]
        },
        {
            id: 11,
            nom: 'Sniflheim',
            divId: 'sniflheim',
            image: '',
            lien: '11_sniflheim.js',
            punaise: {top: 17, left: 17},
            batiments: [
                {nom: 'Magasin', top: 40, left: 30},
                {nom: 'Eglise', top: 40, left: 70},
                {nom: 'Retour vers la carte', top: 90, left: 94},  
            ]
        },
        {
            id: 12,
            nom: 'Arborea',
            divId: 'arborea',
            image: '',
            lien: '12_arborea.js',
            punaise: {top: 25, left: 36},
            batiments: [
                {nom: 'Magasin', top: 40, left: 30},
                {nom: 'Eglise', top: 40, left: 70},
                {nom: 'Retour vers la carte', top: 90, left: 94},  
            ]
        },
    ];
    response.send(villes);
})

app.get('/lieux', (request, response) => {
    const lieux = [
        {   
            id: 0,
            nom: 'Test',
            divId: 'testLocalisation',
        },
        {
            id: 1, 
            nom: 'Pic de Caubaltin',
            divId: 'picDeCaubaltin',
            image: '',
            lien: '1.1_picDeCaubaltin.js',
            punaise: {top: 57, left: 47},
            batiments: [
                {nom: 'Magasin', top: 40, left: 30},
                {nom: 'Eglise', top: 40, left: 70},
                {nom: 'Retour vers la carte', top: 90, left: 94},  
            ]
        },
    ];
    response.send(lieux);
})

app.get('/sauvegarde1', (req, res) => {
    lireSauvegarde(emplacement1).then((r) => res.send(r));
});

app.get('/sauvegarde2', (req, res) => {
    lireSauvegarde(emplacement2).then((r) => res.send(r));
});

app.get('/sauvegarde3', (req, res) => {
    lireSauvegarde(emplacement3).then((r) => res.send(r));
});