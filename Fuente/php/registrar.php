<?php
include("conexion.php");

$Identificacion = $_POST["Identificacion"];
$Nombres = $_POST["Nombres"];
$Apellidos = $_POST["Apellidos"];
$Fecha_nacimiento = $_POST["Fecha_nacimiento"];
$Genero = $_POST["Genero"];

$registrar = "INSERT INTO usuarios(Identificacion, Nombres, Apellidos, Fecha_nacimiento, Genero) VALUES
('$Identificacion', '$Nombres', '$Apellidos', '$Fecha_nacimiento', '$Genero')";

$resultado = mysqli_query($conexion, $registrar);

