-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-04-2026 a las 22:04:38
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

CREATE TABLE `mensajes` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `asunto` varchar(150) DEFAULT NULL,
  `mensaje` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mensajes`
--

INSERT INTO `mensajes` (`id`, `nombre`, `correo`, `asunto`, `mensaje`) VALUES
(1, 'EMILIANO DE JESUS', 'emiliano@gmail.com', 'Duda técnica', 'apapapapapa'),
(2, 'EMILIANO DE JESUS', 'emiliano@gmail.com', 'Duda técnica', 'apapapapapa'),
(3, 'EMILIANO DE JESUS', 'emiliano@gmail.com', 'Otro', 'papaapa\'apa'),
(4, 'EMILIANO DE JESUS', 'emiliano@gmail.com', 'Otro', 'papaapa\'apa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  `marca` varchar(50) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `disponible` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `categoria`, `marca`, `precio`, `stock`, `imagen`, `descripcion`, `disponible`) VALUES
(4, 'Tenis Nike Air Zoom Pegasus 40', 'Calzado', 'Nike', 2699.00, 15, 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', 'Calzado de running de alto rendimiento con tecnologia de amortiguacion React para mayor comodidad.', 1),
(5, 'Jersey Adidas Tiro 23 League', 'Ropa', 'Adidas', 899.00, 25, 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab', 'Jersey de entrenamiento transpirable con tecnologia AEROREADY, ideal para el campo de juego.', 1),
(6, 'Sudadera UAA Hoodie', 'Ropa', 'Under Armour', 1499.00, 0, 'https://images.unsplash.com/photo-1556821840-3a63f95609a7', 'Sudadera con capucha de mezcla de algodon sumamente suave para mantener el calor.', 0),
(7, 'Pantalon Nike Dri-FIT Academy', 'Ropa', 'Nike', 1199.00, 10, 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f', 'Pantalones de entrenamiento con tela elastica que absorbe el sudor para mayor agilidad.', 1),
(8, 'Playera Adidas Training', 'Ropa', 'Adidas', 749.00, 30, 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab', 'Playera ligera para entrenamiento intenso con tecnologia de secado rapido.', 1),
(9, 'Shorts Nike Pro Flex', 'Ropa', 'Nike', 899.00, 20, 'https://images.unsplash.com/photo-1591129020337-c79084e668f5', 'Shorts elasticos que permiten libertad total de movimiento en el gimnasio.', 1),
(10, 'Gorra Jordan Heritage', 'Accesorios', 'Jordan', 649.00, 12, 'https://images.unsplash.com/photo-1588850561447-417f3318f400', 'Gorra clasica con logo bordado y ajuste regulable en la parte trasera.', 1),
(11, 'Mochila Puma Phase', 'Accesorios', 'Puma', 599.00, 0, 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62', 'Mochila resistente con compartimento principal amplio para equipo deportivo.', 0),
(12, 'Tenis Reebok Nano X3', 'Calzado', 'Reebok', 2499.00, 18, 'https://images.unsplash.com/photo-1542291026-7eec264c27ff', 'Calzado versatil diseñado para crossfit y entrenamientos funcionales.', 1),
(13, 'zapato', 'Calzado', '', 12.00, 5, 'https://shoemakersacademy.com/wp-content/uploads/2020/03/Vans-QC-Toe-roll-scaled-1-2048x2048.jpg', '', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mensajes`
--
ALTER TABLE `mensajes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
