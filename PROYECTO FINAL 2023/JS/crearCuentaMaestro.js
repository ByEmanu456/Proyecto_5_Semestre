function validarMaestro(){

    //Función que previene que la pagina se recargue

    event.preventDefault();

    //Declaración de las variables que van a contener los datos del alumno ingresados en el formulario

    let numControl = document.getElementById("numControl").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let fechaNac = document.getElementById("fechaNac").value;
    let edad = document.getElementById("edad").value;

    let radioSexoH = document.getElementById("hombre");
    let radioSexoM = document.getElementById("mujer");
    let sexo;

    if(radioSexoH.checked){
        sexo = "Hombre";
    }
    else if(radioSexoM.checked){
        sexo = "Mujer";
    }
    else{
        sexo = null;
    }

    let materia = document.getElementById("materia").value;
    
    let submodulos;

    if(materia == "Módulo de Alimentos y Bebidas" || materia == "Módulo de Hospedaje" || materia == "Módulo de Logística" || materia == "Módulo de Ofimática" || materia == "Módulo de Programación" || materia == "Módulo de Recursos Humanos"){
        let checkbox1 = document.getElementById("sub1");
        let checkbox2 = document.getElementById("sub2");
        let checkbox3 = document.getElementById("sub3");
        let checkbox4 = document.getElementById("sub4");

        submodulos = {
            sub1: checkbox1.checked ? "Activo" : "Inactivo",
            sub2: checkbox2.checked ? "Activo" : "Inactivo",
            sub3: checkbox3.checked ? "Activo" : "Inactivo",
            sub4: checkbox4.checked ? "Activo" : "Inactivo"
        }
    }

    else{
        submodulos = null;
    }

    let usuario = document.getElementById("usuario").value;
    let contrasenia = document.getElementById("contrasenia").value;
    let checkbox = document.getElementById("acepto");

    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()\-=_+{}<>?\[\]|]+$/;

    //Evaluación de los datos ingresador para verificar que no estén vacios y que cumplan con las reglas establecidas previamente

    if(numControl.trim() == ""){
        alert("El número de control es obligatorio");
        console.log("Number error!")
    }
    
    else if(nombre.trim() == ""){
        alert("El nombre es obligatorio.");
        console.log("Name error!");
    }
    
    else if(apellidos.trim() == ""){
        alert("Los apellidos son obligatorios.");
        console.log("Last name error!");
    }
    
    else if(fechaNac.trim() == ""){
        alert("La fecha de nacimiento es obligatoria.");
        console.log("Birth date error!");
    }

    else if(edad.trim() == ""){
        alert("La edad es obligatoria.");
        console.log("Age error!")
    }

    else if(sexo == null){
        alert("El sexo es obligatorio.");
        console.log("Gender error!");
    }

    else if(materia.trim() == ""){
        alert("La materia es obligatoria.");
        console.log("Subject error!");
    }

    else if((materia == "Módulo de Alimentos y Bebidas" || materia == "Módulo de Hospedaje" || materia == "Módulo de Logística" || materia == "Módulo de Ofimática" || materia == "Módulo de Programación" || materia == "Módulo de Recursos Humanos") && !(submodulos.sub1 || submodulos.sub2 || submodulos.sub3 || submodulos.sub4)){
        alert("Escoja al menos un submodulo.");
        console.log("Submodule error!");
    }

    else if(usuario.trim() == ""){
        alert("El usuario es obligatorio.");
        console.log("User error!");
    }

    else if(contrasenia.length < 8 || contrasenia.length > 20){
        alert("La contraseña debe tener entre 8 y 20 caracteres.");
        console.log("Password error!");
    }

    else if(!regEx.test(contrasenia)){
        alert("La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un número y solo se aceptan los siguientes símbolos: !@#$%^&*()-=_+{}<>?[]|");
        console.log("Password error!");
    }
   
    else if(!checkbox.checked){
        alert("Acepte las condiciones de uso")
        console.log("checkbox error!")
    }

    else{
        //#region  EN DESUSO: ////*
        /*Los datos del usuario pasaron los pruebas y se llama a la función guardarDatosAlumno para pasar la información a localStorage.

        guardarDatosMaestro(numControl, nombre, apellidos, fechaNac, edad, sexo, materia, submodulos, usuario, contrasenia);

        //Esperar 5 segundos para redireccionar:
        setTimeout(function(){
            //Redireccionar al archivo PHP que hará la conexión con la base de datos:
            window.location.href = "../PHP/registrarMaestro.html.php";
        }, 5000);
        //TODO: Eliminar el time out pasadas las pruebas. */
        //#endregion

        console.log("Los datos ingresados han pasado las pruebas!");
        console.log("Redireccionando...");

        //Esperar 8 segundos para redireccionar:
        setTimeout(function(){
            //Redireccionar al archivo PHP que hará la conexión con la base de datos:
            redireccionar([
                numControl, nombre, apellidos, fechaNac, edad, sexo, usuario, materia, submodulos, contrasenia
            ]);
        }, 8000);
        //TODO: Eliminar el setTimeout pasadas las pruebas.
    }
}

function crearForm(atributos){
    //Crear form:
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "../PHP/resgistrarProfesor.html.php";

    //Crear inputs y almacenar los datos:
    let i = 1;
    atributos.forEach(e => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = "param" + i;
        input.value = e;

        form.appendChild(input);
        i++;
    });

    return form;
}

function redireccionar(arreglo){
    new_form = crearForm(arreglo);

    document.body.appendChild(form);
    new_form.submit();
}

//#region EN DESUSO: ////*
/*Función que guarda los datos ingresados en localStorage, sus parametros son todos los datos del formulario en el orden
que fueron mostrados en el html, para faciliar el guardado de los datos se crea un objeto alumno que contiene todos los datos
solicitados, para poder guadarlo en localStorage se codifica a JSON+/

function guardarDatosMaestro(param1, param2, param3, param4, param5, param6, param7, param8, param9, param10){

    console.log("Guardado de datos en local storage iniciado");

    let maestro = {
        numControl: param1, 
        nombre: param2, 
        apellidos: param3, 
        fechaNac: param4, 
        edad:param5, 
        sexo: param6, 
        materia: param7,
        submodulos: param8,
        usuario: param9, 
        contrasenia: param10, 
    }

    let maestroJSON = JSON.stringify(maestro);

    localStorage.setItem("maestro",maestroJSON); 
    
    console.log(tomarDatosMaestro());
}


//? ⬇⬇⬇ Funciones usadas en "registrarProfesor.html.php" ⬇⬇⬇


/+ Función que devuelve el objeto maestro con todos sus datos, como está en local storage ponla donde la necesites+/
function tomarDatosMaestro(){
    let maestroJson = localStorage.getItem("maestro");
    let maestro = JSON.parse(maestroJson);
    return maestro;
}

// Función que actualiza los inputs ocultos del formulario:
function cargarFormulario(maestro){
    document.getElementById("in1").value = maestro.numControl;
    document.getElementById("in2").value = maestro.nombre;
    document.getElementById("in3").value = maestro.apellidos;
    document.getElementById("in4").value = maestro.fechaNac;
    document.getElementById("in5").value = maestro.edad;
    document.getElementById("in6").value = maestro.sexo;
    document.getElementById("in7").value = maestro.usuario;
    document.getElementById("in8").value = maestro.materia;
    document.getElementById("in9").value = maestro.submodulos;
    document.getElementById("in10").value = maestro.turno;

    console.log("Enviando al servidor...");

    //Esperar 5 segundos para enviar el formulario:
    setTimeout(function(){
        //Enviar el formulario:
        document.getElementById("hiddenForm").submit();
    }, 5000);
    //TODO: Eliminar el time out pasadas las pruebas.
}*/
//#endregion
