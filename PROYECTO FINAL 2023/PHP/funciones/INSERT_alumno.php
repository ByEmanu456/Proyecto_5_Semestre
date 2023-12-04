<?php
/*
    !Proyecto final del semestre Programación SubI y SubII
    PHP code by: Esteban Flores Martínez.
    ?Consulta a la BD para registrar un alumno mediante INSERT.
    *(también se inicializa su progreso) ⬆⬆⬆
*/

include './constantes.php';

function insertAlumno(){
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

    //! Alumno:
    if($estatus){
        //Preparar la consulta INSERT en la conexión:
        $insert1 = $conexion -> prepare(INSTRUCCIONES['INSERT_alumno']);
        
        //Asignar los valores a los parámetros:
        for($i = 1; $i <= 12; $i++){
            $insert1 -> bindParam(":p$i", $_POST["param$i"]);
        }
        //* La llave foránea "codigo_grupo" empieza indefinida, se asigna un valor default NULL.
        
        try{
            if($insert1 -> execute()){
                $consulta1 = ' Nuevo registro creado con éxito.';
            }
        }
        catch(PDOException $error){
            $errorInfo = $error -> errorInfo;
            $consulta1 = " No se pudo realizar el registro...\n Error de consulta: " . $errorInfo[2];
            $estatus = FALSE;
        }
    }

    //! Progreso_alumno:
    if($estatus){
        //Preparar la consulta INSERT en la conexión:
        $insert2 = $conexion -> prepare(INSTRUCCIONES['INSERT_progreso']);

        //Asignar los valores a los parámetros:
        //* El id es autogenerado por la BD, autoincremental.
        for($i = 1; $i <= 4; $i++){
            $insert2 -> bindParam(":p$i", $default_decimal);
        }
        $insert2 -> bindParam(':p5', $_POST['param1']);

        try{
            if($insert2 -> execute()){
                $consulta2 = ' Nuevo registro creado con éxito.';
            }
        }
        catch(PDOException $error){
            $errorInfo = $error -> errorInfo;
            $consulta2 = " No se pudo realizar el registro...\n Error de consulta: " . $errorInfo[2];
            $estatus = FALSE;
        }
    }

    $resultadoConsulta = "$resultadoConsulta Conexión a la BD: $resultadoConexion \n Consulta INSERT de alumno: $consulta1 \n Consulta INSERT de progreso: $consulta2";
    //Terminar la conexión:
    unset($conexion);

    return $estatus;
}

?>