var input_nombre = document.getElementById("nombre");
var input_email = document.getElementById("email");
var input_submit = document.getElementById("submit");
var input_opjuegos = document.getElementById("opjuegos").value;
var feedback = document.querySelector(".feedback");

input_submit.addEventListener("click",enviarFormulario);

function enviarFormulario(event) {
    event.preventDefault();
    console.log("Hay click");
    console.log("!!");

    feedback.style.display = "block";

    var valor_nombre = input_nombre.value;
    var valor_email = input_email.value;
    var valor_opjuegos = input_opjuegos;
    
    var placeholder_nombre = document.getElementById("nombre-placeholder");
    var placeholder_email = document.getElementById("email-placeholder");
    var placeholder_opjuegos = document.getElementById("opjuegos-placeholder");
    

    

    placeholder_nombre.innerHTML = valor_nombre;
    placeholder_email.innerHTML = valor_email;
    placeholder_opjuegos.innerHTML = valor_opjuegos;
    
}