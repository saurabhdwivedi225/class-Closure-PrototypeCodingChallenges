/* 1. Type Conversion.
Write a function called convertToNumber that takes a string as an argument and returns the equivalent number. If the string cannot be converted to a number, the function should return the string "Invalid number". Use error handling in javascript to achieve this output. 
//Expected Results
convertToNumber("123") //123
convertToNumber("abc") // "Invalid number"
*/

// Solution :-

function convertToNumber(string){
    try {
        const num = Number(string)
        if(Number.isNaN(num)){
            throw new Error ("Invalid Number")
        }
        return num;  
    } catch (error) {
       return error.message;
    }
    
} 
console.log(convertToNumber(123));//123
console.log(convertToNumber("abc"));//Invalid Number
