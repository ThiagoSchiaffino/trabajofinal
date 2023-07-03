





const inicializarJs = () => {
    const boton = document.getElementById("enviar-btn");
    boton.addEventListener('click', function (e) {
        enviarTareas();
    });
}
window.addEventListener('load', inicializarJs);