/* 6. Using Static Method to Add Two Numbers with Calculator Class
Create a class called Calculator with a static method called add. The add method should take two numbers as arguments and return their sum. Instantiate the Calculator class and call the add method.

//Expected Output:
console.log(result); // Output:15
*/

// Solution:-

class Calculator{
    static add(number1,number2){
return number1+ number2;
    }
}
const result = Calculator.add(8, 7)
console.log(result); // Output:15

/* Static methods are useful for utility functions that don't rely on the state of individual objects.
They cannot access the this keyword within the method, as they are not bound to specific instances.
Inheritance applies to static methods as well, so subclasses can inherit static methods from their parent class. */