<?php
include("conexion.php");
$Id = $_POST["Id"];
$usuarios = "SELECT * FROM contactos WHERE Id_contacto=$Id";
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