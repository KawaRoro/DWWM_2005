const Point = require("./Point.js");
/**
 * La classe mur (Wall)
 */

class Wall extends Point {

    #material;

    constructor(_x, _y, _material) {
        super(_x, _y);
        this.#material = 'bois';
    }

    getMaterial() {
        return this.#material;
    }

}

module.exports = Wall;