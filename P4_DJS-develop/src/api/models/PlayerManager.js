const Player = require('./Player.js');
/**
 * @class PlayerManager
 */
class PlayerManager {
    constructor() { //_player
        
        this.cptId = 0;
        this.players = [];

        //this.players.forEach(player => this.creat(player));
        
        //readAll(part);

    }

    ascendingTotalGames() { // croissant AscendingTotalGames
        return this.players.sort((a, b) => a.totalGames - b.totalGames)[0];
    }

    descendingTotalGames() { // décroissant DescendingTotalGames
        return this.players.sort((a, b) => b.totalGames - a.totalGames)[0];
    }

    lowestScore() {
        return this.players.sort((a, b) => a.totalScore - b.totalScore)[0];
    }

    highestScore() {
        return this.players.sort((a, b) => b.totalScore - a.totalScore)[0];
    }

    sort = {
        ascendingTotalGames : () => this.players.sort((a, b) => a.totalGames - b.totalGames)[0], 
        descendingTotalGames : () => this.players.sort((a, b) => b.totalGames - a.totalGames)[0],
    }

    /**
     * Affichage des informations des joueurs
     * @param  _part 
     */
    readAll() { //_part 
        //All players - Todo : Ajout filtre
        //let i = 1;
        
        this.players.forEach(player => {
            console.log("######################################")
            console.log("# id:", player.getId()); // i++
            console.log("# username:", player.getUsername());
            console.log("# mdp:", player.getPassword());
            console.log("# email:", player.getEmail());
            console.log("# games total:", player.getTotalGames());
            console.log("# score total:", player.getTotalScore());
            console.log("# date register:", player.getDateCreation());
            console.log("# connected:", player.IsLogged());
            console.log("######################################\n");
        });
    }

    /**
     * 
     * @param _player Objet
     */
    creat(_player) {
        _player.setId(this.cptId);
        this.players.push(_player);
        this.cptId++;
        //return part;
    }

    /**
     * 
     * @param _param // exemple _id = 1
     * @param _canon // exemple _canon = id // username // password // email //
     * @param _filter // 
     */
    read(_param, _canon) { 
        let result, rSearch;
        if(_canon == "id") return result = this.readId(_param);
        if(_canon == "username") return result = this.readUsername(_param);
        if(_canon == "password") return result = this.readPassword(_param);
        if(_canon == "email") return result = this.readEmail(_param);
        if(_canon == "totalGames") return result = this.readTotalGames(_param);
        if(_canon == "totalScore") return result = this.readTotalScore(_param);
        
        if(!result){
            rSearch = function (pl) {
                //return pl._canon === _param;
                return pl[String(_canon)] === _param;
            }
            result = this.players.find(rSearch);
            //console.log(result);
            if (!result) {
                result = false;
            }
            return result;
        }
    }

    readId(_id) {
        return this.getFindSearch(_id , "id");
    }

    readUsername(_username) {
        return this.getFindSearch(_username , "username");
    }

    readPassword(_password) {
        return this.getFindSearch(_password , "password");
    }

    readEmail(_email) {
        return this.getFindSearch(_email , "email");
    }

    readTotalGames(_totalGames) {
        return this.getFindSearch(_totalGames , "totalGames");
    }

    readTotalScore(_totalScore) {
        return this.getFindSearch(_totalScore , "totalScore");
    }

    /**
     * Recherche les joueurs par rapport à un critére donnée: id // username // password // email
     * @param _param // exemple _id = 1
     * @param _canon // exemple _canon = id // username // password // email //
     */
    check(_param, _canon) { 
        let result, rSearch;
        if(_canon == "id") return result = this.readId(_param);
        if(_canon == "username") return result = this.readUsername(_param);
        if(_canon == "password") return result = this.readPassword(_param);
        if(_canon == "email") return result = this.readEmail(_param);
        if(_canon == "totalGames") return result = this.readTotalGames(_param);
        if(_canon == "totalScore") return result = this.readTotalScore(_param);
        
        if(!result){
            rSearch = function (pl) {
                //return pl._canon === _param;
                return pl[String(_canon)] === _param;
            }
            result = this.players.filter(rSearch);
            //console.log(result);
            if (!result) {
                result = false;
            }
            return result;
        }
    }

    /**
     * Met à jour un player
     * @param PlayerManager _player 
     * @param _param // exemple _id = 1
     * @param _canon // exemple _canon = id // username // password // email //
     * @param _newParam // exemple _id = 1
     */
    update(_player, _param, _canon, _newParam) {
        // _param = _player._param
        let sch = function (pl) {
            //return pl.email == _player.email;
            //console.log(_param);
            //console.log(pl[String(_canon)]);
            return pl[String(_canon)] === _param; // Ou _player._param -> plus précis
        }
        let target = this.players.slice(sch, 1);
        //console.log("Target -> " + target);

        target[0][String(_canon)] = _newParam;

        return target[0].getId();
    }
    

    /**
     * 
     * @param _param // exemple _id = 1
     * @param _canon // exemple _canon = id // username // password // email //
     */
    getFindSearch(_param , _canon) {
        let result, sch;
        sch = function (pl) {
            //console.log( pl[String(_canon)] );
            return pl[String(_canon)] === _param;
        }
        result = this.players.find(sch);
        //console.log( result );
        if (!result) {
            result = false;
        }
        return result;
    }

    /**
     * Supprime un player
     * @param int _id 
     */
    delete(_id) {

        return delete this.players[_id];
        
    }

    /**
     * Désactiver un player (sans le supprimer)
     * @param int _id 
     */
    desactivate(_id) {
        let index; // = this.readId(_id)
        let schin;
        schin = function (pl) {
            return pl.getId() === _id;
        }

        index = this.players.findIndex(schin);
        this.players.slice(index, 1);
        
        //return 
    }
}

module.exports = PlayerManager;

//////////////////////////////////

const player0 = new Player();
player0.setUsername('IA');
player0.setPassword('ytreza');
player0.setEmail('ia@6x7.fr');
player0.addIsLogged(true);

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

//////////////////////////////////

const playerManager = new PlayerManager();
playerManager.creat(player0); // IA
playerManager.creat(player1);
playerManager.creat(player2);
playerManager.creat(player3);
playerManager.creat(player4);
//playerManager.readAll();

//search player
//console.log("search par id");
//playerManager.read(3, "id");

//console.log("search par totalScore");
//console.log(playerManager.read(0, 'totalScore'));
//console.log(playerManager.check(0, 'totalScore'));

//playerManager.update(player0, player0.getPassword(), 'password' , "azerty" );
//playerManager.update(player0, player0.getTotalGames(), 'totalGames' , "8" );
playerManager.players[0].totalGames = 8;
playerManager.players[1].totalGames = 9;
playerManager.players[2].totalGames = 10;
playerManager.players[3].totalGames = 11;
playerManager.players[4].totalGames = 12;

//console.log(playerManager.check(0, 'totalScore'));

//playerManager.readAll();

/*console.log(playerManager.delete(0));
console.log(playerManager.delete(1));
console.log(playerManager.delete(2));
console.log(playerManager.delete(3));*/

playerManager.readAll();

//console.log(playerManager.sort.ascendingTotalGames());
console.log(playerManager.sort.descendingTotalGames());

//console.log("search par id");
//playerManager.readId(3);

//console.log("search par email");
//console.log(playerManager.readEmail('coco@outlook.fr'), "\n");

//////////////////////////////////

//const playerManager1 = new PlayerManager(player1, player2, player3,player4);
//const playerManager2 = new PlayerManager(player2);
//const playerManager3 = new PlayerManager(player3);
//const playerManager4 = new PlayerManager(player4);

//playerManager1.readAll();
//playerManager2.readAll();
//playerManager3.readAll();
//playerManager4.readAll();