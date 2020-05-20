
function hello(){
    console.log("Hello world");
}
hello();
hello();

function welcome(){
    console.log("Welcome");
}

var w = welcome();
console.log(w);
console.log(welcome());

function talk(_message){
    console.log(_message);
}

talk("Bonjour");

const hi = function() {
    console.log("hi !");
}

hi();
hi();


const bye = () => {
    console.log('Bye !');
}

bye();