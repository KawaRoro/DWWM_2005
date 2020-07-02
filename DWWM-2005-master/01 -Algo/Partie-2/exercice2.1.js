
//Exercice 2.1.1 :

//L'utilisateur saisit une valeur en kilomètres comprise entre 0.01 et 1 000 000. Si la valeur est hors limite, 
//l'utilisateur est invité à saisir une nouvelle valeur. Si la valeur est égale à "q", le programme se termine et se ferme.
//Formule km vers mi :
//Le programme affiche le résultat de la conversion sous forme de nombre réel double précision.
//Exemple d’affichage en mode Console :
//Programme de conversion Kilomètres -> Miles. Saisir une valeur en Kilomètres :
//17
//17 Kilomètres = 10.5655 Miles
//Appuyez sur une touche pour quit ter.

//const readline = require (" readline" ) ;
//const rl = readline ({
   // inpit: ProcessingInstruction.toString,
  //  output: ProcessingInstruction.stdout
//});



//declaration de Variables
let input ;
let result ;
input = entree_utilisateur;
result = input * 1,60;


//algo 

 do {
    
        console.log ("veuillez saisir un nombre entre 0.01 et 1 000 000 ");
        input = entree_utilisateur
        if ( entree_utilisateur < 0.01 || entree_utilisateur> 1000000){
           result = input * 1,60;
           
        }
    
     else {
        console.log("saisir une nouvelle valeur ");
    
     } 



 }while ( ! ( entree_utilisateur < 0.01  || entree_utilisateur > 1000000));


