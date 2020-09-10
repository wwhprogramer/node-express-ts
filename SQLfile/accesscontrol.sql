/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50731
Source Host           : localhost:3306
Source Database       : accesscontrol

Target Server Type    : MYSQL
Target Server Version : 50731
File Encoding         : 65001

Date: 2020-09-10 17:11:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `menubar`
-- ----------------------------
DROP TABLE IF EXISTS `menubar`;
CREATE TABLE `menubar` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `parentId` bigint(20) DEFAULT NULL,
  `funUrl` varchar(50) DEFAULT NULL,
  `funId` varchar(50) DEFAULT NULL,
  `icon1` varchar(50) DEFAULT NULL,
  `icon2` varchar(50) DEFAULT NULL,
  `icon3` varchar(50) DEFAULT NULL,
  `operateType` varchar(10) NOT NULL,
  `isEnable` int(1) NOT NULL DEFAULT '0',
  `extend1` varchar(50) DEFAULT NULL,
  `extend2` varchar(50) DEFAULT NULL,
  `extend3` varchar(50) DEFAULT NULL,
  `classification` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menubar
-- ----------------------------
INSERT INTO `menubar` VALUES ('1', '0', '', 'string', '', '', '', '操作', '1', '', '', '', 'test');
INSERT INTO `menubar` VALUES ('2', '4', 'fun-url', 'fun-id', null, null, null, '操作', '1', null, null, null, 'child test');
INSERT INTO `menubar` VALUES ('3', '2', 'fun-url-3', null, null, null, null, '操作', '1', null, null, null, 'test-3');
INSERT INTO `menubar` VALUES ('4', '0', null, null, null, null, null, '操作', '1', null, null, null, 'test-4');
