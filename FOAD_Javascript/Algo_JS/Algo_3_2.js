
var str = "abc.";
var cpt_occ = 0; // compteur occurences
var longeur_str = str.length;
var letter;

for(var i = 0; i < longeur_str ; i++ ) {
    letter = str.charAt(i);
    if(letter == 'a') {
        cpt_occ++;
    }
}

if(str == ".") {
    console.log("LA CHAINE EST VIDE");
}else {
    console.log("Le nombre de a contenu dans la chaine est de ",cpt_occ);
}