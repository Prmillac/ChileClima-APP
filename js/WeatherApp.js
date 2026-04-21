class WeatherApp {
    constructor() {
       
        this.apiBase = "https://api.open-meteo.com/v1/forecast";
        
        
        this.ciudades = [
            { id: 1, nombre: "Santiago", lat: -33.45, lon: -70.66 },
            { id: 2, nombre: "Valparaíso", lat: -33.05, lon: -71.61 },
            { id: 3, nombre: "La Serena", lat: -29.90, lon: -71.25 },
            { id: 4, nombre: "Concepción", lat: -36.83, lon: -73.05 },
            { id: 5, nombre: "Punta Arenas", lat: -53.15, lon: -70.91 }
        ];
    }

    async obtenerClima(lat, lon) {
        try {
            const response = await fetch(`${this.apiBase}?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto`);
            return await response.json();
        } catch (error) {
            console.error("¡Uf! No pudimos traer el clima", error);
        }
    }
}