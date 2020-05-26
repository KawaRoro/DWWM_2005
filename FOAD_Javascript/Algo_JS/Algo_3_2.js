
var str = "abc.";
var cpt_item = 0; // compteur occurences
var longeur_str = str.length;
var letter;
var search = "a";
var lastCharacter = str[longeur_str-1];

for(var i = 0; i < longeur_str ; i++ ) {
    letter = str.charAt(i); // str[i]
    if(letter === search) {
        cpt_item++;
    }
}

if(str == ".") {
    console.log("LA CHAINE EST VIDE");
}else {
    console.log("Le nombre de a contenu dans la chaine est de ",cpt_item);
}