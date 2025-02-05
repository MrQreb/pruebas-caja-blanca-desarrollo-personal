# Pruebas de Caja Blanca

## Función: determinateNumber

### Tabla de Resultados

| Caso de Prueba | Entrada (number) | Salida Esperada                | Salida Obtenida                | Resultado |
|----------------|------------------|--------------------------------|--------------------------------|-----------|
| 1              | 5                | 'El numero es positivo'        | 'El numero es positivo'        | Aprobado  |
| 2              | -3               | 'El numero es negativo'        | 'El numero es negativo'        | Aprobado  |
| 3              | 0                | Error: 'Ingrese un numero valido' | Error: 'Ingrese un numero valido' | Aprobado  |
| 4              | 10               | 'El numero es positivo'        | 'El numero es positivo'        | Aprobado  |
| 5              | -7               | 'El numero es negativo'        | 'El numero es negativo'        | Aprobado  |

### Código de Prueba

```typescript
function determinateNumber(number: number) {
    if (number === 0) throw new Error('Ingrese un numero valido');

    if (number > 0) console.log('El numero es positivo');
        
    if (number < 0) console.log('El numero es negativo');
}

determinateNumber(5);    // El numero es positivo
determinateNumber(-3);   // El numero es negativo
try {
    determinateNumber(0);    // Error: Ingrese un numero valido
} catch (error) {
    console.error(error.message);
}
determinateNumber(10);   // El numero es positivo
determinateNumber(-7);   // El numero es negativo