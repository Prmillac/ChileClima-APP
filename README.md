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