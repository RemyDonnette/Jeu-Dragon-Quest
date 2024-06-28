import { creerMain } from "./lib/creerMain.js"
import { creerVille } from "./lib/creerVille.js"
import { appelMusique } from "./lib/creerAudio.js"

// Appel de la musique de fond
appelMusique('./audio/musiques/villeDQ11.mp3')

// Création de la ville de base
creerMain()
creerVille(2)

// Création du chateau


