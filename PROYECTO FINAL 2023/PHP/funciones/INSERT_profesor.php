<?php
/*
    !Proyecto final del semestre Programación SubI y SubII
    PHP code by: Esteban Flores Martínez.
    ?Consulta a la BD para registrar un profesor mediante INSERT.
*/

include './constantes.php';

function insertProfesor(){
    $resultadoConsulta = " Consulta iniciada...\n";
    $estatus = FALSE;

    //! Conexion a la BD:
    try{
        //Establecer conexión:
        $conexion = new PDO(PDO_CONECTION, USUARIO, PASSWORD, DSN_OPCIONES);
        $resultadoConexion = ' Conexión exitosa.';
        $estatus = TRUE;
    }
    catch(PDOException $error){
        $resultadoConexion = " Falló la conexión...\n Error de conexión: " . $error -> getMessage();
    }

    //! Profesor:
    if($estatus){
        //Preparar la consulta INSERT en la conexión:
        $insert = $conexion -> prepare(INSTRUCCIONES['INSERT_profesor']);

        //Asignar los valores a los parámetros:
        for($i = 1; $i <= 10; $i++){
            $insert -> bindParam(":p$i", $_POST["param$i"]);
        }

        try{
            if($insert -> execute()){
                $consulta = ' Nuevo registro creado con éxito.';
            }
        }
        catch(PDOException $error){
            $errorInfo = $error -> errorInfo;
            $consulta = " No se pudo realizar el registro...\n Error de consulta: " . $errorInfo[2];
            $estatus = FALSE;
        }
    }

    $resultadoConsulta = "$resultadoConsulta Conexión a la BD: $resultadoConexion \n Consulta INSERT de profesor: $consulta";
    //Terminar la conexión:
    unset($conexion);

    return $estatus;
}

?>