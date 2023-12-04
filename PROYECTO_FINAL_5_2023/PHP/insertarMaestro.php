<?php

$numControl = $_POST['numControl'];
$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$fechaNac = $_POST['fechaNac'];
$edad = $_POST['edad'];
$sexo = isset($_POST['sexo']) ? ($_POST['sexo'] === 'on' ? 'Hombre' : 'Mujer') : '';
$materia = $_POST['materia'];
$sub1 = isset($_POST['sub1']) ? 1 : 0;
$sub2 = isset($_POST['sub2']) ? 1 : 0;
$sub3 = isset($_POST['sub3']) ? 1 : 0;
$sub4 = isset($_POST['sub4']) ? 1 : 0;
$usuario = $_POST['usuario'];
$contrasenia = $_POST['contrasenia'];

$servidor='localhost:3306';
$basededatos='emg_proyfinal';
$user='root';
$password='';
$dsn_opciones=[PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];

try {
    $conexion = new PDO("mysql:host=$servidor;dbname=$basededatos",$user,$password,$dsn_opciones);
} catch (PDOException $error) {
    //ERROR AL QUERER CONECTAR CON LA BASE DE DATOS
}

$inserta = $conexion->prepare("INSERT INTO emg_maestros (num_control, nombre, apellidos, fecha_nac, edad, sexo, materia, sub1, sub2, sub3, sub4, usuario, contrasena) VALUES (:numControl, :nombre, :apellidos, :fechaNac, :edad, :sexo, :materia, :sub1, :sub2, :sub3, :sub4, :usuario, :contrasena)");

// Vincular parámetros
$inserta->bindParam(":numControl", $numControl);
$inserta->bindParam(":nombre", $nombre);
$inserta->bindParam(":apellidos", $apellidos);
$inserta->bindParam(":fechaNac", $fechaNac);
$inserta->bindParam(":edad", $edad);
$inserta->bindParam(":sexo", $sexo);
$inserta->bindParam(":materia", $materia);
$inserta->bindParam(":sub1", $sub1);
$inserta->bindParam(":sub2", $sub2);
$inserta->bindParam(":sub3", $sub3);
$inserta->bindParam(":sub4", $sub4);
$inserta->bindParam(":usuario", $usuario);
$inserta->bindParam(":contrasena", $contrasenia);

if($inserta->execute()) {
    echo("Nuevo registro creado sin problema"); 
} else {
    echo("Incapaz de crear registro");
}
unset($conexion);

?>
