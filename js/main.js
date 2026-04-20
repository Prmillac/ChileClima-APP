const contenedor = document.getElementById('contenedor-ciudades');

function renderizarApp() {
    
    ciudades.forEach(ciudad => {
        const tarjeta = `
            <div class="col">
                <div class="card h-100 shadow-sm text-center p-3">
                    <div class="display-3">${ciudad.icono}</div>
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${ciudad.nombre}</h5>
                        <p class="card-text text-muted mb-1">${ciudad.estado}</p>
                        <h3 class="text-primary">${ciudad.temp}°C</h3>
                        <a href="detalle.html?id=${ciudad.id}" class="btn btn-outline-primary w-100 mt-2">
                            Ver Detalles
                        </a>
                    </div>
                </div>
            </div>
        `;
        contenedor.innerHTML += tarjeta;
    });
}


renderizarApp();

