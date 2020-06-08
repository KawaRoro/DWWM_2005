const Employee = require('./Employee.js');

/**
 * Gestion d'employés
 */
class Enterprise 
{
    constructor() {
        this.cptId = 0;
        this.employees = [];
    }

    /**
     * 
     * @param  _filter // ou param
     * @param  _order // asc -> croissant // desc -> decroissant
     * @param  _param // Avec "param" à _filter permet de lire n'importe quel paramétre... | Optionnel
     */
    readAll(_filter, _order = "asc", _param = "") { //_filter -> id, lastName, firstName, role, salary, hireDate
        if(_param != ""){ _filter = 'param'; }
        let tab_employees = this.employees.sort((element1, element2) => {
            switch (_filter) {
                case 'id':
                    if(_order === "desc"){
                        return (element2.getId() - element1.getId());
                    }else{
                        return (element1.getId() - element2.getId());
                    }
                case 'lastName':
                    if(_order === "desc"){
                        return (element2.getLastName().localeCompare(element1.getLastName()));
                    }else{
                        return (element1.getLastName().localeCompare(element2.getLastName()));
                    }
                case 'firstName':
                    if(_order === "desc"){
                        return (element2.getFirstName().localeCompare(element1.getFirstName()));
                    }else{
                        return (element1.getFirstName().localeCompare(element2.getFirstName()));
                    }
                case 'email':
                    if(_order === "desc"){
                        return (element2.getEmail().localeCompare(element1.getEmail()));
                    }else{
                        return (element1.getEmail().localeCompare(element2.getEmail()));
                    }
                case 'role':
                    if(_order === "desc"){
                        return (element2.getRole().localeCompare(element1.getRole()));
                    }else{
                        return (element1.getRole().localeCompare(element2.getRole()));
                    }
                case 'salary':
                    if(_order === "desc"){
                        return (element2.getSalary() - element1.getSalary());
                    }else{
                        return (element1.getSalary() - element2.getSalary());
                    }
                case 'hireDate':
                    if(_order === "desc"){
                        return (element2.getHiredate() - element1.getHiredate());
                    }else{
                        return (element1.getHiredate() - element2.getHiredate());
                    }
                case 'param':
                    if(_order === "desc"){
                        return (element2._param - element1._param);
                    }else{
                        return (element1._param - element2._param);
                    }
                default:
                    if(_order === "desc"){
                        return (element2.getId() - element1.getId());
                    }else{
                        return (element1.getId() - element2.getId());
                    }
            }
        });
        /*tab_employees.forEach(emp => {
            console.log("######################################");
            console.log("############# "+ _filter +" #############");
            console.log("######################################");
            console.log("# id:", emp.getId()); // i++
            console.log("# lastName:", emp.getLastName());
            console.log("# firstName:", emp.getFirstName());
            console.log("# role:", emp.getRole());
            console.log("# salary:", emp.getSalary());
            console.log("# hireDate:", emp.getHiredate());
            console.log("######################################\n");
        });*/
        return tab_employees[0];
    }

    logAll(){
        this.employees.forEach(emp => {
            console.log("######################################");
            console.log("# id:", emp.getId()); // i++
            console.log("# lastName:", emp.getLastname());
            console.log("# firstName:", emp.getFirstname());
            console.log("# role:", emp.getRole());
            console.log("# salary:", emp.getSalary());
            console.log("# hireDate:", emp.getHiredate());
            console.log("######################################\n");
        });
    }

    /**
     * 
     * @param  _filter
     * @param  _order // asc -> croissant // desc -> decroissant
     * @param  _param // Optionnel
     */
    searchAll(_filter, _order = "asc", _param = "") { //_filter -> id, lastName, firstName, role, salary, hireDate
        if(_param != ""){ _filter = 'param'; }
        let tab_employees = this.employees.sort((element1, element2) => {
            switch (_filter) {
                case 'id':
                    if(_order === "desc"){
                        return (element2.getId() - element1.getId());
                    }else{
                        return (element1.getId() - element2.getId());
                    }
                case 'lastName':
                    if(_order === "desc"){
                        return (element2.getLastName().localeCompare(element1.getLastName()));
                    }else{
                        return (element1.getLastName().localeCompare(element2.getLastName()));
                    }
                case 'firstName':
                    if(_order === "desc"){
                        return (element2.getFirstName().localeCompare(element1.getFirstName()));
                    }else{
                        return (element1.getFirstName().localeCompare(element2.getFirstName()));
                    }
                case 'email':
                    if(_order === "desc"){
                        return (element2.getEmail().localeCompare(element1.getEmail()));
                    }else{
                        return (element1.getEmail().localeCompare(element2.getEmail()));
                    }
                case 'role':
                    if(_order === "desc"){
                        return (element2.getRole().localeCompare(element1.getRole()));
                    }else{
                        return (element1.getRole().localeCompare(element2.getRole()));
                    }
                case 'salary':
                    if(_order === "desc"){
                        return (element2.getSalary() - element1.getSalary());
                    }else{
                        return (element1.getSalary() - element2.getSalary());
                    }
                case 'hireDate':
                    if(_order === "desc"){
                        return (element2.getHiredate() - element1.getHiredate());
                    }else{
                        return (element1.getHiredate() - element2.getHiredate());
                    }
                case 'param':
                    if(_order === "desc"){
                        return (element2._param - element1._param);
                    }else{
                        return (element1._param - element2._param);
                    }
                default:
                    if(_order === "desc"){
                        return (element2.getId() - element1.getId());
                    }else{
                        return (element1.getId() - element2.getId());
                    }
            }
        });
        tab_employees.forEach(emp => {
            console.log("######################################");
            console.log("############# "+ _filter +" #############");
            console.log("######################################");
            console.log("# id:", emp.getId()); // i++
            console.log("# lastName:", emp.getLastName());
            console.log("# firstName:", emp.getFirstName());
            console.log("# role:", emp.getRole());
            console.log("# salary:", emp.getSalary());
            console.log("# hireDate:", emp.getHiredate());
            console.log("######################################\n");
        });
        return tab_employees;
    }

    /**
     * Search todo: _filter
     * @param _param // exemple _id = 1
     * @param _canon // exemple _canon = id // username // password // email //
     */
    getFindSearch(_param , _canon) {
        let result, sch;
        sch = function (pl) {
            //console.log( pl[String(_canon)] );
            return pl[String(_canon)] === _param;
        }
        result = this.employees.find(sch);
        //console.log( result );
        if (!result) {
            result = false;
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

    /**
     * Créer un employé
     * @param Employee _employee 
     */
    create(_employee) {
        _employee.setId(this.cptId);
        this.employees.push(_employee);
        this.cptId++;
    }

    /**
     * 
     * @param _param // exemple _id = 1
     * @param _canon // exemple _canon = id // username // password // email //
     * @param _filter // 
     */
    read(_param, _canon) { 
        let result, rSearch;
        if(_canon == "id") return result = this.readId(_param);
        if(_canon == "lastName") return result = this.readLastName(_param);
        if(_canon == "firstName") return result = this.readFirstName(_param);
        if(_canon == "role") return result = this.readRole(_param);
        if(_canon == "salary") return result = this.readSalary(_param);
        if(_canon == "hireDate") return result = this.readHiredate(_param);
        
        if(!result){
            rSearch = function (occ) {
                //return pl._canon === _param;
                return occ[String(_canon)] === _param;
            }
            result = this.employees.find(rSearch);
            //console.log(result);
            if (!result) {
                result = false;
            }
            return result;
        }
    }

    readId(_id) {
        return this.getFindSearch(_id , "id");
    }

    readLastName(_lastName) {
        return this.getFindSearch(_lastName , "lastName");
    }

    readFirstName(_firstName) {
        return this.getFindSearch(_firstName , "firstName");
    }

    readRole(_role) {
        return this.getFindSearch(_role , "role");
    }

    readSalary(_salary) {
        return this.getFindSearch(_salary , "salary");
    }

    readHiredate(_hireDate) {
        return this.getFindSearch(_hireDate , "hireDate");
    }

    /**
     * Met à jour un player
     * @param Employee _employee 
     * @param _param // exemple _id = 1
     * @param _canon // exemple _canon = id // lastName // firstName // role // salary // hireDate
     * @param _newParam // exemple _id = 1
     */
    update(_employee, _canon, _newParam) { // _param,
        
        let empId = _employee.getId();

        this.employees[empId][String(_canon)] = _newParam;

        return this.employees[empId].getId(); // todo : change this value
    }
    
    /**
     * Supprime un employé
     * @param int _id 
     */
    delete(_id) {
        let index;
        let isEgalNumber;
        isEgalNumber = function (element) {
            return element.getId() === _id;
        }

        //const isEgalNumber = (element) => element.getId() === _id;

        if (this.isValidId(_id)) {
            index = this.employees.findIndex(isEgalNumber);
        }else{
            index = 0;
        }
        
        if (index === parseInt(-1)){
            return false;
        }else{
            return this.employees.splice(index, 1);
        }
        //return delete this.employees[_id];
    }


    /**
     * 
     */
    getHigherSalary() {
        return this.readAll('salary', "desc");
    }

    /**
     * 
     */
    getLowerSalary() {
        return this.readAll('salary', "asc");
    }

    /**
     * 
     */
    getGapSalary() {
        let tabLowestSalary = this.readAll('salary', "asc");
        let tabHighestSalary = this.readAll('salary', "desc");
        console.log(tabLowestSalary['salary']);
        console.log(tabHighestSalary['salary']);
        return tabLowestSalary['salary'] - tabHighestSalary['salary'];
    }


    



}


module.exports = Enterprise;
