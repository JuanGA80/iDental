
const nombre = document.getElementById("nombre");
const tratamiento = document.getElementById("eleccion");
const phone = document.getElementById("telefono");
const email = document.getElementById("email");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e =>{
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    parrafo.innerHTML = "";
    if(nombre.value.length < 2){
        warnings += `El nombre no es valido <br>`
        entrar = true;
    }
    if(tratamiento.value == ""){
        warnings += `Escoge un tratamiento es obligatorio <br>`
        entrar = true;
    }
    if(phone.value == ""){
        warnings += `Escribe un numero de telefono valido <br>`
        entrar = true;
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true;
    }
    if(entrar){
        parrafo.innerHTML = warnings;
    }
})