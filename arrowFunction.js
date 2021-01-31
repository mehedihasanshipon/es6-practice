// normal function
 function normalFunction(num){
     return num * 2;
 }
//  variable function
 let math = function(x,y){
     return x + y;
 }
//  ES6 arrow function
let doubleIt = num => num * 2;
// //  ES6 arrow function with more statement
const doMath = (num1,num2) =>{
    let sum = num1 + num2;
    let sub = num1 - num2;
    let multiply = sum * sub;
    return multiply;
}
 const result = doMath(4,2);
 console.log(result);
