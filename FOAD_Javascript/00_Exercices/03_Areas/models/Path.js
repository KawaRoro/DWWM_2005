const Point = require("./Point.js");

/**
 * La classe chemin
 */

class Path extends Point {

    #player;
    #nbPassages;

    constructor(_x, _y, _player, _nbPassages) {
        super(_x, _y);
        this.setPlayer();
        this.setNbPassages();

    }

    getPlayer(){
        return this.#player;
    }

    setPlayer(_player){
       this.#player =  (typeof(_player) === Boolean)? _player : false;
    }

    getNbPassages(){
        return this.#nbPassages;
    }

    setNbPassages(_nbPassages) {
        _nbPassages = parseInt(_nbPassages || 0);
        this.#nbPassages = isFinite(_nbPassages) ? _nbPassages : 0;
    }


}

module.exports = Path;