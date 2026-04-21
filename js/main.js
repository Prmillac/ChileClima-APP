const app = new WeatherApp();


const generarResumenAPI = (pronosticoCodigos) => {
    let diasSoleados = 0;
    let diasLluviosos = 0;

    pronosticoCodigos.forEach(codigo => {
        if (codigo === 0) diasSoleados++; // 0 es despejado en Open-Meteo
        if (codigo > 50) diasLluviosos++; // Códigos mayores a 50 son lluvia
    });

    if (diasSoleados >= 4) return "☀️ Semana ideal para actividades al aire libre.";
    if (diasLluviosos >= 2) return "☔ Atención: Alta probabilidad de lluvias.";
    return "☁️ Semana con clima variado.";
};


const cargarHome = async () => {
    const grid = document.getElementById('contenedor-ciudades');
    if (!grid) return;

    grid.innerHTML = '<div class="col-12 text-center"><p>Cargando clima real...</p></div>';

    let htmlFinal = "";

    
    for (const ciudad of app.ciudades) {
        try {
           
            const datos = await app.obtenerClima(ciudad.lat, ciudad.lon);
            
            if (datos) {
                
                const alerta = generarResumenAPI(datos.daily.weathercode);
                
            
                const esLluvia = datos.current_weather.weathercode > 50;
                const modClima = esLluvia ? 'rainy' : 'sunny';

                htmlFinal += `
                    <div class="col-12 col-md-6 col-lg-4 mb-4">
                        <article class="place-card place-card--${modClima}" onclick="alert('${alerta}')" style="cursor:pointer">
                            <h5 class="place-card__name">${ciudad.nombre}</h5>
                            <div class="place-card__temp">${datos.current_weather.temperature}°C</div>
                            <span class="place-card__status">Viento: ${datos.current_weather.windspeed} km/h</span>
                            <hr>
                            <small class="d-block text-center text-white">${alerta}</small>
                        </article>
                    </div>
                `;
            }
        } catch (error) {
            console.error("Error con la ciudad " + ciudad.nombre, error);
        }
    }
    grid.innerHTML = htmlFinal;
};

document.addEventListener('DOMContentLoaded', cargarHome);