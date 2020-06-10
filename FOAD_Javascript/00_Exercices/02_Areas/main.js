const Point = require('./models/Point.js');
const Area = require('./models/Area.js');


let area1 = new Area(4, 4);

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

console.log(area1.point);

let area2 = new Area(8, 6);

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

console.log(area2.point);