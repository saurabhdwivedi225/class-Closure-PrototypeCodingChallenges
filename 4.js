/* 4. Employee Class Challenge.
Create a class called Employee with three properties: name, position, and salary. The class should have a method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and call the getSalary method.

Expected Output:-
console.log(employee1.getSalary()); // Output: 80000

*/
// Solution:- 

class Employee{
    constructor(name,postion,salary){
        this.name = name;
        this.postion = postion;
        this.salary = salary;
    }
    getSalary(){
        return this.salary
    }
}
let employee1 = new Employee("Swastik","Senior Software Developer",80000);
console.log(employee1.getSalary());

