/**
 * JAVASCRIPT:  Exercices
 * 
 * Listing d'employés
 * 
 * Consignes : 
 * A l'aide de la syntaxe orientée "classes", modélisez un objet "Employee" possédant les caractéristiques suivantes :
 *  Attributs: 
 *  - id (int): identifiant
 *  - lastname (string): nom
 *  - firstname (string): prénom
 *  - email (string): calculé automatiquement dans le constructeur (exemple: John Doe => jdoe@email.fr)
 *  - role (string): poste occupé
 *  - salary (int): salaire annuel BRUT
 *  - hiredate (Date): date d'embauche au format YYYY-MM-DD
 * 
 *  Méthodes:
 *  - getMonthlySalary() : retourne un entier -> le salaire mensuel NET calculé à partir du salaire annuel (salaire_mensuel = salaire_annuel / 12 * 0.75)
 *  - getSeniority() : renvoie une chaine -> l'ancienneté de l'employé (exemples: "19 jours", "3 mois et 2 jours", "2 ans 7 mois et 8 jours") 
 * 
 * Une fois modélisé et testé, complétez le tableau "employees" pour qu'il contienne 5 employés au total (ni plus, ni moins).
 * Parcourir ensuite le tableau complété et afficher chaque employé dans la console (nom, prénom, email, ancienneté, salaire mensuel NET)
 * Afficher ensuite, individuellement : 
 *  - L'employé ayant le plus d'ancienneté
 *  - L'employé avec le plus haut salaire
 *  - L'employé avec le plus bas salaire
 *  - La différence de salaire entre les 2 précédents 
 * 
 * Documentation Javascript complète: https://developer.mozilla.org/fr/docs/Web/JavaScript
 * Tutoriel Javascript: https://www.pierre-giraud.com/javascript-apprendre-coder-cours/introduction/ 
 */



/* COMPLÉTEZ LE PROGRAMME... */
var cpt_id = 0;
/**
 * @class Employee
 */
class Employee
{
    constructor(id, lastname, firstname, role, salary, hiredate) {

        this.id = id, // création d'un attribut "id"

        this.lastname = lastname, // création d'un attribut "lastname"

        this.firstname = firstname, // création d'un attribut "firstname"

        this.createEmail = function(lastname, firstname) {
            let short_firstname = firstname.substr(0, 1).toLocaleLowerCase(); // première lettre uniquement
            let str_email = short_firstname+lastname.toLocaleLowerCase()+"@email.fr"; // composition de l'email
            return str_email;
        },

        this.email = this.createEmail(this.lastname, this.firstname), // création d'un attribut "email"

        this.role = role, // création d'un attribut "role"
        
        this.salary = salary, // création d'un attribut "salary"
        this.getMonthlySalary = function(salary) {
            let monthSalary = salary / 12 * 0.75;
            return monthSalary;
        },

        this.createObjDate = function(hiredate) {
            let order_year_hiredate = hiredate.getFullYear(); //
            let order_month_hiredate = hiredate.getMonth()+1; // 
            let order_day_hiredate = hiredate.getDate(); // 
            
            hiredate = order_year_hiredate +"-"+ order_month_hiredate +"-"+ order_day_hiredate;

            return hiredate;
        },

        this.hiredate = this.createObjDate(hiredate), // création d'un attribut "hiredate"

        this.getDaySeniority = function(hiredate) {
            //console.log(hiredate);
            let between_date_days = Date.now() - new Date(hiredate).getTime();
            between_date_days = between_date_days / (1000 * 3600 * 24) 
            return between_date_days;
        }

        this.getSeniority = function(hiredate) {
            var between_date_in_year = 0;
            var between_date_in_month = 0;
            var between_date_in_days = 0;
            var result_date_in_year = 0;
            var result_date_in_month = 0;
            var result_date_in_days = 0;
            var save_date_in_year = 0;
            var save_date_in_month = 0;
            var save_date_in_days = 0;
            let between_date = Date.now() - new Date(hiredate).getTime(); // 
            let str_between_date = "";
            result_date_in_days = between_date / (1000 * 3600 * 24) ;


            //console.log("Date in days -> " + result_date_in_days);

            if(result_date_in_days > 365){
                result_date_in_year = result_date_in_days / 365;
                //console.log("Date in year -> " + result_date_in_year);
                save_date_in_year = Math.trunc(result_date_in_year);

                between_date_in_days = result_date_in_days - (Math.trunc(result_date_in_year)*365);
                //console.log("between_date_in_days -> " + between_date_in_days);
                result_date_in_days = between_date_in_days;
            }else{
                save_date_in_year = 0;
            }

            if(result_date_in_days > 30){
                result_date_in_month = result_date_in_days / 30;
                //console.log("Date in month -> " + result_date_in_month);
                save_date_in_month = Math.trunc(result_date_in_month);

                between_date_in_days = result_date_in_days - (Math.trunc(result_date_in_month)*30);
                //console.log("between_date_in_days -> " + between_date_in_days);
                //result_date_in_month = between_date_in_month;
            }else{
                save_date_in_month = 0;
            }

            save_date_in_days = Math.trunc(between_date_in_days);

            if(save_date_in_year > 0) {
                console.log("L'ancienneté de l'employé est de -> " + save_date_in_year + " ans, " + save_date_in_month + " mois, " +  save_date_in_days + " jours. " );
            }else {
                console.log("L'ancienneté de l'employé est de -> " + save_date_in_month + " mois, " +  save_date_in_days + " jours. " );
            }
            
            str_between_date = save_date_in_year + "-" + save_date_in_month + "-" +  save_date_in_days;

            //console.log("Date in days -> " + result_date_in_days);

            return str_between_date;
        }
        this.seniority = this.getSeniority(hiredate);
    }

    getId() {
        return this.id;
    }
    getLastname() {
        return this.lastname;
    }
    getFirstname() {
        return this.firstname;
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
    getHiredate() {
        return this.hiredate;
    }

    setId(_id) {
        this.id = _id;
    }
    setLastname(_lastname) {
        this.lastname = _lastname;
    }
    setFirstname(_firstname) {
        this.firstname = _firstname;
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
    setHiredate(_hiredate) {
        this.hiredate = _hiredate;
    }
}



/** DÉBUT ZONE NON EDITABLE (Ne pas modifier les lignes suivantes) */


/** @var Employee employee1 */
var employee1 = new Employee(1, 'Doe', 'John', 'manager', 82000, new Date('1982-12-28')); // création d'un nouvel employé

/** @var array employees */
const employees = [employee1]; // tableau contenant les employés

console.log(employee1); // doit afficher l'objet "employee1"
console.log("Il y a " + employees.length + " employé(e)s."); // doit afficher "Il y a 5 employé(e)s."
console.log(employees); // export des employés dans la console


/** FIN ZONE NON EDITABLE (Ne pas modifier les lignes précédentes) */



// Écrivez votre code à partir de la ligne suivante...

var employee1 = new Employee(1, 'Doe', 'John', 'manager', 82000, new Date('1982-12-28')); // création d'un nouvel employé
var employee2 = new Employee(2, 'Jenniard', 'Johnathan', 'première classe', 65000, new Date('2020-01-01'));
var employee3 = new Employee(3, 'Schoenmaeker', 'Benjamin', 'administrateur', 200000, new Date('2004-05-06'));
var employee4 = new Employee(4, 'Hamza', 'Réda', 'graphiste', 82000, new Date('1994-12-28'));
var employee5 = new Employee(5, 'Boudier', 'Aurélien', 'salarié', 70000, new Date('1976-12-28'));

const tab_employees = [employee1, employee2, employee3, employee4, employee5];

for(var i = 0; i < tab_employees.length; i++){
    //var_temp_salary = tab_employees[i].salary;
    console.log("Prénom-> " + tab_employees[i].firstname + " Nom -> " + tab_employees[i].lastname + " Email -> " + tab_employees[i].email +  " Ancienneté -> " + tab_employees[i].seniority +  " Salaire mensuel -> " + tab_employees[i].getMonthlySalary(tab_employees[i].salary) );
}

// Calcul du plus ancien
var save_high_old = 0;
var id_high_old = 0;
for(var i = 0; i < tab_employees.length; i++){
    //console.log(tab_employees[i].hiredate);

    old_employee = tab_employees[i].getDaySeniority(tab_employees[i].hiredate);

    if(old_employee > save_high_old){
        save_high_old = old_employee;
        id_high_old = i;
    }
    
}

console.log("Le plus ancien salarié est " + tab_employees[id_high_old].firstname + " " + tab_employees[id_high_old].lastname + " avec " + save_high_old + " jours de joyeux services ");

// Calcul du haut salaire
var save_high_salary = 0;
var id_high_salary = 0;
for(var i = 0; i < tab_employees.length; i++){
    if(tab_employees[i].salary > save_high_salary){
        save_high_salary = tab_employees[i].salary;
        id_high_salary = i;
    }
    
}

console.log("Le plus haut salaire est de " + tab_employees[id_high_salary].firstname + " " + tab_employees[id_high_salary].lastname + " avec " + save_high_salary + " € ");

// Calcul du bas salaire
var save_low_salary = tab_employees[0].salary;
var id_low_salary = 0;
for(var i = 0; i < tab_employees.length; i++){
    if(tab_employees[i].salary < save_low_salary){
        save_low_salary = tab_employees[i].salary;
        id_low_salary = i;
    }
    
}

console.log("Le plus bas salaire est de " + tab_employees[id_low_salary].firstname + " " + tab_employees[id_low_salary].lastname + " avec " + save_low_salary + " pots de bananes...");


console.log("La différence de salaire est de  " + (save_high_salary-save_low_salary) );