const esEmailValido = (email) => {
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    return emailRegex.test(email)
}

const validarNombre = () => {
    const nombreInput = document.getElementById('nombre');
    if (nombreInput.value.trim() == "") {
        // error de required
        document.getElementById('error-nombre').innerHTML = "El nombre es requerido";
        nombreInput.classList.add('is-invalid');
    } else if (nombreInput.value.trim().length < 5) {
        // error de minLength
        document.getElementById('error-nombre').innerHTML = "El nombre debe tener al menos 5 caracteres";
        nombreInput.classList.add('is-invalid');
    } else {
        document.getElementById('error-nombre').innerHTML = "";
        nombreInput.classList.remove('is-invalid');
    }
}


const enviarFormulario = () => {
    let formularioCorrecto = true;
    const nombreInput = document.getElementById('nombre');
    if (nombreInput.value.trim() == "") {
        // error de required
        document.getElementById('error-nombre').innerHTML = "El nombre es requerido";
        formularioCorrecto = false;
    } else if (nombreInput.value.trim().length < 5) {
        // error de minLength
        document.getElementById('error-nombre').innerHTML = "El nombre debe tener al menos 5 caracteres";
        formularioCorrecto = false;
    } else {
        document.getElementById('error-nombre').innerHTML = "";
    }

    const emailInput = document.getElementById('email');
    if (emailInput.value.trim() == "") {
        // error de required
        document.getElementById('error-email').innerHTML = "El email es requerido";
        formularioCorrecto = false;
    } else if (!esEmailValido(emailInput.value)) {
        // error de minLength
        document.getElementById('error-email').innerHTML = "Direccion de email incorrecta";
        formularioCorrecto = false;
    } else {
        document.getElementById('error-email').innerHTML = "";
    }

    const direccionInput = document.getElementById('direccion');
    if (direccionInput.value.trim() == "") {
        // error de required
        document.getElementById('error-direccion').innerHTML = "La direccion es requerida";
        formularioCorrecto = false;
    } else if (direccionInput.value.trim().length <= 6) {
        // error de minLength
        document.getElementById('error-direccion').innerHTML = "Direccion incorrecta, debe tener minimo 6 letras";
        formularioCorrecto = false;
    } else {
        document.getElementById('error-direccion').innerHTML = "";
    }

    const contraseñaInput = document.getElementById('contraseña')
    if (contraseñaInput.value.trim() == "") {
        // error de required
        document.getElementById('error-contraseña').innerHTML = "La contraseña es requerida";
        formularioCorrecto = false;
    } else if (contraseñaInput.value.trim().length <= 4) {
        // error de minLength
        document.getElementById('error-contraseña').innerHTML = "La contraseña minima es de 4 caracteres";
        formularioCorrecto = false;
    } else {
        document.getElementById('error-contraseña').innerHTML = "";
    }

    const ciudadInput = document.getElementById('ciudad')
    if (ciudadInput.value.trim() == "") {
        // error de required
        document.getElementById('error-ciudad').innerHTML = "La ciudad es requerida";
        formularioCorrecto = false;
    } else if (ciudadInput.value.trim().length <= 3) {
        // error de minLength
        document.getElementById('error-ciudad').innerHTML = "Ciudad incorrecta, tiene que ser minima de 3 letras";
        formularioCorrecto = false;
    } else {
        document.getElementById('error-ciudad').innerHTML = "";
    }
    const confirmar = document.getElementById("confirmar");
    if (formularioCorrecto) {
        console.log("Nombre:", nombreInput.value);
        console.log("Email:", emailInput.value);
        console.log("Direccion:", direccionInput.value);
        console.log("Contraseña:", contraseñaInput.value);
        console.log("Ciudad:", ciudadInput.value);
        console.log("Desea Confirmar:", confirmar.value);
    } else {
        console.log("Formulario incorrecto")
    }

}

const inicializarJs = () => {
    const boton = document.getElementById("enviar-btn");
    boton.addEventListener('click', function (e) {
        enviarFormulario();
    });
}

window.addEventListener('load', inicializarJs);