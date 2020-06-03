/**
 * @class Player
 */
class Player {
    constructor() {
        this.username = "";
        this.password = "";
        this.email = "";
        this.totalGames = 0;
        this.totalScore = 0;
        this.dateCreation = new Date();
        this.lastLogged = "";
        this.isLogged = "";
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