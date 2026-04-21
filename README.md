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

# 🌤️ ChileClima SPA - Módulo 6: Vue.js & Vue Router

## 📝 Descripción
Esta es la versión final de la App de Clima, transformada en una **Single Page Application (SPA)** utilizando el framework **Vue.js**. La navegación es fluida y no requiere recargar la página, mejorando la experiencia del usuario.

## 🚀 Características de la SPA
- **Navegación Reactiva:** Uso de `Vue Router` para cambiar entre la vista de lista y el detalle.
- **Buscador en Tiempo Real:** Implementación de un filtro dinámico con `v-model` y `computed properties`.
- **Arquitectura de Componentes:** - `Home`: Visualización de tarjetas y barra de búsqueda.
  - `Detalle`: Información específica de cada ciudad seleccionada mediante rutas dinámicas.

## 🛠️ Tecnologías de este Módulo
- **Vue.js 3:** Framework principal para la reactividad.
- **Vue Router 4:** Gestión de rutas internas (`/` y `/lugar/:id`).
- **ES6+:** Uso de métodos de arreglo como `.filter()` para la búsqueda.
- **BEM & SASS:** Mantenimiento de la metodología de estilos de módulos anteriores.

## 📁 Instrucciones de Ejecución
Al ser una SPA cargada vía CDN, solo es necesario abrir el archivo `index.html` en un navegador moderno. No requiere instalación de dependencias pesadas.

---
**Desarrollado por:** Priscilla Milla Carreño - 2026



# 🌤️ ChileClima APP - Módulo 7: Gestión de Usuarios y Estado Global

## 📝 Descripción
En esta fase final del proyecto, la App de Clima integra un sistema de **Autenticación** y **Personalización**. Se utiliza un estado global para permitir que diferentes partes de la aplicación (como el Navbar y la sección de Favoritos) reconozcan al usuario que ha iniciado sesión.

## 🧠 Gestión de Estado (Vuex)
Se ha implementado **Vuex 4** para centralizar la información de la aplicación:
- **State:** Almacena el objeto `usuario` (nombre, email), el booleano `isAuthenticated` y el arreglo de `favoritos`.
- **Mutations:** Funciones para modificar el estado (SET_USER, TOGGLE_FAVORITO).
- **Actions:** Lógica para manejar el proceso de Login y Logout de forma asíncrona/simulada.

## 🔐 Seguridad y Rutas
La aplicación utiliza **Navigation Guards** de Vue Router para proteger la privacidad de los datos:
- **/login:** Acceso público para autenticarse.
- **/favoritos:** Ruta protegida. Si un usuario no autenticado intenta ingresar, es redirigido automáticamente al Login.
- **Header Dinámico:** El menú de navegación cambia reactivamente mostrando el nombre del usuario y el botón de "Cerrar Sesión" solo cuando hay una sesión activa.

## 🛠️ Tecnologías Aplicadas
- **Vue.js 3:** Framework base.
- **Vuex 4:** Manejo de estado global (Centralized State Management).
- **Vue Router 4:** Manejo de rutas y guardias de seguridad (`beforeEach`).
- **Bootstrap 4:** Interfaz de formularios y componentes responsivos.

## 📁 Instrucciones de Uso
1. Abrir `index.html` en el navegador.
2. Ir a "Iniciar Sesión".
3. **Credenciales de prueba:** - Usuario: (Cualquier nombre)
   - Contraseña: `123`
4. Una vez dentro, podrás acceder a la sección de "Mis Favoritos".

---
**Desarrollado por:** Priscilla Milla Carreño - 2026


# 🌤️ ChileClima - Full Responsive Weather SPA

¡Bienvenido a mi proyecto final de Portafolio! **ChileClima** es una aplicación de una sola página (SPA) que consume datos meteorológicos en tiempo real para 15 ciudades de Chile, ofreciendo estadísticas avanzadas y alertas climáticas.

## 🚀 Funcionalidades Clave
- **Consumo de API Real:** Integración con Open-Meteo para obtener datos precisos.
- **Estado Global (Vuex):** Manejo centralizado de preferencias de usuario (Unidades °C/°F) y datos climáticos.
- **Estadísticas Dinámicas:** Cálculo automático de Temperaturas Mínimas, Máximas y Promedios semanales.
- **Sistema de Alertas:** Generación de avisos automáticos ante eventos climáticos (ej: Olas de calor).
- **Diseño Responsivo:** Optimizado para móviles y escritorio usando Bootstrap y Metodología BEM.

## 🛠️ Stack Tecnológico
- **Vue.js 3** (Framework principal)
- **Vue Router 4** (Navegación SPA)
- **Vuex 4** (Gestión de estado)
- **SASS & BEM** (Estilos mantenibles)
- **Fetch API** (Comunicación con Open-Meteo)

## 📁 Instrucciones para Ejecución Local
Para visualizar este proyecto en tu computadora:
1. Clona el repositorio: `git clone https://github.com/Prmillac/ChileClima-APP.git`
2. Navega a la carpeta del proyecto.
3. Abre el archivo `index.html` en tu navegador favorito.
*(No requiere comandos de instalación npm al usar versión CDN para máxima portabilidad)*.

## 🗺️ Rutas de la App
- `/`: Home con grilla de ciudades y buscador.
- `/lugar/:id`: Vista de detalle con pronóstico extendido y estadísticas.
- `/favoritos`: Panel personalizado de ciudades guardadas.

---
**Priscilla Milla Carreño** - Estudiante de Desarrollo Web