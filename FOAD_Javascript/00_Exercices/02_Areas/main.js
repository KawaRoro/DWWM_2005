const Point = require('./models/Point.js');
const Area = require('./models/Area.js');


let stage1 = new Area(6, 6);

console.log(stage1.point);

let p0 = new Point(1, 0);
let p1 = new Point(2, 1);
let p2 = new Point(3, 2);
let p3 = new Point(4, 3);
let p4 = new Point(5, 4);
let p5 = new Point(6, 5);
let p6 = new Point(0, 6);
let p7 = new Point(1, 0);

stage1.addPoint(p0);
stage1.addPoint(p1);
stage1.addPoint(p2);
stage1.addPoint(p3);
stage1.addPoint(p4);
stage1.addPoint(p5);
stage1.addPoint(p6);
stage1.addPoint(p7);

console.log(stage1.point);