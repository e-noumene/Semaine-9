$liste = document.getElementById("liste");
$prenom = document.getElementById("prenom");
$nom = document.getElementById("nom");
$numero = document.getElementById("numero");
$ajouter = document.getElementById("ajouter");
$recherche = document.getElementById("recherche");
$rechercher = document.getElementById("rechercher");
$resultats = document.getElementById("resultats");
contacts = [{
    prenom: "Lanctot",
    nom: "Granville",
    numero: "03.94.49.02.95"
}, {
    prenom: "Arnaud",
    nom: "Cheneye",
    numero: "05.74.47.38.93"
}, {
    prenom: "Daniel",
    nom: "Truchon",
    numero: "04.54.59.99.06"
}, {
    prenom: "Roxanne",
    nom: "Boncoeur",
    numero: "02.37.72.02.96"
}, {
    prenom: "Mallory",
    nom: "Cinqmars",
    numero: "02.07.27.15.51"
}, {
    prenom: "Saber",
    nom: "Boutot",
    numero: "01.50.22.47.39"
}];


function texteContact (contacts) {
    return contacts.nom + " " + contacts.prenom + " (" + contacts.numero + ")";

}

 function afficherListe() {
     elements = "";
     for (i = 0; i < contacts.length; i++) {
         elements += "<li>" + texteContact(contacts[i]) + "</li>";
     }
     $liste.innerHTML = elements;
 }

 function ajouter() {
     contacts.push({
         prenom: $prenom.value,
         nom: $nom.value,
         numero: $numero.value
     });
     afficherListe();
 }
function rechercher() {
    recherche = $recherche.value;
    elements = "";
    for (i = 0; i < contacts.length; i++) {
        if (contacts[i].prenom == recherche || contacts[i].nom == recherche || contacts[i].numero == recherche) {
            elements += "<li>" + texteContact(contacts[i]) + "</li>";
        }
    }
    $resultats.innerHTML = elements;
}
$ajouter.onclick = ajouter;
$rechercher.onclick = rechercher;
 afficherListe();
