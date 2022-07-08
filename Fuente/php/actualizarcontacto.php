<?php
include("conexion.php");

$Numero_contacto = $_POST["Numero_contacto"];
$Nombres = $_POST["Nombres"];
$Tipo_celular = $_POST["Tipo_celular"];
$Parentesco = $_POST["Parentesco"];
$Id = $_POST["Id_contacto"];

$actualizar = "UPDATE contactos SET Numero_contacto='$Numero_contacto', Nombres='$Nombres', Tipo_celular='$Tipo_celular', Parentesco='$Parentesco' WHERE Id_contacto='$Id'";

$resultado = mysqli_query($conexion, $actualizar);
echo json_encode($actualizar);

