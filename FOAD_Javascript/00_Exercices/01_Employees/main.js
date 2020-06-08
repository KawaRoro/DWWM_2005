const Employee = require ('./Models/Employee.js');
const Enterprise = require('./Models/Enterprise.js');


var employe1 = new Employee(1, 'DEV', 'Mike', 'DWWM', 50000, new Date('1982-12-28'));

const ets = new Enterprise();

ets.create(employe1);
ets.create(new Employee(2, 'RAB', 'IT', 'CDA', 60000, new Date('1982-12-28')));


let monFiltre = emp => emp.hireDate > new Date();

let r1 = ets.readAll(monFiltre);
let r2 = ets.readAll(emp => emp.hireDate < new Date());

console.log(r1);
console.log(r2);


let myEmployee = ets.read(2);

myEmployee.firstName = "OT";

ets.update(myEmployee);


myEmployee2 = new Employee();

ets.update(myEmployee2);


console.log();