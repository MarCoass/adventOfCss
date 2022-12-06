/* ABRIR Y CERRAR MODAL */
const modal = document.getElementById("modal");

$(document).on("click", "#openModal", function () {
  modal.style.display = "block";
});

$(document).on("click", "#closeModal", function () {
  modal.style.display = "none";
});

/* MODIFICAR CANTIDAD DE MINUTOS */
$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();
    let minutos = document.getElementById("inputMinutos").value;
    if (minutos >= 1) {
      modal.style.display = "none";
      document.getElementById("minutos").innerHTML = minutos + ":00";
    } else {
      //agregar validacion
    }
  });
});

/* ACTIVAR RELOJ */
$(document).on("click", "#texto", function () {
  document.getElementById("relojColor").style.backgroundColor = "#00aa51";
  document.getElementById("texto").innerHTML = "STOP";
});

/* EJECUCION RELOJ */

$(document).on("click", "#start", function () {
  startPomodoro();
  document.getElementById("start").style.display = "none";
  document.getElementById("stop").style.display = "block";
  document.getElementById("relojColor").style.backgroundColor = "#00aa51";
});

$(document).on("click", "#stop", function () {
  document.getElementById("stop").style.display = "none";
  document.getElementById("start").style.display = "block";
  document.getElementById("relojColor").style.backgroundColor = "#9d0000";

});

//TODO ESTO NO FUNCA
function startPomodoro() {
  let minutos = parseInt(document.getElementById("minutos").innerHTML);
  let segundos = parseInt(document.getElementById("segundos").innerHTML);

}

function reloj() {
  let minutos = parseInt(document.getElementById("minutos").innerHTML);
  let segundos = parseInt(document.getElementById("segundos").innerHTML);
  console.log(minutos + ":" + segundos);
  if (segundos > 0) {
    segundos--;
    document.getElementById("segundos").innerHTML = segundos;
  } else {
    minutos--;
    document.getElementById("minutos").innerHTML = minutos;
    if (minutos > 0) {
      document.getElementById("segundos").innerHTML = 59;
    }
  }
  if(minutos== 0 && segundos == 0){
    clearTimeout(idTimer);
  }
}
