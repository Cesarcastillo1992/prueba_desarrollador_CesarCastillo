<?php
include("conexion.php");



$usuarios = "SELECT * FROM usuarios";
$resultado = mysqli_query($conexion, $usuarios);
$arreglo = [];    
while ($row=mysqli_fetch_assoc($resultado)){ 
    $datos["Id_usuario"]= $row["Id_usuario"];
    $datos["Identificacion"]= $row["Identificacion"];
    $datos["Nombres"]  = $row["Nombres"];
    $datos["Apellidos"] = $row["Apellidos"];
    $datos["Fecha_nacimiento"] = $row["Fecha_nacimiento"];
    $datos["Genero"] = $row["Genero"];
    array_push($arreglo, $datos);
}
    echo json_encode($arreglo);
