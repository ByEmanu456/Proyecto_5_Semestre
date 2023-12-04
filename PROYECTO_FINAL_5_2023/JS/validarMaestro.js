
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
            sub1: checkbox1.checked,
            sub2: checkbox2.checked,
            sub3: checkbox3.checked,
            sub4: checkbox4.checked
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
        //Los datos del usuario pasaron los pruebas y se llama a la función guardarDatosAlumno para pasar la información a localStorage.
        document.getElementById("formulario").submit();
    }
}
