const Player = require('../src/api/models/Player.js');

/**
 * Test par CRUD le modele Player
 */
class Crud_Player {
    constructor() {
        //pseudo bdd players
        this.players = [];
    }

    readAll(_filter) {
        let search = function (a, b) {
            return a.email - b.email;
        }
        return this.players.sort(search);
    }

    /**
     * 
     * @param _player Objet
     */
    creat(_player) {
        this.players.push(_player);
    }

    read(_email) {
        let result, sch;
        sch = function (pl) {
            return pl.email === _email;
        }
        result = this.players.find(sch);
        if (!result) {
            result = false;
        }
        return result;
    }

    update(_player) {
        let sch = function (pl) {
            return pl.email == _player.email;
        }
        return this.players.slice(sch, 1);
    }

    delete(_email) {
        let schin, index;
        schin = function (pl) {
            return pl.email === _email;
        }
        index = this.players.findIndex(schin);
        this.players.slice(index, 1);
    }

    lowGames() {
        return this.players.sort((a, b) => a.totalGames - b.totalGames)[0]
    }

    higherGames() {
        return this.players.sort((a, b) => b.totalGames - a.totalGames)[0]
    }

    lowScore() {
        return this.players.sort((a, b) => a.totalScore - b.totalScore)[0]
    }

    higherScore() {
        return this.players.sort((a, b) => b.totalScore - a.totalScore)[0]
    }
}


const part = new Crud_Player();

//data
const player1 = new Player();
player1.setUsername('John');
player1.setPassword('azerty');
player1.setEmail('jjohn@outlook.fr');
player1.addIsLogged(true);

const player2 = new Player();
player2.setUsername('doe');
player2.setPassword('azerty');
player2.setEmail('ddoe@outlook.fr');
player2.addIsLogged(false);

const player3 = new Player();
player3.setUsername('doede');
player3.setPassword('azerty');
player3.setEmail('doede@outlook.fr');
player3.addIsLogged(true);

const player4 = new Player();
player4.setUsername('coco');
player4.setPassword('azerty');
player4.setEmail('coco@outlook.fr');
player4.addIsLogged(true);

//init players
part.creat(player1);
part.creat(player2);
part.creat(player3);
part.creat(player4);

/**
 * Affichage des informations des joueurs
 */
//All players
let i = 1;
part.readAll().forEach(player => {
    console.log("###################")
    console.log("#", i++)
    console.log("#", player.getUsername());
    console.log("#", player.getEmail());
    console.log("# mdp:", player.getPassword());
    console.log("# Games toto:", player.getTotalGames());
    console.log("# Score toto:", player.getTotalScore());
    console.log("# date register:", player.getDateCreation());
    console.log("# Connected:", player.IsLogged());
    console.log("###################\n")
});

//search player
console.log("search par email");
console.log(part.read('coco@outlook.fr'), "\n");
//update player
console.log("update password & games");
part.update(player3.setPassword('qsdfghj'));
part.update(player3.addTotalGames(2));
part.update(player2.addTotalScore(5));
console.log(part.read('doede@outlook.fr'), "\n");
//sort score
part.update(player2.addTotalScore(2));
console.log("sort Games");
console.log(part.lowGames(), "\n");
console.log(part.higherGames(), "\n");
console.log("sort Score");
console.log(part.lowScore(), "\n");
console.log(part.higherScore(), "\n");

part.delete(player3);

