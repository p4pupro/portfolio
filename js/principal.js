
// Vars
var iter = document.getElementById("iter");
var atos = document.getElementById("atos");
var almis = document.getElementById("almis");
var modal = document.getElementById('modalContenido');

// Listeners
document.getElementById("iter").addEventListener("click", function() { rellenaModal(iter); });
document.getElementById("atos").addEventListener("click",function() { rellenaModal(atos); });
document.getElementById("almis").addEventListener("click", function() { rellenaModal(almis); });
document.getElementById("cierraModal").addEventListener("click", cerrarModal);


// Functions
function mostrarModal() {
    var modalEmpresa = document.getElementById("modalEmpresa");
    modalEmpresa.classList.add("is-active");
}

function cerrarModal() {
    var modalEmpresa = document.getElementById("modalEmpresa");
    modalEmpresa.classList.remove("is-active");
}


function rellenaModal(empresa) {
    if(empresa.id == "iter") {
        document.getElementById("imagenEmpresa").src = "images/empresas/iter.png";
        document.getElementById("textoCargo").innerText = "Becario en el area de desarrollo.";
        document.getElementById("textoDuracion").innerText = "Seis meses.";
        mostrarModal();
    } else if(empresa.id == "atos") {
        document.getElementById("imagenEmpresa").src = "images/empresas/atos.png";
        document.getElementById("textoCargo").innerText = "Programador.";
        document.getElementById("textoDuracion").innerText = "Un año.";
        mostrarModal();
    } else if(empresa.id == "almis"){
        document.getElementById("imagenEmpresa").src = "images/empresas/almis.jpg";
        document.getElementById("textoCargo").innerText = "Analista programador.";
        document.getElementById("textoDuracion").innerText = "Seis meses."; 
        mostrarModal();
    }   
}


// Cuando el usuario da click por cualquier sitio fuera del modal este se cierra
window.onclick = function(event) {
  if (event.target == modal) cerrarModal();
};




// Formulario de contacto
var inputNombre = document.getElementById("formuNombre");
var inputEmail = document.getElementById("formuEmail");
var ayudaCheck = document.getElementById("ayudaCheck");
var ayudaTriangulo = document.getElementById("ayudaTriangulo");
var inputMensaje = document.getElementById("inputMensaje");
var btnCancerlar = document.getElementById("btnCancelar");
var btnEnviar = document.getElementById("btnEnviar");

document.getElementById("formuNombre").addEventListener("keyup", function() { validarInputNombre(inputNombre); } );
document.getElementById("formuEmail").addEventListener("keyup", function() { validarInputEmail(inputEmail); } );
document.getElementById("inputMensaje").addEventListener("keyup", function() { validarInputMensaje(inputMensaje); } );
document.getElementById("btnCancelar").addEventListener("click", cancelar );
document.getElementById("btnEnviar").addEventListener("click", function() { enviar(inputNombre.value, inputEmail.value, inputMensaje.value); } );


function validarInputNombre(inputNombre) {
    if(inputNombre.value.length > 2){
        inputNombre.classList.add("is-success");
        ayudaCheck.classList.add("fas");
        ayudaCheck.classList.add("fa-check");
    } else {
        inputNombre.classList.remove("is-success");
        ayudaCheck.classList.remove("fas");
        ayudaCheck.classList.remove("fa-check");
    }
}

function validarInputEmail(inputEmail) {
    if(validateEmail(inputEmail.value)) {
        inputEmail.classList.remove("is-danger");
        ayudaTriangulo.classList.remove("fas");
        ayudaTriangulo.classList.remove("fa-exclamation-triangle");  
        inputEmail.classList.add("is-success");
        ayudaTriangulo.classList.add("fas");
        ayudaTriangulo.classList.add("fa-check");
    } else {
        inputEmail.classList.remove("is-success");
        ayudaTriangulo.classList.add("fas");
        ayudaTriangulo.classList.add("fa-exclamation-triangle");
    }
  
}


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validarInputMensaje(inputMensaje) {

    if(inputMensaje.value.length > 2) {
        inputMensaje.classList.add("is-success");
    } else {
        inputMensaje.classList.remove("is-success");
    }
}
function cancelar() {
 inputMensaje.value = "";
 inputEmail.value = "";
 inputNombre.value = "";
 inputEmail.classList.remove("is-success");
 inputNombre.classList.remove("is-success");
 inputMensaje.classList.remove("is-success");
 ayudaCheck.classList.remove("fas");
 ayudaCheck.classList.remove("fa-check");
 ayudaTriangulo.classList.remove("fas");
 ayudaTriangulo.classList.remove("fa-check");
}

function enviar(inputNombre, inputEmail, inputMensaje) {
    if(inputNombre != "" && inputEmail != "" && inputMensaje != "") {
        enviarEmailConInfoBoda(inputNombre, inputEmail, inputMensaje);
        mostrarNotificacion("is-success", "Gracias, he recibido tu mensaje, pronto me pondre en contacto contigo.");
    } else {
        mostrarNotificacion("is-danger", "Upss, ha ocurrido un problema vuelve a intentarlo."); 
    }
}


function mostrarNotificacion(notificacionTipo, notificacionTexto) {
    var notificacion = document.getElementById("notificacion");
    var notificacionText = document.getElementById("notificacionTexto");

    notificacion.classList.add(notificacionTipo);
    notificacionText.innerText = notificacionTexto;
    notificacion.style.visibility = "visible";

    setTimeout(function(){ 
        notificacion.style.visibility = "hidden"; 
    }, 6000);

}




