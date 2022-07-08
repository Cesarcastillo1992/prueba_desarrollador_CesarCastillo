<?php
include("conexion.php");

$Identificacion = $_POST["Identificacion"];
$Nombres = $_POST["Nombres"];
$Apellidos = $_POST["Apellidos"];
$Fecha_nacimiento = $_POST["Fecha_nacimiento"];
$Genero = $_POST["Genero"];
$Id = $_POST["Id"];

$actualizar = "UPDATE usuarios SET Identificacion='$Identificacion', Nombres='$Nombres', Apellidos='$Apellidos', Fecha_nacimiento='$Fecha_nacimiento', Genero='$Genero' WHERE Id_usuario='$Id'";

$resultado = mysqli_query($conexion, $actualizar);
echo json_encode($actualizar);
