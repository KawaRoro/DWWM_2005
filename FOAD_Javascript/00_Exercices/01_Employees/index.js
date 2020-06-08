const Employee = require ('./Models/Employee.js');
const Enterprise = require(`./Models/bkp_Enterprise.js`);


//var emp_001 = new Employee();
var emp_000 = new Employee(0, 'Doe', 'John', 'manager', 82000, new Date('1982-12-28'));
var emp_001 = new Employee(1, 'Doe', 'John', 'manager', 82000, new Date('1982-12-28'));
var emp_002 = new Employee(2, 'Jenniard', 'Johnathan', 'première classe', 65000, new Date('2020-01-01'));
var emp_003 = new Employee(3, 'Schoenmaeker', 'Benjamin', 'administrateur', 200000, new Date('2004-05-06'));
var emp_004 = new Employee(4, 'Hamza', 'Réda', 'graphiste', 82000, new Date('1994-12-28'));
var emp_005 = new Employee(5, 'Boudier', 'Aurélien', 'salarié', 70000, new Date('1976-12-28'));

//console.log(emp_001.getId());

const ent_001 = new Enterprise();

ent_001.create(emp_000);
ent_001.create(emp_001);
ent_001.create(emp_002);
ent_001.create(emp_003);
ent_001.create(emp_004);
ent_001.create(emp_005);

//ent_001.readAll();

console.log(ent_001.update(emp_003, 'firstName' , "Johnny" ));
console.log(ent_001.update(emp_003, 'salary' , "2" ));

/*
ent_001.delete(0);
ent_001.delete(1);
ent_001.delete(2);
ent_001.delete(3);
ent_001.delete(4);
ent_001.delete(5);
*/


//console.log(ent_001.readAll('id'));
//console.log(ent_001.readAll('id', "desc"));
//console.log(ent_001.readAll('param', "desc", "salary"));

/*
console.log(ent_001.readAll('lastName'));
console.log(ent_001.readAll('firstName'));
console.log(ent_001.readAll('email'));
console.log(ent_001.readAll('role'));
console.log(ent_001.readAll('salary'));
console.log(ent_001.readAll('hireDate'));
*/

console.log(ent_001.getHigherSalary());
console.log(ent_001.getLowerSalary());
console.log(ent_001.getGapSalary());