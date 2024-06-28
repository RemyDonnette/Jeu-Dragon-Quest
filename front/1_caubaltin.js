import { creerMain } from "./lib/creerMain.js"
import { creerVille } from "./lib/creerVille.js"
import { appelMusique } from "./lib/creerAudio.js"

// Création de l'audio  
appelMusique('./audio/musiques/caubaltin.mp3')

// Création de la ville de base
creerMain()
creerVille(1)
