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

//arrow function with single line
const isEven = a => a % 2 === 0;
 //arrow function a multiline likhle second bracet use korte hobe na
console.log(isEven(10));
console.log(isEven(5));

//arrow function with multiline
const doMath = (a, b) => {  // arrow function a multiline likhle second bracet use korte hobe
    const div = a/b;
    const sum = div + b;
    const diff = a-b;
    const mul = diff*a;
    const twoTimes = mul*2;
    return twoTimes;   // purotai return kora jabe na, specificvabe bole dite hobe j ki return korbo
}
console.log(doMath(2, 3));