elementoUno = document.getElementById("serviciosPostales");
elementoDos = document.getElementById("serviciosEncomiendas");
elementoTres = document.getElementById("serviciosAdicionales");
spinner = document.getElementById("spinner"); 

const mostrarPostales = () => {
    spinner.style.display='block';
    elementoDos.style.display='none';
    elementoTres.style.display='none';

    setTimeout(function() {

    spinner.style.display='none';
    elementoUno.style.display='block';

    const [precioPostalCero, precioPostalUno, precioPostalDos, precioPostalTres, precioPostalCuatro ] = postales;
    document.getElementById('precioPostalIDCero').innerHTML= "$ " + precioPostalCero.precio;
    document.getElementById('precioPostalIDUno').innerHTML= "$ " + precioPostalUno.precio;
    document.getElementById('precioPostalIDDos').innerHTML= "$ " + precioPostalDos.precio;
    document.getElementById('precioPostalIDTres').innerHTML= "$ " + precioPostalTres.precio;
    document.getElementById('precioPostalIDCuatro').innerHTML= "$ " + precioPostalCuatro.precio;

    }, 700);
    
} 

const mostrarEncomiendas = () => {
    spinner.style.display='block';
    elementoUno.style.display='none';
    elementoTres.style.display='none';

    setTimeout(function() {

    spinner.style.display='none';
    elementoDos.style.display='block';

    const [precioEncomiendaCero, precioEncomiendaUno, precioEncomiendaDos, precioEncomiendaTres, precioEncomiendaCuatro, precioEncomiendaCinco, precioEncomiendaSeis, precioEncomiendaSiete] = encomiendas;
    document.getElementById('precioEncomiendasIDCero').innerHTML= "$ " + precioEncomiendaCero.precio;
    document.getElementById('precioEncomiendasIDUno').innerHTML= "$ " + precioEncomiendaUno.precio;
    document.getElementById('precioEncomiendasIDDos').innerHTML= "$ " + precioEncomiendaDos.precio;
    document.getElementById('precioEncomiendasIDTres').innerHTML= "$ " + precioEncomiendaTres.precio;
    document.getElementById('precioEncomiendasIDCuatro').innerHTML= "$ " + precioEncomiendaCuatro.precio;
    document.getElementById('precioEncomiendasIDCinco').innerHTML= "$ " + precioEncomiendaCinco.precio;
    document.getElementById('precioEncomiendasIDSeis').innerHTML= "$ " + precioEncomiendaSeis.precio;
    document.getElementById('precioEncomiendasIDSiete').innerHTML= "$ " + precioEncomiendaSiete.precio;

    }, 700);
} 

const mostrarAdicionales = () => {
    spinner.style.display='block';
    elementoUno.style.display='none';
    elementoDos.style.display='none';

    setTimeout(function() {
    
    spinner.style.display='none';
    elementoTres.style.display='block';

    const [precioAdicionalCero, precioAdicionalUno, precioAdicionalDos] = adicionales;
    document.getElementById('precioAdicionalesIDCero').innerHTML= "$ " + precioAdicionalCero.precio;
    document.getElementById('precioAdicionalesIDUno').innerHTML= "$ " + precioAdicionalUno.precio;
    document.getElementById('precioAdicionalesIDDos').innerHTML= "$ " + precioAdicionalDos.precio;
    
    }, 700);
} 


