<?php
include("conexion.php");

$Id = $_POST["Id"];

$eliminar = "DELETE FROM contactos WHERE Id_contacto=$Id";

$resultado = mysqli_query($conexion, $eliminar);
