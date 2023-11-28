let nombrePrimerUsuario = document.getElementById("usuarioPrimerNombre");
let imagenPrimerUsuario = document.getElementById("usuarioPrimerImagen");

let nombreSegundoUsuario = document.getElementById("usuarioSegundoNombre");
let imagenSegundoUsuario = document.getElementById("usuarioSegundoImagen");

let nombreTercerUsuario = document.getElementById("usuarioTercerNombre");
let imagenTercerUsuario = document.getElementById("usuarioTercerImagen");


async function getUsers() {
    const results = await fetch("https://randomuser.me/api/?results=3")
        .then((results) => results.json())
        .then((data) => {
            nombrePrimerUsuario.innerHTML = (data.results[0].name.first);
            imagenPrimerUsuario.setAttribute("src", imagenPrimerUsuario.innerText = (data.results[0].picture.large));

            nombreSegundoUsuario.innerHTML = (data.results[1].name.first);
            imagenSegundoUsuario.setAttribute("src", imagenSegundoUsuario.innerText = (data.results[1].picture.large));

            nombreTercerUsuario.innerHTML = (data.results[2].name.first);
            imagenTercerUsuario.setAttribute("src", imagenTercerUsuario.innerText = (data.results[2].picture.large));
        })
        .catch(err => {
            console.log(err + "\nHubo un error de conexión");
        });
}

getUsers();
