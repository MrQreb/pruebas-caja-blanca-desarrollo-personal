// import * as readline from 'readline';

function calculate(operation: number, number1: number, number2: number) {
    console.log('Calculadora basica');

    if (operation === 0) throw new Error('Ingrese un numero valido');

    if (operation === 1) {
        return number1 + number2;
    }

    if (operation === 2) {
        return number1 - number2;
    }

    if (operation === 3) {
        return number1 * number2;
    }

    if (operation === 4) {
        return number1 / number2;
    }
    
}


console.log(calculate(1,2,2));
console.log(calculate(2,2,2));
console.log(calculate(3,2,2));
console.log(calculate(4,2,2));
console.log(calculate(0,2,2));
