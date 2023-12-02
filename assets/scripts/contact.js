
const contactForm = document.forms["contact-form"];


contactForm.addEventListener( "submit" , ( event )=>{
    event.preventDefault();
     console.log(event);

     const user = {
         name : contactForm.elements["contact-form-name"].value ,
         email : contactForm.elements["contact-form-email"].value ,
         phone : contactForm.elements["contact-form-phone"].value,
         issue : contactForm.elements["contact-form-issue"].value,
         message : contactForm.elements["contact-form-message"].value,
     }

    if( datosVerificados( user )  ){
        enviarDatosAlServidor( user );
    }

} );

const datosVerificados = ( user ) => {

    let response = true;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (user.email.trim() || emailRegex.test(user.email)) {
        mensajeErrorEmail('Por favor, ingrese un correo electrónico válido.');
        response = false;
    }

    return response;
}

const mensajeErrorEmail = ( message ) =>{
    console.log( message);
    const errorMessage = document.getElementsById("invalid-email-message");
     const errorMessageContainer = document.getElementById("invalid-email-container");

    errorMessage.innerHTML = message;
    if( message === "" ){
        // displaty: none: quita el elemento del DOM
        // visibility: hidden : ocultar visualmente el elemento
        errorMessageContainer.style.display = "none";
    } else{
        errorMessageContainer.style.display = "block";
    }
}
const mensajeErrorTel = ( message ) =>{
    console.log( message);
    const errorMessage = document.getElementsById("invalid-phone-message");
     const errorMessageContainer = document.getElementById("invalid-phone-container");

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
// console.log(user);