

export default Storage;
export function add(num1, num2){
    return num1 + num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
// function sub(num1, num2){
//     return num1 - num2;
// }
export {multiply}


// reduce
const numbers = [34,23,65,21,75];
let sum = 0;
for(const num of numbers){
    sum = sum + num;
}

const reducer = (previous, current) => previous + current;
numbers.reduce(reducer, 0)