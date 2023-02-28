// TD1 Méthode de Développement Logiciel
// Inès Mazouz INFO 3A
// =================================================================================
// On vient lire le fichier users.json
// on déclare l'utilisation de fs
const fs = require('fs'); 
// on donne le fichier à lire nommé users.json
let rawdata = fs.readFileSync("users.json");
// on transforme le fichier texte en objet pour pouvoir travailler dessus
let users = JSON.parse(rawdata);

// On crée un tableau pour stocker les pays et leur nombre d'occurences
let tabpays = new Array(); // déclaration du tableau

//test
// On souhaite parcourir le tableau
// On va venir compter le nombre d'occurence pour ne pas afficher plusieurs fois le meme pays

// affichage à l'écran
console.log("Pays & Occurences");

let i = 0;
//boucle pour récupérer les pays
for (let j=0; j<users.length; j++)
{   
    // on initialise idem à true
    let idem = true;
    let compt = 0;
    for (let k = 0; k<tabpays.length; k++) {
        // si le pays est déjà dans le tab
        if (users[j].country == tabpays[k])
        {  
            // on renvoie faux
            idem = false;
            compt = compt+1;
        }
    }    

    // si c'est nouveau on renvoie true
    if (idem == true)
    {
        // on copie donc dans le tab
        tabpays[i]=users[j].country;
        // on incrémente
        i = i +1;
    }
}

// Affichage de chaque pays une fois

console.log(tabpays);

