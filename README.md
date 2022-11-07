---
# Athenas
---

Este proyecto responde a la necesidad de cumplir con tres (3) ejercicios planteados en una prueba técnica, los cuales listo a continuación:

---

##### I. IMC es una medida de la obesidad, se determina mediante el índice de masa corporal (IMC), que se calcula dividiendo los kilogramos de peso por el cuadrado de la estatura en metros.

---

Actividad: Diseñe una calculadora de IMC, deberá según los datos ingresados, indicar el resultado de la fórmula de IMC en el div “divIMC” y la categoría en el div "divCategoria"

-     Validar Obligatoriedad.
-     Validar tipo de datos.
-     Mostrar el resultado con dos decimales.
-     Valorable el uso de promesas y asincronismo.
-     Valorable simplicidad.

Tabla de referencia para calcular la categoría:

| Composición corporal    | Índice de masa corporal (IMC) |
| ----------------------- | ----------------------------- |
| Peso inferior al normal | Menos de 18.5                 |
| Peso saludable          | 18.5 – 24.9                   |
| Sobrepeso               | 25.0 – 29.9                   |
| Obesidad                | Más de 30.0                   |

---

##### II. Render de objetos

---

Actividad: en el archivo JS existe un array de objetos llamado objJson, debe renderizar en el div “divUser” los datos de dicho objeto.

Incluir un evento en el campo “txtSearch”, de forma que cuando se digiten valores dentro de dicho campo se filtren los cards por el nombre del usuario (campo “name” de cada objeto dentro de objJson) según lo digitado.

- Represente cada usuario en forma de "card".
- Valorable rendimiento.
- Valorable el uso de classes responsive (bootstrap).
- Valorable el uso de promesas y asincronismo.
- Valorable simplicidad.

---

##### III. Capture los valores

---

Actividad: Capture los valores de cada caja de texto e inclúyalos en un array de objetos dentro de un JSON de la siguiente forma:

```json
[
  {
  "id": 0,
  "value": ""
  },
...
]
```

De forma que cada objeto represente una caja de texto donde "id" es el ID del objeto y “value” el valor del input.

_Ejemplo:_

```html
<input type="text" id="1003" value="usename_1" />
<input type="text" id="1004" value="usename_2" />
```

El resultado debe ser un JSON con:

```json
[
  {
    "id": 1003,
    "value": " usename_1"
  },
  {
    "id": 1004,
    "value": " usename_2"
  }
]
```

- Valorable rendimiento.
- Valorable el uso de promesas y asincronismo.
- Valorable simplicidad.

---

Desarrollo

---

#### Estructura del proyecto

El proyecto cuenta con la siguiente estructura:

---

**assets
--- images
lib
--- bootstrap
--- --- css
--- --- js
pages
static
--- css
--- js
index.html
LICENSE
README.md
**

---

- **assets:** Contiene la carpeta **_images_** con los archivos de imágenes del proyecto.
- **lib:**Contiene los recursos externos, en nuestro caso utilizamos **_Bootstrap v5.2.2_** los archivos JS y CSS estan repartidos en sus carpetas correspondientes.
- **pages:** Contiene los archivos HTML que renderizan la aplicación.
- **static: ** Contiene los archivos JS y CSS propios repartidos en sus carpetas correspondientes.
- **index.html:** Es el punto de entrada de la aplicación, la navegación facilita el acceso a todas las funcionalidades.
- **LICENSE:** Licencia MIT usada en el proyecto.
- **README.md:** Archivo que contiene información relevante del proyecto.

---

#### Soluciones

Me tomé la libertad de desarrollar una interfaz agradable que permita navegar por las soluciones de los tres (3) enunciados, en cada uno se puede evidenciar la solución al problema planteado, además de incorporar funcionalidades extra:

- **Primer enunciado: **Se puede evidenciar la solución en el módulo **IMC**.
- **Segundo enunciado: **Se puede evidenciar la solución en el módulo **CRUD**.
- **Tercer enunciado: **Se puede evidenciar la solución en el módulo **JSON**.

---

Desarrollador:
**Fernando Villamizar Parra**
