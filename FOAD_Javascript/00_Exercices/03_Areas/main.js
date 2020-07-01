const Point = require('./models/Point.js');
const Area = require('./models/Area.js');

// a)
let area1 = new Area(4, 4); // a.1)
let area2 = new Area(8, 6); // a.2)

// b)
let p1a1 = new Point(1, 1);
let p2a1 = new Point(2, 2);
let p3a1 = new Point(3, 3);
let p4a1 = new Point(4, 4);
let p5a1 = new Point(5, 5);
let p6a1 = new Point(6, 6);
let p7a1 = new Point(7, 7);
let p8a1 = new Point(8, 8);

//area1.addPoint(p0);
area1.addPoint(p1a1);
area1.addPoint(p2a1);
area1.addPoint(p3a1);
area1.addPoint(p4a1);
area1.addPoint(p5a1);
area1.addPoint(p6a1);
area1.addPoint(p7a1);
area1.addPoint(p8a1);

//console.log(area1.point);

// c)
let p1a2 = new Point(11, 1);
let p2a2 = new Point(12, 2);
let p3a2 = new Point(13, 3);
let p4a2 = new Point(14, 4);
let p5a2 = new Point(15, 5);
let p6a2 = new Point(16, 6);

area2.addPoint(p1a2);
area2.addPoint(p2a2);
area2.addPoint(p3a2);
area2.addPoint(p4a2);
area2.addPoint(p5a2);
area2.addPoint(p6a2);

//console.log(area2.point);

// d) Créer ensuite 2 "Point" distincts ayant les mêmes coordonnées
//let ref1a1 = new Point(10, 10);
//let ref2a2 = new Point(10, 10);

// e) Les ajouter dans chacune des zones (1 "Point" par zone)
//area1.addPoint(ref1a1);
//area2.addPoint(ref2a2);

// Lot de mouvement de points 
/*
console.log(area1.movePoint(p1a1 , new Point(8, 1)));
console.log(area1.movePoint(p2a1 , new Point(7, 2)));
console.log(area1.movePoint(p3a1 , new Point(6, 3)));
console.log(area1.movePoint(p4a1 , new Point(5, 4)));
console.log(area1.movePoint(p5a1 , new Point(4, 5)));
console.log(area1.movePoint(p6a1 , new Point(3, 6)));
console.log(area1.movePoint(p7a1 , new Point(2, 7)));
console.log(area1.movePoint(p8a1 , new Point(1, 8)));
*/

//console.log(area1.point);
//console.log(area2.point);

// f) Pour chaque zone : 
// * - Afficher tous les points qui se trouvent hors des limites de la zone
// Affichage de tous les points en dehors de la zone
area1.checkAllOutside();
area2.checkAllOutside();

// * - Exécuter la méthode "needAllInside"
area1.needAllInside();
area2.needAllInside();

// * - Afficher tous les points
console.log(area1.point);
console.log(area2.point);

// * - Afficher le nombre d'emplacements libres
area1.freeSpaceAllInside();
area2.freeSpaceAllInside();