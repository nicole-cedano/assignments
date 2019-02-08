// Created Array for Employee information to be stored
var employees = [];
// Constructor Function
function Employee (name, jobTitle,salary){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = 'Full Time';
    this.printEmployeeForm = function (){
        return "Name: " + this.name+ " Job Title: " + this.jobTitle + " Salary: " + this.salary + " Status: " + this.status
    }
}
//3 employees
var polly = new Employee("Pauline", "Stylist", 120000);
var nico = new Employee('Nicole', "Mad-Scientist", 150000000);
var lola = new Employee('Lola', "Pet-Dog", 100);
//overrride status attribute
lola.status = 'Contract';
// call the printEmployeeForm method for each employee
polly.printEmployeeForm();
nico.printEmployeeForm();
lola.printEmployeeForm();
//put generate employees into the array
employees.push(polly.printEmployeeForm());
employees.push(nico.printEmployeeForm());
employees.push(lola.printEmployeeForm());
console.log(employees);

