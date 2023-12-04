<?php

$numControl = $_POST['numControl'];
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

$elimina=$conexion->prepare("delete from $tabla where num_Control=$numControl");

if($elimina->execute()) {
    echo("Registro eliminado".'<br>');
} else {
    echo("Registro no eliminado");
}
$conexion = null;
?>