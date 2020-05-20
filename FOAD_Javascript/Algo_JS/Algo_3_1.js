
var tabElement = [1, 2, 3, 4, 5];
var n = 2; // information donnée
var return_value = 0;

for(var i = 0; i < tabElement.length ; i++ ) {
    if(tabElement[i]==n) {
        return_value = n;
    }
}

if(return_value == n) {
    console.log("L'élément trouvé: ", n);
}else {
    console.log("Non trouvé");
}