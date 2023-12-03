const contactForm = document.forms["contact-form"];
const invalidEmailCharsRegex = /[^A-Za-z0-9@._-]/g;
const invalidEmailCharsRegex1 = /\.\./g;


document.getElementById("contact-form-phone").addEventListener("input", (e) => {
    let value = e.target.value;
    e.target.value = value.replace(/[^0-9]/g, "");
  });

 document.getElementById("contact-form-email").addEventListener("input", (e) => {
     let value = e.target.value;
     e.target.value = value.replace(invalidEmailCharsRegex, "");
   });

 document.getElementById("contact-form-email").addEventListener("input", (e) => {
     let value = e.target.value;
     e.target.value = value.replace(invalidEmailCharsRegex1, "");
   });


contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);

    const user = {
        name: contactForm.elements["contact-form-name"].value,
        email: contactForm.elements["contact-form-email"].value,
        phone: contactForm.elements["contact-form-phone"].value,
        issue: contactForm.elements["contact-form-issue"].value,
        message: contactForm.elements["contact-form-message"].value,
    }

    if (datosVerificados(user)) {
        enviarDatosAlServidor(user);
    }

});


const datosVerificados = (user) => {

    let response = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\..[^\s@]+$/;
    const phoneRegex = /^\d{10}$/; // Se asume que el número de teléfono tiene 10 dígitos

    if (!user.phone.trim() || !phoneRegex.test(user.phone)) {
        mensajeErrorTel('Por favor, ingrese un número de teléfono válido (10 dígitos).');
        response = false;
        return;
    }
    if (!user.email.trim() || !emailRegex.test(user.email.trim())) {
        mensajeErrorEmail('Por favor, ingrese un correo electrónico válido.');
        response = false;
        console.log('Email:', user.email);
        console.log('Validación de correo:', emailRegex.test(user.email.trim()));
        return
    }
    console.log('Email:', user.email);
    console.log('Validación de correo:', emailRegex.test(user.email));
    return response;
}


const mensajeErrorEmail = (message) => {
    console.log(message);
    const errorMessage = document.getElementById("invalid-email-message");
    const errorMessageContainer = document.getElementById("invalid-email-container");

    errorMessage.innerHTML = message;
    if (message === "") {
        // displaty: none: quita el elemento del DOM
        // visibility: hidden : ocultar visualmente el elemento
        errorMessageContainer.style.display = "none";
    } else {
        errorMessageContainer.style.display = "block";
    }
}
const mensajeErrorTel = (message) => {
    console.log(message);
    const errorMessage = document.getElementById("invalid-phone-message");
    const errorMessageContainer = document.getElementById("invalid-phone-container");

    errorMessage.innerHTML = message;
    if (message === "") {
        // displaty: none: quita el elemento del DOM
        // visibility: hidden : ocultar visualmente el elemento
        errorMessageContainer.style.display = "none";
    } else {
        errorMessageContainer.style.display = "block";
    }
}

const enviarDatosAlServidor = (user) => {
    console.table(user);
    // TODO enviar datos a la api del servidor
}
// console.log(user);