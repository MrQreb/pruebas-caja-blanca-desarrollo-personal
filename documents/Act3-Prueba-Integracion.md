# Prueba de Integración con Selenium en C#

## Requisitos previos

Antes de ejecutar la prueba, asegúrate de tener instalado lo siguiente:

- **Visual Studio** (o cualquier otro IDE compatible con C#)
- **.NET Core SDK**
- **Selenium WebDriver**
- **Chromedriver** (compatible con la versión de tu navegador Chrome)
- **NUnit** para ejecutar pruebas

Puedes instalar las dependencias necesarias con el siguiente comando en la consola de NuGet:

```sh
dotnet add package Selenium.WebDriver
dotnet add package Selenium.Support
dotnet add package NUnit
dotnet add package NUnit3TestAdapter
```

# Prueba
Es una prueba de integración en C# con Selenium. La prueba automatiza la apertura de un sitio web.
```c#
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace PruebasDeIntegracion
{
    public class PruebaSelenium
    {
        private IWebDriver driver;

        [SetUp]
        public void Setup()
        {
            driver = new ChromeDriver();
            driver.Manage().Window.Maximize();
        }

        [Test]
        public void VerificarTituloPagina()
        {
            // Navegar a la página web
            driver.Navigate().GoToUrl("gooogle.com");

            // Obtener el título de la página
            string tituloPagina = driver.Title;

            // Verificar que el título sea el esperado
            Assert.AreEqual("Título Esperado", tituloPagina);
        }

        [TearDown]
        public void TearDown()
        {
            // Cerrar el navegador después de la prueba
            driver.Quit();
        }
    }
}
```

Para ejecutar la pruebra ejecute: ***dotnet test*** 

## Resultado 
***Test Run Successful.
Total tests: 1
Passed: 1
Failed: 0***



