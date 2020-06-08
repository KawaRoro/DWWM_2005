/**
 * @class Employee
 */

class Employee 
{

    /**
     * Constructeur
     */
    constructor(_id, _lastName, _firstName, _role, _salary, _hireDate) {

        this.id = parseInt(_id); // NaN
        this.lastName = _lastName || "Anonymous";
        this.firstName = _firstName || "Anonymous";
        this.role = _role || "Boulanger";
        this.salary = parseInt(_salary);
        this.hireDate = _hireDate;

        this.email = (this.firstName[0] + this.lastName).toLowerCase() + "@email.fr";
    }

    /**
     * Récupère le salaire mensuel de l'employé
     */
    getMonthlySalary() {
        //(salaire_mensuel = salaire_annuel / 12*0.75)
        return Math.round(this.salary/12*0.75);
    }

    getDaySeniority(hireDate) {
        //console.log(hireDate);
        let between_date_days = Date.now() - new Date(hireDate).getTime();
        between_date_days = between_date_days / (1000 * 3600 * 24) 
        return between_date_days;
    }

    /**
     * 
     */
    getSeniority_Masoud() {

        let now = new Date();
        //let embaucheDate = this.hireDate;
        
        let diff = now.getTime() - this.hireDate.getTime();
        diff = Math.floor(diff/(1000*60*60*24));
        let ans = Math.floor(diff / 365.25);

        diff  = diff - ans*365.25;
        let mois = Math.floor(diff/(365.25/12));

        diff = Math.round(diff - mois*(365.25/12));
        let jour = diff;

        if(jour > 0 && mois > 0 && ans > 0){
            return ans + " ans et " + mois + " mois et " + jour + " jours";
        }else if(jour > 0 && mois > 0 && ans == 0){
            return  mois + " mois et " + jour + " jours";
        } else if (jour > 0 && mois == 0 && ans == 0){
            return jour + " jours";
        }
        else {
            return "L'employé est un alien";
        }
    }

    getSeniority_Aurelien() {
        let now = new Date();
        let diff = now.getTime() - this.hireDate.getTime();
        let year = (1000*3600*24*365.25);
        let month = year/12;
        let day = year/365.25;
        let result = "";

        if(diff < 0) {
            return "L'employé vient du futur.";
        }
        else if(diff % day <= 1) {
            return "L'employé est un newbie.";
        }
        else {
            result += Math.floor(diff/year) + " ";
            diff %= year; // équivalent de "diff = diff % year;"
            result += Math.floor(diff/month) + " ";
            diff %= month;
            result += Math.floor(diff/day) + " ";
            return result;
        }

    }

    getSeniority() {
        let now = new Date(); 
        let y = now.getFullYear() - this.hireDate.getFullYear(); // années
        let m = now.getMonth() - this.hireDate.getMonth(); // mois
        let d = now.getDate() - this.hireDate.getDate(); // jours
        let result = "";

        if(m < 0) {
            y--;
            m += 12;
        }

        if(d < 0) {
            m--;
            d = Math.floor(d + (365.25/12));
        }

        if(y > 0) {
            result += y + " année(s) ";
        }

        if(m > 0) {
            result += m + " mois ";
        }

        if(d > 0) {
            result += d + " jour(s) ";
        }

        return result;

    }

    isValidId(_id){
        if (Number.isNaN(_id)){
            return (false);
        }else{
            return (true);
        }
    }

    getId() {
        if(this.isValidId(this.id)) {
            return this.id;
        }else{
            return 0;
        }
    }
    getLastName() {
        return this.lastName;
    }
    getFirstName() {
        return this.firstName;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
    getSalary() {
        return this.salary;
    }
    getHireDate() {
        return this.hireDate;
    }

    setId(_id) {
        if(this.isValidId(_id)) {
            this.id = _id;
        }else{
            this.id = 0;
        }
    }
    setLastName(_lastName) {
        this.lastName = _lastName;
    }
    setFirstName(_firstName) {
        this.firstName = _firstName;
    }
    setEmail(_email) {
        this.email = _email;
    }
    setRole(_role) {
        this.role = _role;
    }
    setSalary(_salary) {
        this.salary = _salary;
    }
    setHireDate(_hireDate) {
        this.hireDate = _hireDate;
    }
}



module.exports = Employee;




/** DÉBUT ZONE NON EDITABLE (Ne pas modifier les lignes suivantes) */


/** @var Employee employee1 */
//var employee1 = new Employee(1, 'Doe', 'John', 'manager', 82000, new Date('2020-12-28')); // création d'un nouvel employé

/** @var array employees */
//const employees = []; // tableau contenant les employés

//console.log(employee1); // doit afficher l'objet "employee1"
//console.log("Il y a " + employees.length + " employé(e)s."); // doit afficher "Il y a 5 employé(e)s."
//console.log(employees); // export des employés dans la console


/** FIN ZONE NON EDITABLE (Ne pas modifier les lignes précédentes) */



// Écrivez votre code à partir de la ligne suivante...

/*
employees.push(
    new Employee(3, 'B', 'Tim', 'Pâtissier', 50000, new Date('2019-03-18')),
    new Employee(4, 'C', 'Réda', 'Prof', 30000, new Date('2019-11-26')),
    new Employee(2, 'A', 'John', 'Videur', 23000, new Date('1520-05-27')),
    new Employee(5, 'D', 'Mike', 'Garagiste', 50000, new Date('2020-05-20')),
    new Employee(6, 'E', 'Gabi', 'Progamer', 1000000, new Date('2020-05-27')),
);

for(let i = 0; i < employees.length; i++) {

    console.log(employees[i].firstname + " " + employees[i].hireDate.toString());
    /*console.log(employees[i].getMonthlySalary());
    console.log(employees[i].getSeniority_Masoud());
    console.log(employees[i].getSeniority_Aurelien());
    console.log(employees[i].getSeniority());

}

var sortDate = function(a, b) {
    return a.hireDate - b.hireDate;
}

var sortSalary = function(a, b) {
    return a.salary - b.salary;
}

employees.sort(sortDate);

let oldEmp = employees[0];
console.log(oldEmp);

employees.sort(sortSalary);
let emp1 = employees[0];
let emp2 = employees[employees.length-1];
console.log(emp1, emp2);
*/
