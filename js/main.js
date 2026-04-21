function generarResumen(pronostico) {
    let diasSoleados = 0;
    let diasLluviosos = 0;

    for (let i = 0; i < pronostico.length; i++) {
        if (pronostico[i].estado === "Soleado") {
            diasSoleados++;
        } else if (pronostico[i].estado === "Lluvioso") {
            diasLluviosos++;
        }
    }

    
    let mensaje = "";
    if (diasSoleados >= 4) {
        mensaje = "Semana ideal para actividades al aire libre, mayormente soleada.";
    } else if (diasLluviosos >= 2) {
        mensaje = "Atención: Semana con alta probabilidad de lluvias, lleva paraguas.";
    } else {
        mensaje = "Semana con clima variado, se recomienda revisar el reporte diario.";
    }

    return mensaje;
}
