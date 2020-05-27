/**
 * JAVASCRIPT:  Exercices
 * 
 * Définition d'un "Point"
 * 
 * 
 * CONSIGNES : 
 * 1) Lisez la description et étudiez la classe "Point" ci-dessous (celle-ci est partiellement implémentée)
 * 2) Implémentez les méthodes suivantes:
 *  - move(int x, int y)    : définit de nouvelles coordonnées (x=abscisses, y=ordonnées)
 *  - duplicate()           : retourne une nouvelle instance de "Point" avec les mêmes coordonnées que l'instance actuelle
 *  - copy(Point _point)    : copie les coordonnées du "Point" fourni en argument dans l'instance actuelle
 *  - rabbit(Point _point)  : Les coordonnées de l'instance actuelle et du "Point" fourni en argument sont échangées
 * 
 * RESTRICTIONS :
 *  - Le corps de la méthode "rabbit" ne peut contenir que 3 instructions au maximum et ne doit pas impliquer la création d'autres fonctions !
 * 
 * Le petit programme qui suit la classe doit fonctionner en l'état (non modifié)
 */

 /**
  * La classe "Point" représente les coordonnées d'un point dans une zone à 2 dimensions
  */
class Point 
{
    /**
     * Constructeur: Initialise une nouvelle instance de la classe "Point"
     * @param int _x Coordonnée horizontale du point (abscisse). Valeur négative acceptée
     * @param int _y Coordonnée verticale du point (ordonnée). Valeur négative acceptée
     */
    constructor(_x, _y) {
        this.x = _x; // 
        this.y = _y; //
    }

    duplicate() {
        const duplicate = new Point(this.x, this.y);
        return duplicate;
    }

    copy(_obj_point) {
        this.x =  _obj_point.x; // target <- source
        this.y =  _obj_point.y; // target <- source
        return this;
    }

    rabbit(_obj_point) {
        let save_obj_point_x = this.x;
        let save_obj_point_y = this.y;

        this.x = _obj_point.x;
        this.y = _obj_point.y;

        _obj_point.x = save_obj_point_x;
        _obj_point.y = save_obj_point_y;

        //return this;
    }

    /**
     * Retourne une représentation textuelle du Point
     * @return string Les coordonnées du Point
     */
    toString() {
        return "(" + this.x + "," + this.y + ")";
    }

}



/**
 * Programme "Point"
 * Décrivez ci-dessous en quelques lignes le programme suivant
 * (utilité, finalité)
 * 
 * 
 * 
 * 
 * 
 */

let p1 = new Point(0, 1);
let p2 = new Point(2, 3);
let p3 = new Point(4, 5);
let p4;
let p5;

console.log(p1);     // affiche: Point { x: 0, y: 1 }
console.log(p2);     // affiche: Point { x: 2, y: 3 }
console.log(p3);     // affiche: Point { x: 4, y: 5 }

p4 = p3.duplicate();
console.log(p3 !== p4);         // affiche: true
console.log(p3.toString());     // affiche (4,5)
console.log(p4.toString());     // affiche: (4,5)

p2.copy(p1);
console.log(p1 !== p2);         // affiche: true
console.log(p1.toString());     // affiche:  (0,1)
console.log(p2.toString());     // affiche:  (0,1)

p1.rabbit(p3);
console.log(p1 !== p3);         // affiche: true
console.log(p1.toString());     // affiche:  (4,5)
console.log(p3.toString());     // affiche:  (0,1)
/**/
