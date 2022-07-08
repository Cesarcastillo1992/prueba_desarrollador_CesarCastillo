<?php
include("conexion.php");
$Id = $_POST["Id"];


$usuarios = "SELECT c.* FROM usuarios u INNER JOIN contactos c ON u.Id_usuario=c.Id_usuario WHERE u.Id_usuario=$Id";
$resultado = mysqli_query($conexion, $usuarios);
$arreglo = [];    
while ($row=mysqli_fetch_assoc($resultado)){ 
    $datos["Id_contacto"]= $row["Id_contacto"];
    $datos["Nombres"]  = $row["Nombres"];
    $datos["Numero_contacto"] = $row["Numero_contacto"];
    $datos["Tipo_celular"] = $row["Tipo_celular"];
    $datos["Parentesco"] = $row["Parentesco"];
    array_push($arreglo, $datos);
}
    echo json_encode($arreglo);
