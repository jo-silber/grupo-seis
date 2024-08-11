let imagenAnterior = document.getElementById('imagenAnteriorBoton');
if (imagenAnterior) {
    imagenAnterior.addEventListener('click', function(){
        window.location.href = 'page1.html';
    });
}

let imagenSiguiente = document.getElementById('imagenSiguienteBoton');
if (imagenSiguiente) {
    imagenSiguiente.addEventListener('click', function(){
        window.location.href = 'page2.html';
    });
}
