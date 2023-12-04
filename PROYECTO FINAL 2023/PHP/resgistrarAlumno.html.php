<?php
/*
    !Proyecto final del semestre Programación SubI y SubII
    PHP code by: Esteban Flores Martínez.
    ?Consulta a la BD para registrar un alumno mediante INSERT.
    *(también se inicializa su progreso) ⬆⬆⬆
*/

include './funciones/INSERT _alumno.php';
$message = "Intentanto crear registro en la base de datos...\n";

//Verificar que se halla accedido correctamente a la página:
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    //Hacer el resgistro en la base de datos:
    $resultado = insertAlumno();

    $message = $message . $resultadoConsulta;
}else{
    header("Location: ../HTML/iniciarSesion.html");
}
?>

<!-- THE ACTUAL HTML: -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>EcoByte</title>
    <!--    
        //TODO: Crear el CSS de las páginas redireccionables .php
    -->
    <link rel="stylesheet" href="../CSS/redireccionable.css">
</head>
<body>
    <main>
        <!--
            //TODO: Añadir el HTML con los elementos visibles de las páginas redireccionables .php
            //TODO: que usarán las clases CSS para darle estilo
        -->
    </main>
    <div id="return"></div>
    <script type="text/javascript">
        const div = document.getElementById("return");

        //Mensaje de depuración:
        console.log("Runing on: <?php echo($_SERVER['REQUEST_METHOD']) ?>");
        console.log("Depuration result: <?php echo($message) ?>");

        const estatus = "<?php echo $estatus ?>";
        if(estatus === "TRUE"){
            //Redireccionar inmediatamente:
            //TODO: Remover el setTimeout después de las pruebas
            setTimeout(function(){
                window.location.href = '../HTML/iniciarSesion.html';
            }, 8000);
        }else{
            //Mostrar mensaje de error y
            //el botón para regresar a la otra página:
            div.innerHTML =
                "<h1>Ah ocurrido un error en la consulta!</h1>" +
                "<h3>Parece ser que hubo un error inseperado<br>al realizar la consulta con los datos ingresados.</h3>" +
                "<h2>Puede intentar lo siguiente:</h2>" +
                "<ol><li>Compruebe si su número de control es correcto.</li>" +
                "<li>Compruebe que su número de control no halla sido registrado previamente.</li>" +
                "<li>Compruebe la conexión con el servidor.</li></ol>" +
                '<button onclick="window.history.back();">Regresar a la página anterior</button>';
        }
    </script>
</body>
</html>
