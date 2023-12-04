function validarAlumno(){

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

    let semestre = document.getElementById("semestre").value;
    let radioA = document.getElementById("grupoA");
    let radioB = document.getElementById("grupoB");
    let grupo;

    if(radioA.checked){
        grupo = "A";
    }
    else if(radioB.checked){
        grupo = "B"
    }
    else{
        grupo = null;
    }

    let turno = document.getElementById("turno").value;
    let especialidad = document.getElementById("especialidad").value;
    let usuario = document.getElementById("usuario").value;
    let contrasenia = document.getElementById("contrasenia").value;
    let checkbox = document.getElementById("acepto");

    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()\-=_+{}<>?\[\]|]+$/;
    const regExColor = /^#[0-9A-Fa-f]{6}$/i;

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

    else if(semestre < 1 || semestre > 6){
        alert("El semestre es obligatorio.");
        console.log("Semester error!");
    }

    else if(grupo == null){
        alert("El grupo es obligatorio.");
        console.log("Group error!");
    }

    else if(turno.trim() == ""){
        alert("El turno es obligatorio.")
        console.log("Turn error!")
    }

    else if(especialidad.trim() == ""){
        alert("La especialidad es obligatoria.");
        console.log("Speciality error!");
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

    else if(color.trim() == ""){
        alert("El color es obligatorio.");
        console.log("Color error!");

    }
    
    else if(!regExColor.test(color)){
        alert("El color debe tener un formato válido (por ejemplo, #FF0000).");
        console.log("Color error!");
    }
    
    else if(!checkbox.checked){
        alert("Acepte las condiciones de uso")
        console.log("checkbox error!")
    }

    else{
        //#region EN DESUSO: ////*
        /*Los datos del usuario pasaron los pruebas y se llama a la función guardarDatosAlumno para pasar la información a localStorage.

        guardarDatosAlumno(numControl, nombre, apellidos, fechaNac, edad, sexo, semestre, grupo, turno, especialidad, usuario, contrasenia, color);
        
        console.log("Redireccionando...");
        //Esperar 5 segundos para redireccionar:
        setTimeout(function(){
            //Redireccionar al archivo PHP que hará la conexión con la base de datos:
            window.location.href = "../PHP/registrarAlumno.html.php";
        }, 5000); */
        //TODO: Eliminar el time out pasadas las pruebas.
        //#endregion

        console.log("Los datos ingresados han pasado las pruebas!");
        console.log("Redireccionando...");

        //Esperar 8 segundos para redireccionar:
        setTimeout(function(){
            //Redireccionar al archivo PHP que hará la conexión con la base de datos:
            redireccionar([
                numControl, nombre, apellidos, fechaNac, edad, sexo, usuario, semestre, grupo, turno, especialidad, contrasenia
            ]);
        }, 8000);
        //TODO: Eliminar el setTimeout pasadas las pruebas.
    }
}

function crearForm(atributos){
    //Crear form:
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "../PHP/resgistrarAlumno.html.php";

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

function guardarDatosAlumno(param1, param2, param3, param4, param5, param6, param7, param8, param9, param10, param11, param12, param13){
    
    console.log("Guardado de datos en local storage iniciado");

    let alumno = {
        numControl: param1, 
        nombre: param2, 
        apellidos: param3, 
        fechaNac: param4, 
        edad:param5, 
        sexo: param6, 
        semestre: param7, 
        grupo: param8, 
        turno: param9, 
        especialidad: param10, 
        usuario: param11, 
        contrasenia: param12, 
    }

    let alumnoJSON = JSON.stringify(alumno);

    localStorage.setItem("alumno",alumnoJSON); 
    
    console.log(tomarDatosAlumno());
}


//? ⬇⬇⬇ Funciones usadas en "registrarAlumno.html.php" ⬇⬇⬇


/+ Función que devuelve el objeto alumno con todos sus datos, como está en local storage ponla donde la necesites+/
function tomarDatosAlumno(){
    let alumnoJson = localStorage.getItem("alumno");
    let alumno = JSON.parse(alumnoJson);
    return alumno;
}

// Función que actualiza los inputs ocultos del formulario:
function cargarFormulario(alumno){
    document.getElementById("in1").value = alumno.numControl;
    document.getElementById("in2").value = alumno.nombre;
    document.getElementById("in3").value = alumno.apellidos;
    document.getElementById("in4").value = alumno.fechaNac;
    document.getElementById("in5").value = alumno.edad;
    document.getElementById("in6").value = alumno.sexo;
    document.getElementById("in7").value = alumno.usuario;
    document.getElementById("in8").value = alumno.semestre;
    document.getElementById("in9").value = alumno.grupo;
    document.getElementById("in10").value = alumno.turno;
    document.getElementById("in11").value = alumno.especialidad;
    document.getElementById("in12").value = alumno.contrasenia;

    console.log("Enviando al servidor...");

    //Esperar 5 segundos para enviar el formulario:
    setTimeout(function(){
        //Enviar el formulario:
        document.getElementById("hiddenForm").submit();
    }, 5000);
    //TODO: Eliminar el time out pasadas las pruebas.
}*/
//#endregion 
