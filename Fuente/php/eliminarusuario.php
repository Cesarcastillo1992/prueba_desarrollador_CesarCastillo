<?php
include("conexion.php");

$Id = $_POST["Id"];

$eliminar = "DELETE FROM usuarios WHERE Id_usuario=$Id";

$resultado = mysqli_query($conexion, $eliminar);
