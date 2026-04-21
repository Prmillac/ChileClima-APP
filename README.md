# ChileClima MVP

## Paso 1: Estructura de Datos
- Se configuró la base del proyecto.
- Se creó `js/data.js` con un arreglo de 15 ciudades y sus respectivos datos climáticos.

## Paso 2: UI y Responsividad
- Se integró Bootstrap 5 para el diseño adaptable.
- Se crearon estilos personalizados para efectos visuales en las tarjetas.

## Paso 3: Lógica Dinámica
- Se implementó js/main.js para automatizar la creación de tarjetas climáticas.
- Uso de funciones y ciclos para recorrer datos.

# Chile Clima APP - MVP

## Descripción
Aplicación web responsiva para visualizar el clima de 15 ciudades de Chile, desarrollada con HTML5, Bootstrap y JavaScript.

## Historial de Pasos (Commits)
1. **Paso 1:** Configuración de base de datos en `js/data.js`.
2. **Paso 2:** Diseño de interfaz responsiva con Bootstrap y CSS.
3. **Paso 3:** Renderizado dinámico de tarjetas mediante JavaScript.
4. **Paso 4:** Implementación de vista de detalle y navegación.

## Tecnologías
- HTML5 Semántico
- CSS3 (Custom styles)
- Bootstrap 5 (CDN)
- JavaScript (DOM y URLSearchParams)

---
## 🔗 Repositorio del Proyecto
El código fuente y el historial de desarrollo están disponibles en GitHub:
https://github.com/Prmillac/ChileClima-APP

# ChileClima APP - Módulo 3 (Refactorización)

## Propósito del Proyecto
Refactorizar la interfaz de la aplicación de clima desarrollada en el Módulo 2. El objetivo es mejorar la calidad del código CSS, la escalabilidad y la mantenibilidad mediante el uso de SASS y metodologías de organización de estilos.

## Objetivos de Aprendizaje Aplicados
- **Metodología BEM:** Organización de clases bajo el estándar *Block-Element-Modifier* para evitar colisiones de estilos.
- **SASS Modular:** Implementación de parciales para una arquitectura limpia.
- **Bootstrap 4:** Uso del sistema de grid para un layout responsivo.

## Estructura SASS (_Refactorización_)
El proyecto ahora cuenta con una arquitectura de carpetas para los estilos:
- `/base`: Contiene `_variables.scss` con los colores corporativos (Azul/Rojo Chile) y mixins de sombras.
- `/layout`: Define el esqueleto general en `_layout.scss` (Navbar, Main, Footer).
- `/components`: Estilos modulares en `_place-card.scss` utilizando anidamiento.
- `main.scss`: Archivo maestro que importa todos los parciales para ser compilado a CSS.

## Requisitos de Responsividad
- **Pantallas pequeñas (≤ 420 px):** Las cards se muestran apiladas en una sola columna (`col-12`).
- **Pantallas grandes (≥ 1024 px):** Se muestran 3 cards por fila con espaciado coherente (`col-lg-4`).

## Historial de Commits (Módulo 3)
1. `chore: configurar estructura sass y parciales base`
2. `style: aplicar metodología BEM y mixins a las cards de lugares`
3. `layout: implementar sistema de grid responsivo y footer semantico`

---
## 🔗 Repositorio del Proyecto
https://github.com/Prmillac/ChileClima-APP


# 🌤️ ChileClima APP - Módulo 4

## 📝 Descripción
Esta aplicación permite visualizar el clima de 5 ciudades estratégicas de Chile. En esta etapa, el proyecto se enfoca en la **lógica de programación**, procesando datos dinámicos para ofrecer estadísticas precisas a los usuarios.

## 📊 Estadísticas Calculadas
A diferencia de versiones anteriores, los datos ya no son estáticos. La aplicación utiliza **JavaScript** para calcular automáticamente:
* **Temperatura Promedio:** Calculada sumando las máximas de la semana y dividiendo por el total de días.
* **Mínimas y Máximas Absolutas:** Identificadas mediante ciclos que recorren el pronóstico.
* **Resumen Dinámico:** Un mensaje textual que cambia según las condiciones climáticas (Soleado, Lluvioso o Variado).

## 🛠️ Tecnologías y Lógica Utilizada
* **Ciclos (For):** Para recorrer los arreglos de objetos en `datos.js`.
* **Condicionales (If/Else):** Para determinar las alertas de clima y buscar temperaturas extremas.
* **DOM Manipulation:** Para inyectar los resultados de los cálculos directamente en el HTML.

## 📁 Estructura de Datos
Los datos están modelados como un arreglo de objetos llamado `lugares`, donde cada ciudad contiene un sub-arreglo `pronosticoSemanal` con la siguiente estructura:
- `dia`, `min`, `max`, `estado`.

---
**Desarrollado por:** P. Millac  
**Módulo:** 4 - Lógica y Estadísticas en JavaScript

# 🌤️ ChileClima APP - Módulo 5: POO, ES6 y API

## 📝 Descripción
Esta aplicación ha sido refactorizada para cumplir con los estándares de **Programación Orientada a Objetos (POO)**. Los datos climáticos ya no son estáticos, sino que se obtienen en tiempo real mediante el consumo de una API externa, procesando la información de forma asíncrona.

## 🏛️ Arquitectura del Proyecto
- **Clase WeatherApp (`js/WeatherApp.js`):** Actúa como el modelo de datos y controlador de peticiones. Gestiona las coordenadas de las ciudades chilenas y la conexión con el servidor.
- **Lógica de Renderizado (`js/main.js`):** Instancia la clase principal y utiliza métodos de arreglos modernos para transformar los datos JSON en elementos visuales del DOM.

## 🌐 API Utilizada
- **Nombre:** Open-Meteo API.
- **URL Base:** `https://api.open-meteo.com/v1/forecast`
- **Funcionalidad:** Se consultan datos actuales y pronósticos diarios basados en latitud y longitud.

## 📊 Estadísticas y Alertas
El sistema incluye un método `generarResumenAPI` que analiza los códigos climáticos de la semana:
- **Alerta de Sol:** Si hay ≥ 4 días despejados.
- **Alerta de Lluvia:** Si hay ≥ 2 días con códigos de precipitación.
- **Cálculos:** Se procesan promedios y estados mediante métodos de ES6 como `.forEach()`.

## 🛠️ Tecnologías
- **ES6+:** Uso de `const`, `let`, `Arrow Functions`, `Template Literals` y `Async/Await`.
- **Bootstrap 4:** Layout responsivo y componentes de interfaz.
- **Git/GitHub:** Control de versiones con commits descriptivos.

---
**Desarrollado por:** Priscilla Milla Carreño - 2026

