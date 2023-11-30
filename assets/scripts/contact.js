
const contactForm = document.forms["contactForm"];


contactForm.addEventListener( "submit" , ( event )=>{
    event.preventDefault();
    // console.log(event);

     const user = {
         name : contactForm.elements["contact-form-name"].value ,
         email : contactForm.elements["contact-form-email"].value ,
         number : contactForm.elements["contact-form-number"].value,
         issue : contactForm.options["contactMessage"].value,
         message : contactForm.elements["contactMessage"].value,
     }

    if( datosVerificados( user )  ){
        enviarDatosAlServidor( user );
    }

} );

const datosVerificados = ( user ) => {
    let response = true;

    if( user.email === "" ){
        mensajeError("Falta introducir el email");
        response = false;
    } else if( user.password.length < 8) {
        mensajeError("El password debe ser mayor o igual a 8 caracteres");
        response = false;
    } else if( user.password !== user.confirmPassword) {
        mensajeError("La confirmación de contraseña no coincide");
        response = false;
    } else if ( !user.termsandconditions ) {
        mensajeError("Debe aceptar los términos y condiciones");
        response = false;
    } else {
        mensajeError("");
    }

    return response;
}

const mensajeError = ( message ) =>{
    console.log( message);
    const errorMessage = document.getElementById("error-message");
    const errorMessageContainer = document.getElementById("error-message-container");

    errorMessage.innerHTML = message;
    if( message === "" ){
        // displaty: none: quita el elemento del DOM
        // visibility: hidden : ocultar visualmente el elemento
        errorMessageContainer.style.display = "none";
    } else{
        errorMessageContainer.style.display = "block";
    }
}

const enviarDatosAlServidor = ( user ) => {
    console.table( user );
    // TODO enviar datos a la api del servidor
}
console.log(user);