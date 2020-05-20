
var choix_joueur = 0;
var choix_ia = 0;
var score_joueur = 0;
var score_ia = 0;


do {
    choix_ia = Math.round(Math.random() * 2);
    console.log(choix_ia);

    choix_joueur = 1;

    if(choix_joueur < 0){
        console.log("Le joueur souhaite arrêter");
        break;
    }else{
        if((choix_ia - choix_joueur)=== 2 ){
            score_ia += 1;
        } else if((choix_joueur - choix_ia)=== 2 ){
            score_joueur += 1;
        } else if((choix_ia - choix_joueur)=== 1 ){
            score_ia += 1;
        } else if((choix_joueur - choix_ia)=== 1 ){
            score_joueur += 1;
        } else {
            console.log("Aucun point attribué");
        }
    }

} while( (score_ia < 10) && (score_joueur < 10) && (choix_joueur >= 0) );

console.log("Le score de l'IA est:", score_ia);
console.log("Le score du joueur est:", score_joueur);

if(score_ia > score_joueur){
    console.log("L'IA à gagné");
}else{
    console.log("Le joueur à gagné");
}