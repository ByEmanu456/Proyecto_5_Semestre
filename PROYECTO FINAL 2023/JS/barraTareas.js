var ContenidoMenuH = `
    <p>USUARIO</p>
    <img src="../Recursos/Imagenes/Iconos/hombre.png">
    <a>Cerrar Sesión</a>
    <a>Configuración de mi cuenta</a>
 `;

var ContenidoMenuM = `
    <p>USUARIO</p>
    <img src="../Recursos/Imagenes/Iconos/mujer.png">
    <a>Cerrar Sesión</a>
    <a>Configuración de mi cuenta</a>
`;

function toggleMenu(){
    let contenedor = document.getElementById("menuUsuario");
    contenedor.classList.toggle("desplegarMenu");
    if(contenedor.innerHTML.length === 0){
        contenedor.innerHTML = ContenidoMenuH;
    }
    else{
        contenedor.innerHTML = '';
    }
} 

function actualizarHora(){
    var fecha = new Date();
    var opciones = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    var fechaFormateada = fecha.toLocaleDateString('es-ES', opciones);
    fechaFormateada = fechaFormateada.toUpperCase().replace(/,/g, '');
    let contenedor = document.getElementById("fecha");
    contenedor.innerHTML = fechaFormateada;  
}

setInterval(actualizarHora,1000);