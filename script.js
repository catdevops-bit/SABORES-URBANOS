function mostrarDetalle(id) {
    // Ocultar todos los detalles
    document.getElementById("detalle-comida-rapida").style.display = "none";
    document.getElementById("detalle-almuerzo").style.display = "none";
    document.getElementById("detalle-eventos").style.display = "none";

    // Mostrar el que corresponde
    document.getElementById("detalle-" + id).style.display = "block";

    // Scroll suave
    window.scrollTo({
        top: document.getElementById("detalle-" + id).offsetTop - 20,
        behavior: "smooth"
    });
}

function cerrarDetalle(id) {
    document.getElementById(id).style.display = "none";
}