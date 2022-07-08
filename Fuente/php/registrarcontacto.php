<?php
include("conexion.php");

$Numero_contacto = $_POST["Numero_contacto"];
$Nombres = $_POST["Nombres"];
$Tipo_celular = $_POST["Tipo_celular"];
$Parentesco = $_POST["Parentesco"];
$Id_usuario = $_POST["Id_usuario"];

$registrar = "INSERT INTO contactos(Numero_contacto, Nombres, Tipo_celular, Parentesco, Id_usuario) VALUES ('$Numero_contacto', '$Nombres', '$Tipo_celular', '$Parentesco', '$Id_usuario')";

$resultado = mysqli_query($conexion, $registrar);



