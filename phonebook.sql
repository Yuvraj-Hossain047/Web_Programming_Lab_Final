-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 01, 2025 at 07:50 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phonebook`
--

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `contactId` int(11) NOT NULL,
  `ownerUserId` varchar(20) NOT NULL,
  `contactName` varchar(30) NOT NULL,
  `contactPhone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`contactId`, `ownerUserId`, `contactName`, `contactPhone`) VALUES
(9, '1', 'From 01', '74654654'),
(11, '3', 'From 3 ', '123456546'),
(12, '1', 'From 01 2nd', '456946984869'),
(13, '1', 'fsdfsd', 'fdgdfh'),
(14, '1', 'mansur', '0154848'),
(15, '1', 'Hum', '123456789'),
(17, '1', 'dgfgfsdg', '0123'),
(18, '1', 'Aa', '546546'),
(19, '1', 'z', '54656'),
(20, '1', 'aggdg', 'fsdfsf'),
(24, '2', 'gfdgs', '01712345678'),
(25, '2', 'fghhdf', '01846486464'),
(27, '2', 'fghhdf', '01846486464'),
(28, '2', 'fghhdf', '01846486464'),
(29, '2', 'fghhdf', '01846486464'),
(30, '2', 'fghhdf', '01846486464'),
(31, '2', 'fghhdf', '01846486464'),
(32, '2', 'fghhdf', '01846486464'),
(33, '2', 'fghhdf', '01846486464'),
(34, '2', 'fghhdf', '01846486464'),
(35, '2', 'fghhdf', '01846486464'),
(36, '2', 'fghhdf', '01846486464'),
(37, '2', 'fghhdf', '01846486464');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `userName` varchar(30) NOT NULL,
  `userPassword` varchar(30) NOT NULL,
  `userPhone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `userName`, `userPassword`, `userPhone`) VALUES
(1, 'Yuvraj', '12345', '0123456798'),
(2, 'User 2', '12345', '0123456798'),
(3, 'User 3', '12345', '0123456798');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`contactId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `contactId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
