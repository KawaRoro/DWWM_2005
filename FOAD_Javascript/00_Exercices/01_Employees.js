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
            monthSalary = salary / 12 * 0.75;
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

        this.getSeniority = function(hiredate) {
            var between_date_in_year = 0;
            let between_date = Date.now() - hiredate.getTime(); // 
            let between_date_in_days = between_date / (1000 * 3600 * 24);
            console.log(between_date_in_days);
            if(between_date_in_days > 365){
                between_date_in_year = between_date_in_days / 365;
                console.log(between_date_in_year);
            }
            

            
            return between_date;
        }
        this.seniority = this.getSeniority(hiredate);
    }

    get getId() {
        return this.id;
    }
    get geLastname() {
        return this.lastname;
    }
    get getFirstname() {
        return this.firstname;
    }
    get getEmail() {
        return this.email;
    }
    get getRole() {
        return this.role;
    }
    get getSalary() {
        return this.salary;
    }
    get getHiredate() {
        return this.hiredate;
    }

    set setId(id) {
        this.id = id;
    }
    set setLastname(lastname) {
        this.lastname = lastname;
    }
    set setFirstname(firstname) {
        this.firstname = firstname;
    }
    set setEmail(email) {
        this.email = email;
    }
    set setRole(role) {
        this.role = role;
    }
    set setSalary(salary) {
        this.salary = salary;
    }
    set setHiredate(hiredate) {
        this.hiredate = hiredate;
    }
}



/** DÉBUT ZONE NON EDITABLE (Ne pas modifier les lignes suivantes) */


/** @var Employee employee1 */
var employee1 = new Employee(1, 'Doe', 'John', 'manager', 82000, new Date('2020-12-28')); // création d'un nouvel employé

/** @var array employees */
const employees = [employee1]; // tableau contenant les employés

console.log(employee1); // doit afficher l'objet "employee1"
console.log("Il y a " + employees.length + " employé(e)s."); // doit afficher "Il y a 5 employé(e)s."
console.log(employees); // export des employés dans la console


/** FIN ZONE NON EDITABLE (Ne pas modifier les lignes précédentes) */



// Écrivez votre code à partir de la ligne suivante...




