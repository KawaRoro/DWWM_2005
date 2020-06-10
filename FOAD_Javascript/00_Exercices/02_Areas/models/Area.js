const Point = require('./Point.js');

/**
 * JAVASCRIPT:  Exercices
 * 
 * Coordonnées dans un espace à 2 dimensions type "fenêtre"
 * 
 * 
 * CONSIGNES : 
 * 1) Lisez la description de la classe "Area"
 * 2) Implémentez le code nécessaire à son bon fonctionnement en suivant les indications dans sa description
 * 3) Implémentez ensuite le programme suivant :
 *      a) Créer 2 "Area"
 *          a.1) Area 1 : 4 lignes x 4 colonnes
 *          a.2) Area 2 : 8 lignes x 6 colonnes
 *      b) Dans la 1ère "Area", ajouter 8 "Point" (coordonnées au choix, 5 dans les limites de la zone et 3 hors limites)
 *      c) Dans la 2nde "Area", ajouter 6 "Point" (coordonnées au choix, tous en dehors des limites)
 *      d) Créer ensuite 2 "Point" distincts ayant les mêmes coordonnées
 *      e) Les ajouter dans chacune des zones (1 "Point" par zone)
 *      f) Pour chaque zone : 
 *          - Afficher tous les points qui se trouvent hors des limites de la zone
 *          - Exécuter la méthode "needAllInside"
 *          - Afficher tous les points
 *          - Afficher le nombre d'emplacements libres
 * 
 */


/**
 * Class Area
 * Un "Point" est un objet représentant des coordonnées (x,y) dans un espace à 2 dimensions
 * Une "Area" est un objet représentant une zone à 2 dimensions (coïncidence?)
 * Une "Area" est obligatoirement définie par une largeur (nombre de colonnes) et une hauteur (nombre de lignes) pour former une grille.
 * On peut ajouter, déplacer et supprimer des "Point" à l'intérieur d'une Area (1 seul "Point" par coordonnée).
 * Une "Area" ne peut contenir plus de "Point" que de coordonnées disponibles dans la zone.
 * (une zone 4x4 est limitée à 16 points)
 * Les "Point" ajoutés peuvent se situer en dehors des limites de la zone (la limite du nombre de point par zone ne peut pas être dépassée !).
 * 
 * Le "Point" d'origine (0,0) d'une "Area" est situé au coin supérieur gauche 
 * Le "Point" d'origine existe toujours (créé dans le constructeur) et ne peut être supprimé 
 * A partir du "Point" d'origine, la zone s'étend vers la droite pour les abscisses et vers le bas pour les ordonnées 
 *
 *
 * ALGORITHME AJOUTER/DEPLACER UN POINT DANS UNE AREA: 
 *
 * 1) En cas d'ajout, si la zone (Area) est pleine (Toutes les coordonnées "dans les limites" sont occupées par un "Point")
 *    1.1) Ajout impossible, renvoyer false
 *
 * 2) Si un "Point" existe déjà aux mêmes coordonnées:
 *    2.1) Rechercher la position libre la plus proche du "Point" d'origine (0,0)
 *    2.2) Si 2 positions son éligibles (distance égale), celle la plus proche du bord supérieur de la zone est privilégiée
 *       
 * 3) Enregistrer le "Point" dans la zone
 * 
 * 4) Renvoyer true
 */
class Area 
{
    /**
     * Constructeur: Initialise une nouvelle instance de la classe "Area"
     * La largeur et la hauteur définissent respectivement le nombre de colonnes et de lignes. 
     * @param int _width largeur de la zone
     * @param int _height hauteur de la zone
     */
    constructor(_width, _height) {
        this.width = parseInt(_width);
        this.height = parseInt(_height);
        //this.size = this.height * this.width;
        this.point = [];
        //this.point.push(new Point(0, 0));
        this.origin = new Point(0, 0);
    }

    /**
     * Vérifi si le point est déjà occupé
     * @returns Boolean true en cas de succès, false en cas d'échec
     */
    checkUsedPoint(_targetPoint) {
        let checkUsedPoint = this.point.find((p) => p.x === _targetPoint.x && p.y === _targetPoint.y);
        if(checkUsedPoint == undefined){
            return true;
        }else{
            //console.log("checkUsedPoints ->"+checkUsedPoint);
            return false;
        }
    }

    /**
     * Vérifi si le point est dans la zone
     * @returns Boolean true en cas de succès, false en cas d'échec
     */
    checkZonePoint(_point) {
        
        if ( ((_point.x >= 0) && (_point.x <= this.width)) || ((_point.y >= 0) && (_point.y <= this.height)) ) {
            return true;
        }else{
            return false;
        }
    }

    /**
     * Valide un objet Area
     * @param Area _area
     */
    isValid(_point) {

        //console.log(typeof _point);
        if(!(_point instanceof Point)) {            
            return false;
        }

        return true;
    }

    /**
     * Vérifi la position d'un point par rapport aux coordonnées 0 . 0
     * @param Point _point 
     * @returns Boolean true en cas de succès, false si l'ajout est impossible 
     */
    checkClosePoint(_point) {
        let newTargetPoint;
            
        if( (Math.sign(_point.x)==1) && (Math.sign(_point.y)==1) ){
            newTargetPoint = new Point(_point.x-1, _point.y-1);
        }else if( (Math.sign(_point.x)==0) && (Math.sign(_point.y)==0) ){
            newTargetPoint = new Point(0, 0);
        }else if( (Math.sign(_point.x)==-1) && (Math.sign(_point.y)==-1) ){
            newTargetPoint = new Point(_point.x+1, _point.y+1);
        }else if( (Math.sign(_point.x)==1) && (Math.sign(_point.y)==-1) ){
            newTargetPoint = new Point(_point.x-1, _point.y+1);
        }else if( (Math.sign(_point.x)==-1) && (Math.sign(_point.y)==+1) ){
            newTargetPoint = new Point(_point.x+1, _point.y-1);
        }else if( (Math.sign(_point.x)==0) && (Math.sign(_point.y)==-1) ){
            newTargetPoint = new Point(0, _point.y+1);
        }else if( (Math.sign(_point.x)==-1) && (Math.sign(_point.y)==0) ){
            newTargetPoint = new Point(_point.x+1, 0);
        }else{
            newTargetPoint = new Point(0, 0);
        }
        return newTargetPoint;
    }


    /**
     * Ajoute un "Point" dans la zone
     * Le "Point" peut se trouver hors des limites de la zone
     * @param Point _point 
     * @returns Boolean true en cas de succès, false si l'ajout est impossible 
     */
    addPoint(_point) {

        if(!this.isValid(_point)) {
            return false;
        }

        if(this.checkUsedPoint(_point)){
            this.point.push(_point);
            return true;
        } else {
            // Search point.x point.y le plus proche de x = 0 et y = 0 
            let addTargetPoint = this.checkClosePoint(_point);
            if(this.checkUsedPoint(addTargetPoint)) {
                _point.move(addTargetPoint.x, addTargetPoint.y);
                this.point.push(_point);
                return true;
            }else{
               this.addPoint(addTargetPoint);
               return false;
            }

        }
    }

    /**
     * Déplace un point existant dans la zone vers de nouvelles coordonnées
     * Les nouvelles coordonnées peuvent se trouver hors limites
     * @returns Boolean true en cas de succès, false en cas d'échec
     */
    movePoint(_originPoint , _targetPoint) {
        
        if(!this.isValid(_originPoint) || !this.isValid(_targetPoint)){
            return false;
        }

        if(this.checkUsedPoint(_targetPoint)){
            _originPoint.move(_targetPoint.x, _targetPoint.y);
            return true;
        }

        return false;
    }

    /**
     * Tri du tableau de point par ordre croissant
     * @returns array // Retourne un tableau de point par ordre croissant
     */
    sortingPoint() {
        let sortingPoint = this.point.sort(function(a,b) {
            if( a.x === b.x ) return a.y-b.y;
            return a.x-b.x;
        });
        return sortingPoint;
    }

    /**
     * Vérifie la position de chaque "Point" existant dans la zone
     * Chaque Point hors des limites est automatiquement déplacé dans les limites vers la position libre la plus proche
     * @returns int le nombre de points déplacés
     */
    needAllInside(/* déterminer les paramètres */) {
        //console.log(this.sortingPoint());
        let listSortingPoint = this.sortingPoint();

        for (let i = 0; i < listSortingPoint.length; i++) {
            if (listSortingPoint[i] != undefined) {
                
                if (!this.checkZonePoint(listSortingPoint[i]) ) {
                    // Déplacement du point
                    console.log(this.checkZonePoint(listSortingPoint[i]));
                }
            }
        }

    }

    /**
     * Vérification de la position de chaque "Point" existant dans la zone
     * Chaque Point hors des limites est automatiquement affiché
     * @returns int le nombre de points affichés
     */
    checkAllInside(/* déterminer les paramètres */) {
        
        let listSortingPoint = this.sortingPoint();

        for (let i = 0; i < listSortingPoint.length; i++) {
            if (listSortingPoint[i] != undefined) {
                
                if (!this.checkZonePoint(listSortingPoint[i]) ) {
                    // Déplacement du point
                    console.log(listSortingPoint[i]);
                }
            }
        }

    }
}

module.exports = Area;