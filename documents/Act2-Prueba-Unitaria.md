# Pruebas Unitarias en Python con `unittest`

## Requisitos previos

Para ejecutar las pruebas unitarias en Python, asegúrate de tener instalado Python 3 y utiliza la librería `unittest`, que está incluida en la biblioteca estándar.

Para ejecutar las pruebas, usa el siguiente comando en la terminal:

```sh
python -m unittest test_script.py
```

---

## **Ejercicio 1: Función para calcular el área de un triángulo**

### **Código de la función y prueba unitaria**
```python
import unittest

def area_triangulo(base, altura):
    return (base * altura) / 2

class TestAreaTriangulo(unittest.TestCase):
    def test_area(self):
        self.assertEqual(area_triangulo(10, 5), 25)
        self.assertEqual(area_triangulo(7, 3), 10.5)
        self.assertEqual(area_triangulo(0, 5), 0)
        self.assertEqual(area_triangulo(8, 8), 32)

if __name__ == "__main__":
    unittest.main()
```

### **Tabla de Resultados Esperados**
| Base | Altura | Resultado Esperado |
|------|--------|------------------|
| 10   | 5      | 25               |
| 7    | 3      | 10.5             |
| 0    | 5      | 0                |
| 8    | 8      | 32               |

---

## **Ejercicio 2: Función para verificar si un número es par**

### **Código de la función y prueba unitaria**
```python
import unittest

def es_par(numero):
    return numero % 2 == 0

class TestEsPar(unittest.TestCase):
    def test_par(self):
        self.assertTrue(es_par(4))
        self.assertTrue(es_par(0))
        self.assertFalse(es_par(7))
        self.assertFalse(es_par(13))

if __name__ == "__main__":
    unittest.main()
```

### **Tabla de Resultados Esperados**
| Número | Resultado Esperado |
|--------|------------------|
| 4      | True            |
| 0      | True            |
| 7      | False           |
| 13     | False           |

---

## **Ejercicio 3: Función para invertir una cadena**

### **Código de la función y prueba unitaria**
```python
import unittest

def invertir_cadena(cadena):
    return cadena[::-1]

class TestInvertirCadena(unittest.TestCase):
    def test_invertir(self):
        self.assertEqual(invertir_cadena("Hola"), "aloH")
        self.assertEqual(invertir_cadena("Python"), "nohtyP")
        self.assertEqual(invertir_cadena(""), "")
        self.assertEqual(invertir_cadena("12345"), "54321")

if __name__ == "__main__":
    unittest.main()
```

### **Tabla de Resultados Esperados**
| Cadena   | Resultado Esperado |
|----------|------------------|
| "Hola"   | "aloH"           |
| "Python" | "nohtyP"         |
| ""       | ""               |
| "12345"  | "54321"          |

---