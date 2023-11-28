const botonFormulario = document.querySelector("#enviarFormulario");

const faltanCargarDatos = () => {
    let validarInputNombreApellido = new RegExp('^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$');
    let validarInputEmail = new RegExp('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$');
    
    return (!validarInputNombreApellido.test(formularioNombre.value) || !validarInputNombreApellido.test(formularioApellido.value) || !validarInputEmail.test(formularioEmail.value) || formularioMensaje.value == "");
}

botonFormulario.addEventListener("click", (event) => {
    
    faltanCargarDatos() ? mostrarError() : mostrarConfirmacion();
    event.preventDefault()
})

const mostrarError  = () => {
    Swal.fire({
        title: "Tienes que completar todos los campos para enviar el formulario 🚨",
        position: "top-end",
        showConfirmButton: false,
        toast: true,
        timer: 3000,
        timerProgress: true,
        background: "#f8c538",
        color: "#000"
    })
}

const mostrarConfirmacion = () => {
    
    Swal.fire({
        title: 'Estás por enviar el formulario',
        text: "¿Has rellenado correctamente todos los campos?",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonAriaLabel: "Cancelar",
        confirmButtonColor: '#d707cc',
        cancelButtonColor: '#f8c538',
        confirmButtonText: 'Si, envía mi formulario'

    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://formsubmit.co/ajax/santiago.grinblat@gmail.com`, {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: `${formularioNombre.value} ${formularioApellido.value}`,
                    message: formularioMensaje.value
                })
            })
                .then(res => res.ok ? res.json() : Promise.reject(res))
                .then(json => {
                    console.log(json);
                })
                .catch(err => {
                    console.log(err);
                });

            fetch(`https://formsubmit.co/ajax/${formularioEmail.value}`, {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    message: `Hola ${formularioNombre.value}! Nos enviaste el siguiente mensaje: "${formularioMensaje.value}". Te estaremos respondiendo en la brevedad!` 
                })
            })
                .then(res => res.ok ? res.json() : Promise.reject(res))
                .then(json => {
                    console.log(json);
                })
                .catch(err => {
                    console.log(err);
                });

            Swal.fire(
                'Enviado!',
                'Tu formulario ha sido enviado correctamente.',
                'success'
            )
        }
    })
}
