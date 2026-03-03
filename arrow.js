// normal function declaration
function add(num1, num2){
    const result = num1 + num2;
    return result;
}
// console.log(add(2,4));

//Expresion function
const div = function(num1, num2){
    const result = num1 / num2;
    return result;
}
// console.log(div(4,2));

//arrow function 
const isEven = a => a % 2 === 0;
console.log(isEven(10));
console.log(isEven(5));