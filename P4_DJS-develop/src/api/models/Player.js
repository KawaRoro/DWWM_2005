/**
 * @class Player
 */
class Player {
    constructor() {
        this.id = 0;
        this.username = "";
        this.password = "";
        this.email = "";
        this.totalGames = 0;
        this.totalScore = 0;
        this.dateCreation = new Date();
        this.lastLogged = "";
        this.isLogged = "";
    }

    isValidId(_id){
        if (Number.isNaN(_id)){
            return (false);
        }else{
            return (true);
        }
    }

    /**
     * @param _id integer 
     */
    setId(_id) {
        if(this.isValidId(_id)) {
            this.id = _id;
        }else{
            this.id = 0;
        }
    }

    /**
     * @returns integer
     */
    getId() {
        if(this.isValidId(this.id)) {
            return this.id;
        }else{
            return 0;
        }
    }

    /**
     * @param _username string 
     */
    setUsername(_username) {
        this.username = _username;
    }

    /**
     * @returns string
     */
    getUsername() {
        return this.username;
    }

    /**
     * @param _password string
     */
    setPassword(_password) {
        this.password = _password
    }

    /**
     * @returns string
     */
    getPassword() {
        return this.password;
    }

    /**
     * 
     * @param _email string  
     */
    setEmail(_email) {
        this.email = _email;
    }

    /**
     * @returns string
     */
    getEmail() {
        return this.email;
    }

    /**
     * @param _nbr int
     */
    addTotalGames(_nbr) {
        this.totalGames = this.totalGames + _nbr;
    }

    /**
     * @returns int
     */
    getTotalGames() {
        return this.totalGames;
    }

    /**
     * 
     * @param _nbr int
     */
    addTotalScore(_nbr) {
        this.totalScore = this.totalScore + _nbr;
    }

    /**
     * @returns int
     */
    getTotalScore() {
        return this.totalScore;
    }

    /**
     * @returns Date Objet
     */
    getDateCreation(){
        return this.dateCreation;
    }

    /**
     * @param _date date 
     */
    setLastLogged(_date) {
        this.lastLogged = _date;
    }

    /**
     * @returns date
     */
    getLastLogged() {
        return this.lastLogged;
    }

    /**
     * @returns boolean
     */
    IsLogged() {
        return this.isLogged;
    }

    /**
     * @param _islogged boolean
     * 
     */
    addIsLogged(_islogged) {
        this.isLogged = _islogged;
    }
}

module.exports = Player;