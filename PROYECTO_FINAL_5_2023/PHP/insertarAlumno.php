<?php

$numControl = $_POST['numControl'];
$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$fechaNac = $_POST['fechaNac'];
$edad = $_POST['edad'];
$sexo = isset($_POST['sexo']) ? ($_POST['sexo'] === 'on' ? 'Hombre' : 'Mujer') : '';
$semestre = $_POST['semestre'];
$grupo = isset($_POST['grupo']) ? ($_POST['grupo'] === 'on' ? 'A' : 'B') : '';
$turno = $_POST['turno'];
$especialidad = $_POST['especialidad'];
$usuario = $_POST['usuario'];
$contrasenia = $_POST['contrasenia'];
$color = $_POST['color'];

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

$inserta = $conexion->prepare("INSERT INTO emg_alumnos (num_control, nombre, apellidos, fecha_nac, edad, sexo, semestre, grupo, turno, especialidad, usuario, contrasena, color) VALUES (:numControl, :nombre, :apellidos, :fechaNac, :edad, :sexo, :semestre, :grupo, :turno, :especialidad, :usuario, :contrasena, :color)");

// Vincular parámetros
$inserta->bindParam(":numControl", $numControl);
$inserta->bindParam(":nombre", $nombre);
$inserta->bindParam(":apellidos", $apellidos);
$inserta->bindParam(":fechaNac", $fechaNac);
$inserta->bindParam(":edad", $edad);
$inserta->bindParam(":sexo", $sexo);
$inserta->bindParam(":semestre", $semestre);
$inserta->bindParam(":grupo", $grupo);
$inserta->bindParam(":turno", $turno);
$inserta->bindParam(":especialidad", $especialidad);
$inserta->bindParam(":usuario", $usuario);
$inserta->bindParam(":contrasena", $contrasenia);
$inserta->bindParam(":color", $color);

if($inserta->execute()) {
    echo("Nuevo registro creado sin problema");
    header("url=../HTML/iniciarSesion.php") 
} else {
    echo("Incapaz de crear registro");
}
unset($conexion);

?>