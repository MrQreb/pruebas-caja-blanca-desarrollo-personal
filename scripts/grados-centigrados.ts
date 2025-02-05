function calculateDegrees(numer: number) {
    const fahrenheit = ( (numer * 9) / 5 ) + 32;
    const kelvin = numer + 273.15;

    return {
        fahrenheit,
        kelvin
    }
}

console.log(calculateDegrees(0));
console.log(calculateDegrees(5));
console.log(calculateDegrees(12));