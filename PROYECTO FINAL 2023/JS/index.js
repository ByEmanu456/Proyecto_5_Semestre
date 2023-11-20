var Contenido1 = `
    <div class="MainCabecera">
        <h1>TEMA 1 - Lo que tienes que saber</h1>
        <img id="btnCerrar" src="../Recursos/Imagenes/Iconos/equis.png" onclick="cerrarContenido()">
        </div>
    <div class="MainContenido">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloremque voluptas officia. Aliquam assumenda incidunt velit eligendi, recusandae quasi, totam corrupti rerum, nemo nihil molestias illo maiores et excepturi numquam!</p>

        <div class="ContenedorBotones">
            <div id="btnConceptos"><h1>Conceptos</h1></div>
            <div id="btnVideos"><h1>Videos</h1></div>
            <div id="btnTest"><h1>Test</h1></div>
        </div>
    </div>
`;
var Contenido2 = `
    <div class="MainCabecera">
        <h1>TEMA 2 - Diagramas y modelos</h1>
        <img id="btnCerrar" src="../Recursos/Imagenes/Iconos/equis.png" onclick="cerrarContenido()">
    </div>
    <div class="MainContenido">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloremque voluptas officia. Aliquam assumenda incidunt velit eligendi, recusandae quasi, totam corrupti rerum, nemo nihil molestias illo maiores et excepturi numquam!</p>

        <div class="ContenedorBotones">
            <div id="btnConceptos"><h1>Conceptos</h1></div>
            <div id="btnVideos"><h1>Videos</h1></div>
            <div id="btnTest"><h1>Test</h1></div>
        </div>
    </div>
`;
var Contenido3 = `
    <div class="MainCabecera">
        <h1>TEMA 3 - Creando una base de datos</h1>
        <img id="btnCerrar" src="../Recursos/Imagenes/Iconos/equis.png" onclick="cerrarContenido()">
    </div>
    <div class="MainContenido">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloremque voluptas officia. Aliquam assumenda incidunt velit eligendi, recusandae quasi, totam corrupti rerum, nemo nihil molestias illo maiores et excepturi numquam!</p>

        <div class="ContenedorBotones">
            <div id="btnConceptos"><h1>Conceptos</h1></div>
            <div id="btnVideos"><h1>Videos</h1></div>
            <div id="btnTest"><h1>Test</h1></div>
        </div>
    </div>
`;
var Contenido4 = `
    <div class="MainCabecera">
        <h1>TEMA 4 - Ingresando y consultando información</h1>
        <img id="btnCerrar" src="../Recursos/Imagenes/Iconos/equis.png" onclick="cerrarContenido()">
    </div>
    <div class="MainContenido">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque doloremque voluptas officia. Aliquam assumenda incidunt velit eligendi, recusandae quasi, totam corrupti rerum, nemo nihil molestias illo maiores et excepturi numquam!</p>

        <div class="ContenedorBotones">
            <div id="btnConceptos"><h1>Conceptos</h1></div>
            <div id="btnVideos"><h1>Videos</h1></div>
            <div id="btnTest"><h1>Test</h1></div>
        </div>
    </div>
`;
var Contenido5 = `
INFORMACIÓN DEL USUARIO ACTIVO GUARDADA EN LOCAL STORAGE XDDD
`;



var objContenidos = {
    1: Contenido1,
    2: Contenido2,
    3: Contenido3,
    4: Contenido4,
    5: Contenido5
}

function cerrarContenido(){
    let contenedor = document.getElementById("contenedorMain");
    contenedor.classList.add("desaparecer");
    setTimeout(function Function(){
        contenedor.innerHTML = "";
    },500);
}

function verContenido(numContenido){
    let contenedor = document.getElementById("contenedorMain");

    if(!(contenedor.innerHTML.length === 0)){
        console.log("lleno");
        cerrarContenido();

        setTimeout(function Function(){
            contenedor.innerHTML = objContenidos[numContenido];
            contenedor.classList.remove("desaparecer");
        },501)
    }

    else{
        contenedor.innerHTML = objContenidos[numContenido];
        contenedor.classList.remove("desaparecer");
    }
}

function redireccionar(ruta){
    window.location.href = ruta;
}

