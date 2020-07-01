const Point = require("./Point.js");

/**
 * La classe porte
 */

class Door extends Point {

    #isOpen;

    constructor(_x, _y, _isOpen) {
        super(_x, _y);
        this.#isOpen = _isOpen || false;
    }

    getIsOpen() {
        return this.#isOpen;
    }

    openClose() {
        this.#isOpen ? false : true;
    }
}

module.exports = Door; 