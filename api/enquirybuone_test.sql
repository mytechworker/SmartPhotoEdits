-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 10, 2021 at 05:34 PM
-- Server version: 8.0.18
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbform`
--

-- --------------------------------------------------------

--
-- Table structure for table `enquirybuone_test`
--

CREATE TABLE `enquirybuone_test` (
  `Id` int(11) NOT NULL,
  `Sitename` varchar(100) DEFAULT NULL,
  `Salutation` varchar(5) DEFAULT NULL,
  `Firstname` varchar(60) DEFAULT NULL,
  `Lastname` varchar(60) DEFAULT NULL,
  `Email` varchar(60) DEFAULT NULL,
  `Telephone` varchar(50) DEFAULT NULL,
  `Company` varchar(100) DEFAULT NULL,
  `Company_website` varchar(100) DEFAULT NULL,
  `City` varchar(50) DEFAULT NULL,
  `Country` varchar(10) DEFAULT NULL,
  `contact_key` varchar(10) DEFAULT NULL,
  `contact_value` varchar(10) DEFAULT NULL,
  `Method_of_contact` varchar(50) DEFAULT NULL,
  `Form_name` varchar(60) DEFAULT NULL,
  `Description_key` varchar(10) DEFAULT NULL,
  `Description_of_requirements` text,
  `Stage_key` varchar(10) DEFAULT NULL,
  `Stage_of_outsourcing` varchar(50) DEFAULT NULL,
  `Addinfo_key` varchar(10) DEFAULT NULL,
  `Add_Info` text,
  `Service` varchar(50) DEFAULT NULL,
  `Fullurl` varchar(255) DEFAULT NULL,
  `Weekno` varchar(10) DEFAULT NULL,
  `Subservice` varchar(50) DEFAULT NULL,
  `Key1` varchar(50) DEFAULT NULL,
  `Value1` text,
  `Key2` varchar(50) DEFAULT NULL,
  `Value2` text,
  `Key3` varchar(50) DEFAULT NULL,
  `Value3` text,
  `Key4` varchar(50) DEFAULT NULL,
  `Value4` text,
  `Key5` varchar(50) DEFAULT NULL,
  `Value5` text,
  `Key6` varchar(50) DEFAULT NULL,
  `Value6` text,
  `Key7` varchar(50) DEFAULT NULL,
  `Value7` text,
  `Key8` varchar(50) DEFAULT NULL,
  `Value8` text,
  `Key9` varchar(50) DEFAULT NULL,
  `Value9` text,
  `Key10` varchar(50) DEFAULT NULL,
  `Value10` text,
  `Key11` varchar(50) DEFAULT NULL,
  `Value11` text,
  `Key12` varchar(50) DEFAULT NULL,
  `Value12` text,
  `Key13` varchar(50) DEFAULT NULL,
  `Value13` text,
  `Key14` varchar(50) DEFAULT NULL,
  `Value14` text,
  `Key15` varchar(50) DEFAULT NULL,
  `Value15` text,
  `Key16` varchar(50) DEFAULT NULL,
  `Value16` varchar(100) DEFAULT NULL,
  `Key17` varchar(50) DEFAULT NULL,
  `Value17` text,
  `Key18` varchar(50) DEFAULT NULL,
  `Value18` text,
  `Other_key` varchar(10) DEFAULT NULL,
  `Other` varchar(150) DEFAULT NULL,
  `Attachment_key` varchar(10) DEFAULT NULL,
  `Attachment` varchar(255) DEFAULT NULL,
  `IP_address` varchar(50) DEFAULT NULL,
  `Useragent` varchar(100) DEFAULT NULL,
  `Dateofcreated` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `nablerstatsvistorid` varchar(100) DEFAULT NULL,
  `statsid` varchar(100) DEFAULT NULL,
  `search_engine` varchar(50) DEFAULT NULL,
  `keywords` text,
  `v_city` varchar(255) NOT NULL,
  `v_country` varchar(255) NOT NULL,
  `v_timezone` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- Indexes for dumped tables
--

--
-- Indexes for table `enquirybuone_test`
--
ALTER TABLE `enquirybuone_test`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Id` (`Id`),
  ADD KEY `Email` (`Email`,`Service`,`Dateofcreated`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `enquirybuone_test`
--
ALTER TABLE `enquirybuone_test`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
