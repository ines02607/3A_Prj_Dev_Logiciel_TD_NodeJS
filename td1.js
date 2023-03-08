// TP1 - Méthode de Développement Logiciel
// Créateur : Inès Mazouz
// Classe : INFO 3A

/**
 * 
 * @param {string[]} tab list of xx 
 * @param {*} motcle 
 * @returns 
 */

// ===========================================
// Appel des autres fichiers js
// ===========================================

const occurence = require("./occurence.js");

// ===========================================
// Lecture des fichiers
// ===========================================

// on définie fs pour la lecture du fichier json
const fs = require("fs");
// on vient lire le fichier users.json
let rawdata = fs.readFileSync("users.json");
// on manipule le fichier via cet objet nommé tab
let tab = JSON.parse(rawdata);

// ===========================================
// Saisi d'argument
// ===========================================

var arguments = process.argv; // on va ajouter l'argument à prendre en compte lors de la compilation
// soit country, soit company (au choix)
// on vient définir la clé à prendre en compte comme l'argument saisie lors de la compilation
let motcle = arguments[2];

// ===========================================
// Tri du tableau
// ===========================================

// on vient stocker le résultat de la fonction dans une variable result
var result = occurence.occurence(tab, motcle);
// on vient effectuer un tri inverse (b - a pour un tri décroissant // a - b pour un tri croissant)
result.sort(function(a,b) {return b.occurrence - a.occurrence}); // on précise qu'on compare des occurences
// on vient retourner le résultat trié dans l'ordre décroissant
console.log(result);

// COMPILATION : node nom.js argument