
const Point = require("./Path.js");

/**
 * La classe arrivée
 */

 class Goal extends Path {

    #success

    constructor(_player, _nbPassages, _success) {
        super(_player, _nbPassages);
        this.#success = false;
    }

    getSuccess() {
        return this.#success;
    }

 }

 module.exports = Goal;