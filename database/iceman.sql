-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主机： 127.0.0.1:3306
-- 生成日期： 2020-12-28 06:21:48
-- 服务器版本： 5.7.31
-- PHP 版本： 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `iceman`
--

-- --------------------------------------------------------

--
-- 表的结构 `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE IF NOT EXISTS `client` (
  `CusName` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `CusID` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `CusType` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `CusTel` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL,
  `CusAddr` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `CusCost` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`CusID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `client`
--

INSERT INTO `client` (`CusName`, `CusID`, `CusType`, `CusTel`, `CusAddr`, `CusCost`) VALUES
('Kris', '10001', '个人', '400840820', '翻斗大街翻斗花园二号楼1001室', '50'),
('Messi', '10002', '商店', '258622333', '翻斗大街翻斗花园西南商店', '1000'),
('Leonard', '10003', '超市', '747235878', '翻斗大街翻斗花园沃尔玛超市', '70'),
('Smith', '10004', '超市', '332432565', '翻斗大街翻斗花园家乐福超市', '700'),
('Jenny', '10005', '超市', '325457768', '翻斗大街翻斗花园人人乐超市', '66'),
('Bob', '20001', '个人', '323421233', '翻斗大街翻斗花园二号楼1006室', '2200'),
('Mary', '20003', '商店', '974367657', '翻斗大街翻斗花园丽湖商店', '2000'),
('Sona', '20004', '个人', '765767865', '翻斗大街翻斗花园二号楼1008室', '1000'),
('Ben', '20005', '个人', '232465445', '翻斗大街翻斗花园二号楼1009室', '120'),
('Steve', '30001', '超市', '454567652', '翻斗大街翻斗花园胖东来超市', '1500'),
('Alice', '30002', '超市', '353455345', '翻斗大街翻斗花园国光超市', '546'),
('Peter', '30003', '个人', '243534543', '翻斗大街翻斗花园二号楼1012室', '207'),
('Tony', '30004', '商店', '768786754', '翻斗大街翻斗花园南区超市', '1700'),
('Krits00', '1001', '个人', '400840820', '深圳市南山区第一街道xx小区', '50');

-- --------------------------------------------------------

--
-- 表的结构 `icewine`
--

DROP TABLE IF EXISTS `icewine`;
CREATE TABLE IF NOT EXISTS `icewine` (
  `wineId` int(10) NOT NULL,
  `wineName` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `wineType` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `wineOrigin` varchar(24) COLLATE utf8mb4_unicode_ci NOT NULL,
  `wineProductDate` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `winePurchasePrice` int(10) NOT NULL,
  `wineBasicSalePrice` int(10) NOT NULL,
  `wineCapacity` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `wineAlcoholDegree` int(10) NOT NULL,
  `stockAmount` int(10) DEFAULT NULL,
  `stockLocation` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stockStatus` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stockDate` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`wineId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `icewine`
--

INSERT INTO `icewine` (`wineId`, `wineName`, `wineType`, `wineOrigin`, `wineProductDate`, `winePurchasePrice`, `wineBasicSalePrice`, `wineCapacity`, `wineAlcoholDegree`, `stockAmount`, `stockLocation`, `stockStatus`, `stockDate`) VALUES
(1, '杜康', '白冰酒', '广东省汕头市', '20201020', 10, 20, '500ml', 12, 100, 'A01', '正常', '20201130'),
(2, '般若汤', '辣冰酒', '广东省汕头市', '20200814', 30, 60, '500ml', 10, 101, 'A02', '正常', '20201130'),
(3, '杯中物', '辣冰酒', '广东省汕头市', '20200611', 30, 60, '500ml', 10, 102, 'A03', '正常', '20201130'),
(4, '流霞', '辣冰酒', '广东省汕头市', '20200611', 30, 60, '500ml', 10, 103, 'A04', '正常', '20201130'),
(5, '霞液', '辣冰酒', '广东省汕头市', '20200611', 30, 60, '500ml', 10, 104, 'A05', '正常', '20201130'),
(6, '忘忧物', '红冰酒', '广东省汕头市', '20200814', 30, 60, '500ml', 10, 105, 'A06', '正常', '20201130'),
(7, '钓诗钩', '红冰酒', '广东省汕头市', '20200814', 30, 60, '500ml', 10, 106, 'A07', '正常', '20201130'),
(8, '扫愁帚', '红冰酒', '广东省汕头市', '20200814', 30, 60, '500ml', 10, 107, 'A08', '正常', '20201130'),
(9, '黄醅', '红冰酒', '广东省汕头市', '20200814', 30, 60, '500ml', 10, 108, 'A09', '正常', '20201130'),
(10, '香蚁', '白冰酒', '广东省汕头市', '20200814', 30, 60, '500ml', 10, 109, 'A10', '正常', '20201130'),
(11, '浮蚁', '白冰酒', '广东省汕头市', '20200814', 30, 60, '500ml', 10, 110, 'B01', '正常', '20201130'),
(12, '椒浆', '白冰酒', '江西省景德镇市', '20200611', 30, 60, '500ml', 10, 111, 'B02', '正常', '20201130'),
(13, '醇酎', '白冰酒', '江西省景德镇市', '20200611', 30, 60, '500ml', 10, 112, 'B03', '正常', '20201130'),
(14, '金波', '气泡冰酒', '江西省景德镇市', '20201020', 30, 60, '500ml', 12, 113, 'B04', '正常', '20201130'),
(15, '秬鬯', '白冰酒', '江西省景德镇市', '20201020', 10, 20, '500ml', 12, 114, 'B05', '正常', '20201130'),
(16, '白堕', '白冰酒', '江西省景德镇市', '20201020', 10, 20, '500ml', 12, 115, 'B06', '正常', '20201130'),
(17, '冻醪', '红冰酒', '江西省景德镇市', '20201020', 10, 20, '500ml', 12, 116, 'B07', '正常', '20201130'),
(18, '壶觞', '气泡冰酒', '江西省景德镇市', '20201020', 10, 20, '500ml', 12, 117, 'B08', '正常', '20201130'),
(19, '壶中物', '气泡冰酒', '江西省景德镇市', '20201020', 10, 20, '500ml', 12, 118, 'B09', '正常', '20201130'),
(20, '威代尔', '气泡冰酒', '江西省景德镇市', '20201020', 10, 20, '500ml', 12, 119, 'B10', '正常', '20201130'),
(21, '品丽珠', '气泡冰酒', '江西省景德镇市', '20201020', 10, 20, '500ml', 12, 0, 'C01', '库存不足', '20201130'),
(22, '雷司令', '红冰酒', '江西省景德镇市', '20201020', 10, 20, '500ml', 12, 41, 'C02', '正常', '20201130'),
(23, '琼瑶浆', '红冰酒', '江西省景德镇市', '20201020', 10, 20, '500ml', 12, 42, 'C03', '正常', '20201130'),
(24, '霞多丽', '红冰酒', '江西省景德镇市', '20201020', 10, 20, '500ml', 12, 43, 'C04', '正常', '20201130'),
(25, '梅乐', '红冰酒', '江西省景德镇市', '20201020', 8, 15, '450ml', 12, 44, 'C05', '正常', '20201130'),
(26, '施埃博', '红冰酒', '江西省景德镇市', '20200930', 8, 15, '450ml', 12, 45, 'C06', '正常', '20201129'),
(27, '穆思卡得', '辣冰酒', '江西省景德镇市', '20200930', 8, 15, '450ml', 13, 46, 'C07', '正常', '20201129'),
(28, '米勒', '辣冰酒', '江西省景德镇市', '20200930', 8, 15, '450ml', 13, 47, 'C08', '正常', '20201129'),
(29, '奥特加', '白冰酒', '江西省景德镇市', '20200930', 8, 15, '450ml', 13, 48, 'C09', '正常', '20201129'),
(30, '白比诺', '白冰酒', '福建省福州市', '20200930', 8, 15, '450ml', 13, 49, 'C10', '正常', '20201129'),
(31, '灰比诺', '白冰酒', '福建省福州市', '20200930', 8, 15, '450ml', 13, 50, 'D01', '正常', '20201129'),
(32, '五女山', '白冰酒', '福建省福州市', '20200930', 30, 60, '450ml', 13, 51, 'D02', '正常', '20201129'),
(33, '张裕', '白冰酒', '福建省福州市', '20200930', 30, 60, '450ml', 13, 52, 'D03', '正常', '20201129'),
(34, '莫高', '气泡冰酒', '福建省福州市', '20200930', 30, 60, '300ml', 13, 53, 'D04', '正常', '20201129'),
(35, '维格那', '气泡冰酒', '福建省福州市', '20200930', 30, 60, '300ml', 13, 54, 'D05', '正常', '20201129'),
(36, '王城', '气泡冰酒', '福建省福州市', '20200930', 30, 60, '300ml', 13, 320, 'D06', '正常', '20201129'),
(37, '桓龙湖', '红冰酒', '福建省福州市', '20200930', 30, 60, '300ml', 17, 321, 'D07', '正常', '20201129'),
(38, '黑塔丽瓦娜', '红冰酒', '福建省福州市', '20200930', 30, 60, '300ml', 17, 322, 'D08', '正常', '20201129'),
(39, '路易', '红冰酒', '福建省福州市', '20200930', 30, 60, '300ml', 17, 323, 'D09', '正常', '20201129'),
(40, '罗曼蒂克', '红冰酒', '福建省福州市', '20200930', 30, 60, '300ml', 17, 324, 'D10', '正常', '20201129'),
(41, '柏雅', '红冰酒', '山东省青岛市', '20200930', 30, 60, '300ml', 17, 325, 'E01', '正常', '20201129'),
(42, '麦卡伦', '红冰酒', '山东省青岛市', '20200815', 45, 99, '300ml', 17, 326, 'E02', '正常', '20201129'),
(43, '雪莉', '白冰酒', '山东省青岛市', '20200815', 45, 99, '300ml', 17, 327, 'E03', '正常', '20201129'),
(44, '1824大师', '白冰酒', '山东省青岛市', '20200815', 45, 99, '300ml', 17, 328, 'E04', '正常', '20201129'),
(45, '红诺雪', '辣冰酒', '山东省青岛市', '20200815', 45, 99, '300ml', 17, 0, 'E05', '库存不足', '20201129'),
(46, '白诺雪', '白冰酒', '山东省青岛市', '20200815', 45, 99, '300ml', 17, 330, 'E06', '正常', '20201129'),
(47, '黑诺雪', '白冰酒', '山东省青岛市', '20200815', 45, 99, '300ml', 17, 331, 'E07', '正常', '20201129'),
(48, '碧诺雪', '白冰酒', '山东省青岛市', '20200815', 45, 99, '300ml', 17, 332, 'E08', '正常', '20201129'),
(49, '可乐桶', '白冰酒', '山东省青岛市', '20200815', 45, 99, '300ml', 17, 333, 'E09', '正常', '20201129'),
(50, '科罗微', '白冰酒', '山东省青岛市', '20200815', 45, 99, '300ml', 17, 334, 'E10', '正常', '20201129');

-- --------------------------------------------------------

--
-- 表的结构 `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `ordernumber` int(10) NOT NULL,
  `orderdate` date DEFAULT NULL,
  `orderstatus` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `CusType` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CusId` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `wineId` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `commodityinfo` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deliveryjudge` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `orderamount` float DEFAULT NULL,
  `deliveryLocation` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deliverytime` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deliveryamount` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`ordernumber`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `orders`
--

INSERT INTO `orders` (`ordernumber`, `orderdate`, `orderstatus`, `CusType`, `CusId`, `wineId`, `commodityinfo`, `deliveryjudge`, `orderamount`, `deliveryLocation`, `deliverytime`, `deliveryamount`) VALUES
(1, '2020-12-01', '已完成', '个人', '10001', '00010', '香蚁', '是', 50, '深圳市南山区第一街道xx小区', '20201201', '10'),
(2, '2020-12-01', '已完成', '商店', '10002', '11', '浮蚁', '是', 1000, '翻斗大街翻斗花园西南商店', '20201201', '20'),
(3, '2020-12-01', '已完成', '超市', '10003', '12', '椒浆', '否', 70, '', '', ''),
(4, '2020-12-02', '已完成', '超市', '10004', '13', '醇酎', '是', 700, '翻斗大街翻斗花园家乐福超市', '20201202', '40'),
(5, '2020-12-02', '已完成', '超市', '10005', '14', '金波', '否', 66, '', '', ''),
(6, '2020-12-02', '已完成', '个人', '20001', '15', '秬鬯', '是', 2200, '翻斗大街翻斗花园二号楼1006室', '20201202', '60'),
(7, '2020-12-02', '已完成', '商店', '20003', '16', '白堕', '否', 2000, '', '', ''),
(8, '2020-12-02', '已完成', '个人', '20004', '17', '冻醪', '是', 1000, '翻斗大街翻斗花园二号楼1008室', '20201203', '80'),
(9, '2020-12-02', '已完成', '个人', '20005', '18', '壶觞', '是', 120, '翻斗大街翻斗花园二号楼1009室', '20201203', '90'),
(10, '2020-12-02', '已完成', '超市', '30001', '19', '壶中物', '是', 1500, '翻斗大街翻斗花园胖东来超市', '20201203', '100'),
(11, '2020-12-03', '已完成', '超市', '30002', '20', '威代尔', '否', 546, '', '', ''),
(12, '2020-12-03', '已完成', '个人', '30003', '21', '品丽珠', '是', 207, '翻斗大街翻斗花园二号楼1012室', '20201202', '30'),
(13, '2020-12-03', '已完成', '商店', '30004', '22', '雷司令', '是', 1700, '翻斗大街翻斗花园南区超市', '20201203', '25'),
(14, '2020-12-03', '已完成', '商店', '30004', '23', '琼瑶浆', '否', 450, '', '', ''),
(15, '2020-12-03', '已完成', '商店', '30004', '24', '霞多丽', '否', 777, '', '', ''),
(16, '2020-12-03', '进行中', '超市', '10004', '25', '梅乐', '是', 888, '翻斗大街翻斗花园家乐福超市', '20201202', '50'),
(17, '2020-12-03', '进行中', '超市', '10005', '26', '施埃博', '否', 2000, '', '', ''),
(18, '2020-12-03', '进行中', '个人', '20001', '27', '穆思卡得', '是', 4010, '翻斗大街翻斗花园二号楼1006室', '20201203', '33'),
(19, '2020-12-03', '进行中', '商店', '20003', '28', '米勒', '否', 780, '', '', ''),
(20, '2020-12-04', '进行中', '个人', '20004', '29', '奥特加', '是', 69, '翻斗大街翻斗花园二号楼1008室', '20201203', '66');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
