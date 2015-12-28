$liste = document.getElementById("liste");
$texte = document.getElementById("texte");
$ajouter = document.getElementById("ajouter");
$supprimer = document.getElementById("supprimer");
users = ["Josie", "Dino", "Emmanuel", "Josianne"];

function afficherListe() {
    elements = "";
    for (i = 0; i < users.length; i++) {
        elements += "<li>" + users[i] + "</li>";
    }
    $liste.innerHTML = elements;
}

function ajouter() {
    users.push($texte.value);
    afficherListe();
}

function supprimer() {
    users.pop($liste.value);
    afficherListe();
}


$ajouter.onclick = ajouter;
$supprimer.onclick = supprimer;
afficherListe();
