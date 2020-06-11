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
         this.x = parseFloat(_x) || 0; // 
         this.y = parseFloat(_y) || 0; // parseFloat(_y)
     }
 
     move(_x, _y) {
         this.x = _x;
         this.y = _y;
         //return true;
     }
 
     duplicate() {
         const duplicate = new Point(this.x, this.y);
         return duplicate;
     }
 
     copy(_point) {
         this.x =  _point.x; // target <- source
         this.y =  _point.y; // target <- source
         return this;
     }
 
     rabbit(_point) {
        /*
         let save_point_x = this.x;
         let save_point_y = this.y;
 
         this.x = _point.x;
         this.y = _point.y;
 
         _point.x = save_point_x;
         _point.y = save_point_y;
         */
         
        let save_point = new Point(this.x, this.y);
        this.copy(_point);
        _point.copy(save_point);
        //return save_point;
     }
 
     /**
      * Retourne une représentation textuelle du Point
      * @return string Les coordonnées du Point
      */
     toString() {
         return "(" + this.x + "," + this.y + ")";
     }
 
 }

module.exports = Point;