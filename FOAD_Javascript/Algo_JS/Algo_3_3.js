

var str_120_caract = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus consequat elementum. Pellentesque pulvinar tellus.";
var length_str = str_120_caract.length;
var tab_alphabet = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var length_tab_alphabet = tab_alphabet.length;
//var tab_cpt_occ = [26];
var tab_cpt_occ = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

if(length_str >= 120) {
    
    // Deux boucles une pour le texte à lire et une autre pour l'alhpabet à vérifier
    for(var i = 0; i < length_str ; i++ ) {
        var charAtNumber = str_120_caract.charAt(i);
        
        for(var f = 0; f < length_tab_alphabet ; f++ ) {
            
            if(tab_alphabet[f] == charAtNumber) {
                tab_cpt_occ[f] = tab_cpt_occ[f]+1;
                //console.log( tab_cpt_occ[f] );
            }
        }
        
        
    }
    
    // Affichage du compte rendu
    for(var e = 0; e < length_tab_alphabet ; e++ ) {
        
        console.log( "La lettre " , tab_alphabet[e] , " est présent " , tab_cpt_occ[e] , " fois");
        
    }
    console.log( "----------------------------------------------------------------------------------- " );
    // Todolist : faire eventuellement un affichage des itérations par ordre croissant
    /*tab_cpt_occ.sort(function(a, b){return b - a});

    for(var e = 0; e < length_tab_alphabet ; e++ ) {
        
        console.log( "La lettre " , tab_alphabet[e] , " est présent " , tab_cpt_occ[e] , " fois");
        
    }*/
}