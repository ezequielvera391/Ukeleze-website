
const formulario = document.getElementById('form2');
const inputs = document.querySelectorAll('#form2 input');

const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	numero: /^\d{7,14}$/, // 7 a 14 numeros.54
}

const campos = {
	name: false,
	mail: false,
	numero: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		
		case "name":
			validarCampo(expresiones.name, e.target, 'name');
		break;
		case "mail":
			validarCampo(expresiones.mail, e.target, 'mail');
		break;
		case "numero":
			validarCampo(expresiones.numero, e.target, 'numero');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo_${campo}`).classList.remove('form__group-incorrecto');
		document.getElementById(`grupo_${campo}`).classList.add('form__group-correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo_${campo} .input--error`).classList.remove('input--error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo_${campo}`).classList.add('form__group-incorrecto');
		document.getElementById(`grupo_${campo}`).classList.remove('form__group-correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo_${campo} .input--error`).classList.add('input--error-activo');
		campos[campo] = false;
	}
}
function enviarMail()   {
	
    const btn = document.getElementById('enviar');

    btn.value = 'Enviando...';

    const serviceID = 'service_n6q2eol';
    const templateID = 'template_9tij9ao';

    emailjs.sendForm(serviceID, templateID, formulario).then(() => {
        btn.value = "Enviar";
    }, (err) => {
        btn.value = "Enviar";
        alert(JSON.stringify(err))
    });
};


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.name && campos.mail && campos.numero){
		document.getElementById('formulario__mensaje--succes').classList.add('formulario__mensaje--succes--activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje--succes').classList.remove('formulario__mensaje--succes--activo');
		}, 5000);

		document.querySelectorAll('.form__group-correcto').forEach((icono) => {
			icono.classList.remove('form__group-correcto');
		});
        // 
		enviarMail();
		formulario.reset();
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje--error');
		setTimeout(() => {
		document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje--error');
		}, 5000);
	
	}
});

