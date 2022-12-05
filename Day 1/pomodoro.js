
/* ABRIR Y CERRAR MODAL */
const modal = document.getElementById('modal');

$(document).on('click', '#openModal', function(){
    modal.style.display = "block";
})

$(document).on('click', '#closeModal', function(){
    modal.style.display = "none";
})

/* MODIFICAR CANTIDAD DE MINUTOS */
$(document).ready(function(){
    $('form').submit(function(e){
        e.preventDefault();
        let minutos = document.getElementById('inputMinutos').value;
        if(minutos>=1){
            modal.style.display = "none";
            document.getElementById('minutos').innerHTML = minutos + ':00';
        } else {
            //agregar validacion
        }
    })
})

/* ACTIVAR RELOJ */
$(document).on('click', '#texto', function(){
    document.getElementById('relojColor').style.backgroundColor = '#00aa51';
})