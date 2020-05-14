console.log("Hello World !");
console.info("Information");
console.warn("Avertissement");
console.log("Erreur");

console.group('Groupe 1');
    console.log('Item 1');
    console.log('Item 2');
    console.group('Sous Groupe 1');
        console.log('Item 1');
        console.log('Item 2');
    console.groupEnd();
console.groupEnd();