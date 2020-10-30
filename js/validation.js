const formulario = document.getElementById('form__tarjeta');
const inputs = document.querySelectorAll('#form__tarjeta input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
    tarjeta: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
    numero: /^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}| 222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    ccv: /^\d{3,3}$/, // 3 numeros.
    direccion: /^[a-zA-Z0-9\s,'-]{2,40}$/, // Letras, numeros, guion y guion_bajo

}

const campos = {
    nombre: false,
    tarjeta: false,
    numero: false,
    correo: false,
    ccv: false,
    direccion: false
};

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre": validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "direccion": validarCampo(expresiones.direccion, e.target, 'direccion');
            break;
        case "correo": validarCampo(expresiones.correo, e.target, 'correo');
            break;
        case "numero": validarCampo(expresiones.numero, e.target, 'numero');
            break;
        case "tarjeta": validarCampo(expresiones.tarjeta, e.target, 'tarjeta');
            break;
        case "ccv": validarCampo(expresiones.ccv, e.target, 'ccv');
            break;
    }
};

const validarCampo = (expresion, input, campo) => {
    const error = document.querySelector('.formulario__input-error')
    if (expresion.test(input.value)) {
        document.getElementById(`input__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`input__${campo}`).classList.add('formulario__grupo-correcto');


        document.querySelector(`#input__${campo} div i`).classList.remove('fa-times-circle');
        document.querySelector(`#input__${campo} div i`).classList.add('fa-check-circle');
        document.querySelector(`#input__${campo} .datos__form__error`).classList.add('datos__form__error--activo');
        document.querySelector(`#input__${campo} .datos__form__error`).removeChild(error)
        campos[campo] = true;
    } else {
        document.getElementById(`input__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`input__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#input__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#input__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#input__${campo} .datos__form__error`).classList.add('datos__form__error--activo');
        document.querySelector(`#input__${campo} .datos__form__error`).appendChild(error)

        campos[campo] = false;
    }
};


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

})
