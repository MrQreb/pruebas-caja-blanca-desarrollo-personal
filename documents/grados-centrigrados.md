# Pruebas de Caja Blanca

## Función: calculateDegrees

### Tabla de Resultados

| Caso de Prueba | Entrada (numer) | Salida Esperada (fahrenheit, kelvin) | Salida Obtenida (fahrenheit, kelvin) | Resultado |
|----------------|------------------|--------------------------------------|--------------------------------------|-----------|
| 1              | 0                | (32, 273.15)                         | (32, 273.15)                         | Aprobado  |
| 2              | 5                | (41, 278.15)                         | (41, 278.15)                         | Aprobado  |
| 3              | 12               | (53.6, 285.15)                       | (53.6, 285.15)                       | Aprobado  |
| 4              | -10              | (14, 263.15)                         | (14, 263.15)                         | Aprobado  |
| 5              | 100              | (212, 373.15)                        | (212, 373.15)                        | Aprobado  |

### Código de Prueba

```typescript
function calculateDegrees(numer: number) {
    const fahrenheit = ( (numer * 9) / 5 ) + 32;
    const kelvin = numer + 273.15;

    return {
        fahrenheit,
        kelvin
    }
}

console.log(calculateDegrees(0));    // { fahrenheit: 32, kelvin: 273.15 }
console.log(calculateDegrees(5));    // { fahrenheit: 41, kelvin: 278.15 }
console.log(calculateDegrees(12));   // { fahrenheit: 53.6, kelvin: 285.15 }
console.log(calculateDegrees(-10));  // { fahrenheit: 14, kelvin: 263.15 }
console.log(calculateDegrees(100));  // { fahrenheit: 212, kelvin: 373.15 }