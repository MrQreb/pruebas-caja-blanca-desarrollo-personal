function determinateNumber(number: number) {
    if (number === 0) throw new Error('Ingrese un numero valido');

    if (number > 0) console.log('El numero es positivo');
        
    
    if(number < 0) console.log('El numero es negativo');
        
}



determinateNumber(5); 
determinateNumber(-3);
determinateNumber(-0);