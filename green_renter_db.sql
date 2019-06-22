-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 22, 2019 at 04:54 PM
-- Server version: 5.7.23-0ubuntu0.18.04.1
-- PHP Version: 7.2.10-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `green_renter_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `appliences`
--

CREATE TABLE `appliences` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `power` float DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `cost_hour` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appliences`
--

INSERT INTO `appliences` (`id`, `name`, `power`, `rating`, `cost_hour`) VALUES
(75, 'Washer', 0.105951, 1, ' $0.20 '),
(76, 'Washer', 0.0963169, 2, ' $0.20 '),
(77, 'Washer', 0.0942765, 3, ' $0.20 '),
(78, 'Washer', 0.0824276, 4, ' $0.20 '),
(79, 'Washer', 0.0674138, 5, ' $0.20 '),
(80, 'Washer', 0.0577795, 6, ' $0.20 '),
(81, 'Fridge', 0.543696, 1, ' $0.20 '),
(82, 'Fridge', 0.477957, 2, ' $0.20 '),
(83, 'Fridge', 0.412217, 3, ' $0.20 '),
(84, 'Fridge', 0.340233, 4, ' $0.20 '),
(85, 'Fridge', 0.287269, 5, ' $0.20 '),
(86, 'Fridge', 0.215, 6, ' $0.20 '),
(87, 'TV', 0.873898, 1, ' $0.20 '),
(88, 'TV', 0.745256, 2, ' $0.20 '),
(89, 'TV', 0.616613, 3, ' $0.20 '),
(90, 'TV', 0.394316, 4, ' $0.20 '),
(91, 'TV', 0.30593, 5, ' $0.20 '),
(92, 'TV', 0.230685, 6, ' $0.20 '),
(93, 'Dishwasher', 0.0121337, 1, ' $0.20 '),
(94, 'Dishwasher', 0.0119098, 2, ' $0.20 '),
(95, 'Dishwasher', 0.011448, 3, ' $0.20 '),
(96, 'Dishwasher', 0.0113932, 4, ' $0.20 '),
(97, 'Dishwasher', 0.0112383, 5, ' $0.20 '),
(98, 'Dishwasher', 0.0110144, 6, ' $0.20 '),
(99, 'Computer', 0.2876, 1, ' $0.20 '),
(100, 'Computer', 0.224091, 2, ' $0.20 '),
(101, 'Computer', 0.17311, 3, ' $0.20 '),
(102, 'Computer', 0.123664, 4, ' $0.20 '),
(103, 'Computer', 0.0941942, 5, ' $0.20 '),
(104, 'Computer', 0.0737634, 6, ' $0.20 '),
(105, 'Dryer', 0.0680133, 1, ' $0.20 '),
(106, 'Dryer', 0.05626, 2, ' $0.20 '),
(107, 'Dryer', 0.0452138, 3, ' $0.20 '),
(108, 'Dryer', 0.0232628, 4, ' $0.20 '),
(109, 'Dryer', 0.021, 5, ' $0.20 '),
(110, 'Dryer', 0.00924667, 6, ' $0.20 ');

-- --------------------------------------------------------

--
-- Table structure for table `area_average`
--

CREATE TABLE `area_average` (
  `id` int(11) NOT NULL,
  `area` varchar(45) DEFAULT NULL,
  `average` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `area_average`
--

INSERT INTO `area_average` (`id`, `area`, `average`) VALUES
(37, 'BURWOOD', '12.9'),
(38, 'CANADA BAY', '13.4'),
(39, 'CANTERBURY-BANKSTOWN', '15.2'),
(40, 'CESSNOCK', '18.7'),
(41, 'CUMBERLAND', '13.3'),
(42, 'GEORGES RIVER', '14.8'),
(43, 'HORNSBY', '18.5'),
(44, 'HUNTERS HILL', '21.8'),
(45, 'INNER WEST', '11.7'),
(46, 'KU-RING-GAI', '22.2'),
(47, 'LAKE MACQUARIE', '17.0'),
(48, 'LANE COVE', '16.0'),
(49, 'MAITLAND', '18.1'),
(50, 'MOSMAN', '17.8'),
(51, 'MUSWELLBROOK', '21.4'),
(52, 'NEWCASTLE', '13.8'),
(53, 'NORTH SYDNEY', '11.6'),
(54, 'NORTHERN BEACHES', '15.9'),
(55, 'PARRAMATTA', '11.7'),
(56, 'PORT STEPHENS', '17.1'),
(57, 'RANDWICK', '12.8'),
(58, 'RYDE', '13.9'),
(59, 'SINGLETON', '23.0'),
(60, 'STRATHFIELD', '14.4'),
(61, 'SUTHERLAND', '19.1'),
(62, 'SYDNEY', '10.1'),
(63, 'UPPER HUNTER', '21.5'),
(64, 'WAVERLEY', '13.1'),
(65, 'WILLOUGHBY', '14.9'),
(66, 'WOOLLAHRA', '18.9');

-- --------------------------------------------------------

--
-- Table structure for table `providers`
--

CREATE TABLE `providers` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `plan` varchar(45) DEFAULT NULL,
  `annual_cost` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `providers`
--

INSERT INTO `providers` (`id`, `name`, `plan`, `annual_cost`) VALUES
(1, 'ReAmped Energy', 'ReAmped Handshake', '1419.41'),
(2, 'Energy Locals', 'Super Saver', '1427.99'),
(3, 'Origin Energy', 'Low Rate Plan', '1448.35'),
(4, 'EnergyAustralia', 'No Frills', '1452.2'),
(5, 'Simply Energy', 'Simply NRMA Plus', '1452.33'),
(6, 'Alinta Energy', 'Fair Deal 30', '1466.33'),
(7, 'Momentum Energy', 'SmilePower Flexi', '1469.2'),
(8, 'Red Energy', 'Living Energy Saver', '1483.61'),
(9, 'Powerdirect', 'Market Offer', '1497.08'),
(10, 'Future X Power', 'Flexi Saver', '1535.43'),
(11, 'AGL', 'Essentials Plus', '1536.61'),
(12, 'Powershop', 'Mega Pack (3 months’ power)', '1549.7'),
(13, 'Dodo Power & Gas', 'Market Offer', '1563'),
(14, 'Sumo Power', '27% pay on Time', '1577.2'),
(15, 'Click Energy', 'Click Garnet', '1603.04'),
(16, 'CovaU', 'Freedom', '1622.81'),
(17, '1st Energy', '1st Saver', '1635.76'),
(18, 'Diamond Energy', 'Market Offer', '1729.69'),
(19, 'Amaysim Energy', 'Electricity As You Go', '1800.1'),
(20, 'Commander', 'Market Offer', '1804.57'),
(21, 'Pooled Energy', 'Market Offer', '1906.7'),
(22, 'Sanctuary Energy', 'Retail Contract', '1920.15'),
(23, 'Mojo Power', 'Mojo Connect', '2052.06'),
(24, 'QEnergy', 'Home Your Way', '2445.19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appliences`
--
ALTER TABLE `appliences`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `area_average`
--
ALTER TABLE `area_average`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `providers`
--
ALTER TABLE `providers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appliences`
--
ALTER TABLE `appliences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;
--
-- AUTO_INCREMENT for table `area_average`
--
ALTER TABLE `area_average`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;
--
-- AUTO_INCREMENT for table `providers`
--
ALTER TABLE `providers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
