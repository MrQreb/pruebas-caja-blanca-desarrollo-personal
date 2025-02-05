# Pruebas de Caja Blanca

## Función: calculate

### Tabla de Resultados

| Caso de Prueba | Operación | Número 1 | Número 2 | Salida Esperada | Salida Obtenida | Resultado |
|----------------|-----------|----------|----------|-----------------|-----------------|-----------|
| 1              | 1         | 5        | 3        | 8               | 8               | Aprobado  |
| 2              | 2         | 5        | 3        | 2               | 2               | Aprobado  |
| 3              | 3         | 5        | 3        | 15              | 15              | Aprobado  |
| 4              | 4         | 6        | 3        | 2               | 2               | Aprobado  |
| 5              | 0         | 5        | 3        | Error           | Error           | Aprobado  |

### Código de Prueba

```typescript
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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

function askQuestion(query: string): Promise<string> {
    return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    try {
        const op = await askQuestion('Ingrese la operación (1: suma, 2: resta, 3: multiplicación, 4: división): ');
        const operation = parseInt(op);

        const num1 = await askQuestion('Ingrese el primer número: ');
        const number1 = parseFloat(num1);

        const num2 = await askQuestion('Ingrese el segundo número: ');
        const number2 = parseFloat(num2);

        const result = calculate(operation, number1, number2);
        console.log(`El resultado es: ${result}`);
    } catch (error) {
        console.error(error.message);
    } finally {
        rl.close();
    }
}

main();