-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-07-2022 a las 14:08:05
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdagenda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contactos`
--

CREATE TABLE `contactos` (
  `Id_contacto` int(11) NOT NULL,
  `Nombres` varchar(30) DEFAULT NULL,
  `Numero_contacto` int(11) DEFAULT NULL,
  `Tipo_celular` varchar(30) DEFAULT NULL,
  `Parentesco` varchar(30) DEFAULT NULL,
  `Id_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `contactos`
--

INSERT INTO `contactos` (`Id_contacto`, `Nombres`, `Numero_contacto`, `Tipo_celular`, `Parentesco`, `Id_usuario`) VALUES
(1, 'Oscar Lopez', 123456789, 'Fijo', 'Amigo', 1),
(2, 'camilo', 55555, 'Fijo', 'Familiar', 2),
(3, 'Sofia', 12345678, 'Celular', 'Familiar', 2),
(4, 'Evelin', 12345656, 'Celular', 'Compañero de trabajo', 3),
(5, 'Sandra', 12345258, 'Celular', 'compañero de trabajo', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `Id_usuario` int(11) NOT NULL,
  `Identificacion` int(11) NOT NULL,
  `Nombres` varchar(30) NOT NULL,
  `Apellidos` varchar(30) NOT NULL,
  `Fecha_nacimiento` date NOT NULL,
  `Genero` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`Id_usuario`, `Identificacion`, `Nombres`, `Apellidos`, `Fecha_nacimiento`, `Genero`) VALUES
(1, 123125896, 'cesar', 'Castillo Lozano', '1992-12-19', 'Masculino'),
(2, 456789123, 'Jenny Julieth', 'Salamanca Peña', '1992-11-03', 'Femenino'),
(3, 789456123, 'Isabel Sofia', 'Rincon Serna', '1990-06-03', 'Femenino'),
(4, 987654321, 'Julian Esteban', 'Ramirez Gambasica', '2001-11-25', 'Masculino'),
(5, 369852147, 'Eylen Salome', 'Ramos Narvaez', '1999-07-17', 'Femenino'),
(6, 917382465, 'Jairo Humberto', 'Castillo Garnica', '1979-11-27', 'Masculino'),
(9, 852467913, 'Gabriela', 'Lozano Ramos', '1970-06-16', 'Femenino'),
(10, 123456, 'camilo', 'ceballos', '2022-07-05', 'Masculino');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contactos`
--
ALTER TABLE `contactos`
  ADD PRIMARY KEY (`Id_contacto`),
  ADD KEY `Id_usuario` (`Id_usuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`Id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contactos`
--
ALTER TABLE `contactos`
  MODIFY `Id_contacto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `Id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `contactos`
--
ALTER TABLE `contactos`
  ADD CONSTRAINT `contactos_ibfk_1` FOREIGN KEY (`Id_usuario`) REFERENCES `usuarios` (`Id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
