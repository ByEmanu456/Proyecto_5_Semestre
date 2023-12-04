<?php
    //Constantes relacionadas a la BD:
    define('SERVIDOR', 'localhost:3306');
    define('BASE_DE_DATOS', 'proyFinal_EcoByteOS');
    define('USUARIO', 'root');
    define('PASSWORD', '');
    define('DSN_OPCIONES', [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);

    define(
        'PDO_CONECTION',
        'mysql:host=' . SERVIDOR . ';dbname=' . BASE_DE_DATOS
    );

    define(
        'INSTRUCCIONES',
        ['INSERT_alumno' => "INSERT INTO alumno("
                            ."numero_de_control, "
                            ."nombre, "
                            ."apellido, "
                            ."fecha_de_nacimiento, "
                            ."edad, "
                            ."genero, "
                            ."nombre_de_usuario, "
                            ."semestre, "
                            ."grupo, "
                            ."turno, "
                            ."especialidad, "
                            ."contraseña) "
                            ."VALUES(:p1, :p2, :p3, :p4, :p5, :p6, :p7, :p8, :p9, :p10, :p11, :p12)",
        'INSERT_profesor' => "INSERT INTO profesor("
                            ."numero_de_control_p, "
                            ."nombre, "
                            ."apellidos, "
                            ."fecha_de_nacimiento, "
                            ."edad, "
                            ."genero, "
                            ."nombre_de_usuario, "
                            ."materia, "
                            ."modulo, "
                            ."contraseña) "
                            ."VALUES(:p1, :p2, :p3, :p4, :p5, :p6, :p7, :p8, :p9, :p10)",
        'INSERT_progreso' => "INSERT INTO progreso_alumno("
                            ."calificacion1, "
                            ."calificacion2, "
                            ."calificacion3, "
                            ."calificacion4, "
                            ."numero_de_control) "
                            ."VALUES(:p1, :p2, :p3, :p4, :p5)",
        ]
    );

    global $default_decimal;
    $default_decimal = '0.00';
?>