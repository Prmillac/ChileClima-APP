const contenedor = document.getElementById('contenedor-ciudades');

// Función para mostrar las ciudades en el Home
function renderizarCiudades() {
    ciudadesChile.forEach(ciudad => {
        const card = document.createElement('div');
        card.className = 'col-12 col-md-6 col-lg-4'; // Responsivo: 1 col móvil, 3 col desktop
        
        card.innerHTML = `
            <div class="card h-100 shadow-sm border-0">
                <div class="card-body text-center">
                    <h5 class="card-title font-weight-bold">${ciudad.nombre}</h5>
                    <p class="text-muted small">${ciudad.region}</p>
                    <div class="display-6 my-3">${ciudad.temp}°C</div>
                    <span class="badge bg-info text-dark mb-3">${ciudad.estado}</span>
                    <br>
                    <button class="btn btn-outline-primary w-100" onclick="verDetalle(${ciudad.id})">
                        Ver pronóstico
                    </button>
                </div>
            </div>
        `;
        contenedor.appendChild(card);
    });
}

// Función para "navegar" al detalle guardando el ID en la URL
function verDetalle(id) {
    window.location.href = `detalle.html?id=${id}`;
}

// Ejecutar al cargar la página
renderizarCiudades();