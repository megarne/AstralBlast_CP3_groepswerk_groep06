-- phpMyAdmin SQL Dump
-- version 4.4.1.1
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Nov 25, 2015 at 11:45 AM
-- Server version: 5.5.42
-- PHP Version: 5.6.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `cp3_astralBlast`
--

-- --------------------------------------------------------

--
-- Table structure for table `astral_scores`
--

CREATE TABLE `astral_scores` (
  `id` int(11) NOT NULL,
  `score` int(255) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `astral_scores`
--

INSERT INTO `astral_scores` (`id`, `score`, `name`, `time_stamp`) VALUES
(1, 13, 'hans', '2015-11-25 10:34:55'),
(2, 44, 'frans', '2015-11-25 10:34:55'),
(3, 17, 'hans', '2015-11-25 10:34:55'),
(4, 44, 'frans', '2015-11-25 10:34:55'),
(5, 17, 'hans', '2015-11-25 10:34:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `astral_scores`
--
ALTER TABLE `astral_scores`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `astral_scores`
--
ALTER TABLE `astral_scores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
