<?php

$numControl = $_POST['numControl'];
$contrasenia = $_POST['contrasenia'];
$persona = $_POST['persona'];

if ($persona === 'maestro') {
    $tabla = 'emg_maestros';
} else {
    $tabla = 'emg_alumnos';
}

$servidor='localhost:3306';
$basededatos='emg_proyfinal';
$user='root';
$password='';
$dsn_opciones=[PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

try {
    $conexion = new PDO("mysql:host=$servidor;dbname=$basededatos",$user,$password,$dsn_opciones);
    echo("Conexión Exitosa"."<br>");
} catch (PDOException $error) {
    echo("Error de Conexión"."<br>".$error->getMessage());
}

$consulta = $conexion->prepare("SELECT * FROM $tabla WHERE num_control = :numControl AND contrasena = :contrasenia");

$consulta->bindParam(":numControl", $numControl);
$consulta->bindParam(":contrasenia", $contrasenia);

$consulta->execute();

if($existe=$consulta->rowCount()>0) {
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);

    $nombre = $resultado['nombre'];
    $apellidos = $resultado['apellidos'];
    $fecha_nac = $resultado['fecha_nac'];
    $edad = $resultado['edad'];
    $sexo = $resultado['sexo'];

    if ($persona === 'maestro') {
        $materia = $resultado['materia'];
        $sub1 = $resultado['sub1'];
        $sub2 = $resultado['sub2'];
        $sub3 = $resultado['sub3'];
        $sub4 = $resultado['sub4'];
        $usuario = $resultado['usuario'];
    } else {
        $semestre = $resultado['semestre'];
        $grupo = $resultado['grupo'];
        $turno = $resultado['turno'];
        $especialidad = $resultado['especialidad'];
        $usuario = $resultado['usuario'];
        $color = $resultado['color'];
    }

    $usuarioArray = [
        'tipo' => $persona,
        'numControl' => $numControl,
        'nombre' => $nombre,
        'apellidos' => $apellidos,
        'fecha_nac' => $fecha_nac,
        'edad' => $edad,
        'sexo' => $sexo,
        'usuario' => $usuario,
        'contrasenia' => $contrasenia
    ];
    
    if ($persona === 'maestro') {
        $usuarioArray['materia'] = $materia;
        $usuarioArray['sub1'] = $sub1;
        $usuarioArray['sub2'] = $sub2;
        $usuarioArray['sub3'] = $sub3;
        $usuarioArray['sub4'] = $sub4;
    } else {
        $usuarioArray['semestre'] = $semestre;
        $usuarioArray['grupo'] = $grupo;
        $usuarioArray['turno'] = $turno;
        $usuarioArray['especialidad'] = $especialidad;
        $usuarioArray['color'] = $color;
    }
    
    $usuarioJSON = json_encode($usuarioArray);


    echo '<script>';
    echo 'let usuario = ' . $usuarioJSON . ';';
    echo 'localStorage.setItem("usuarioActivo", JSON.stringify(usuario));';
    echo 'window.location.href = "../HTML/index.html";';
    echo '</script>';

} else {
    echo("No existen registros");
}
$conexion = null;
?>