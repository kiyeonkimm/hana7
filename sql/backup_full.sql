-- MySQL dump 10.13  Distrib 9.3.0, for macos15.2 (arm64)
--
-- Host: 127.0.0.1    Database: testdb
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Dept`
--

DROP TABLE IF EXISTS `Dept`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Dept` (
  `id` tinyint unsigned NOT NULL AUTO_INCREMENT,
  `pid` tinyint unsigned NOT NULL DEFAULT '0' COMMENT '상위부서id',
  `dname` varchar(31) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Dept`
--

LOCK TABLES `Dept` WRITE;
/*!40000 ALTER TABLE `Dept` DISABLE KEYS */;
INSERT INTO `Dept` VALUES (1,0,'영업부'),(2,0,'개발부'),(3,1,'영업1팀'),(4,1,'영업2팀'),(5,1,'영업3팀'),(6,2,'서버팀'),(7,2,'클라이언트팀'),(8,6,'인프라셀'),(9,6,'DB셀'),(10,7,'모바일셀');
/*!40000 ALTER TABLE `Dept` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Emp`
--

DROP TABLE IF EXISTS `Emp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Emp` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ename` varchar(31) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `dept` tinyint unsigned NOT NULL,
  `salary` int NOT NULL DEFAULT '0',
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `dept` (`dept`),
  KEY `idx_Emp_email` (`email`),
  KEY `functional_index` ((substring_index(`email`,_utf8mb4'@',-(1)))),
  KEY `functional_index_2` ((substr(`mobile`,8,4))),
  CONSTRAINT `emp_ibfk_1` FOREIGN KEY (`dept`) REFERENCES `Dept` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=253 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Emp`
--

LOCK TABLES `Emp` WRITE;
/*!40000 ALTER TABLE `Emp` DISABLE KEYS */;
INSERT INTO `Emp` VALUES (2,'유세혜',4,300,'mail2@gmail.com','01000000002'),(3,'원사아',4,100,'mail3@gmail.com','01000000003'),(4,'김태혜',5,700,'mail4@gmail.com','01000000004'),(5,'지세국',7,400,'mail5@gmail.com','01000000005'),(6,'최가국',4,800,'mail6@gmail.com','01000000006'),(7,'배파나',1,800,'mail7@gmail.com','01000000007'),(8,'원성결',2,200,'mail8@gmail.com','01000000008'),(9,'전바찬',6,900,'mail9@gmail.com','01000000009'),(10,'지윤희',5,500,'mail10@gmail.com','01000000010'),(11,'전차가',1,900,'mail11@gmail.com','01000000011'),(12,'지호하',3,800,'mail12@gmail.com','01000000012'),(13,'최종라',5,300,'mail13@gmail.com','01000000013'),(14,'마마순',1,700,'mail14@gmail.com','01000000014'),(15,'원자파',7,200,'mail15@gmail.com','01000000015'),(16,'이결세',7,700,'mail16@gmail.com','01000000016'),(17,'원호신',2,600,'mail17@gmail.com','01000000017'),(18,'전국찬',3,904,'mail18@gmail.com','01000000018'),(19,'방성찬',3,800,'mail19@gmail.com','01000000019'),(20,'최희결',5,700,'mail20@gmail.com','01000000020'),(21,'지찬파',2,600,'mail21@gmail.com','01000000021'),(22,'최파지',4,100,'mail22@gmail.com','01000000022'),(23,'마다윤',4,300,'mail23@gmail.com','01000000023'),(24,'이윤파',6,600,'mail24@gmail.com','01000000024'),(25,'전다윤',3,800,'mail25@gmail.com','01000000025'),(26,'김나나',1,800,'mail26@gmail.com','01000000026'),(27,'원호순',7,600,'mail27@gmail.com','01000000027'),(28,'조국국',7,400,'mail28@gmail.com','01000000028'),(29,'이윤바',1,300,'mail29@gmail.com','01000000029'),(30,'김바순',2,800,'mail30@gmail.com','01000000030'),(31,'방윤윤',6,600,'mail31@gmail.com','01000000031'),(32,'방호지',4,900,'mail32@gmail.com','01000000032'),(33,'최마호',1,500,'mail33@gmail.com','01000000033'),(34,'전아가',3,600,'mail34@gmail.com','01000000034'),(35,'원성태',6,600,'mail35@gmail.com','01000000035'),(36,'마다라',3,900,'mail36@gmail.com','01000000036'),(37,'지라파',3,200,'mail37@gmail.com','01000000037'),(38,'김자나',3,300,'mail38@gmail.com','01000000038'),(39,'전가순',2,400,'mail39@gmail.com','01000000039'),(40,'유호가',6,400,'mail40@gmail.com','01000000040'),(41,'방사자',6,400,'mail41@gmail.com','01000000041'),(42,'마윤결',2,700,'mail42@gmail.com','01000000042'),(43,'마마차',1,800,'mail43@gmail.com','01000000043'),(44,'이찬가',4,100,'mail44@gmail.com','01000000044'),(45,'유태파',5,500,'mail45@gmail.com','01000000045'),(46,'유호다',4,200,'mail46@gmail.com','01000000046'),(47,'이신희',6,907,'mail47@gmail.com','01000000047'),(48,'천마라',7,200,'mail48@gmail.com','01000000048'),(49,'이순아',4,600,'mail49@gmail.com','01000000049'),(50,'최찬자',7,200,'mail50@gmail.com','01000000050'),(51,'김바가',4,500,'mail51@gmail.com','01000000051'),(52,'원가국',6,600,'mail52@gmail.com','01000000052'),(53,'방가다',7,100,'mail53@gmail.com','01000000053'),(54,'전순차',6,700,'mail54@gmail.com','01000000054'),(55,'조종차',5,600,'mail55@gmail.com','01000000055'),(56,'전호라',3,200,'mail56@gmail.com','01000000056'),(57,'천호윤',4,500,'mail57@gmail.com','01000000057'),(58,'마신혜',1,300,'mail58@gmail.com','01000000058'),(59,'전세국',2,600,'mail59@gmail.com','01000000059'),(60,'지호태',2,300,'mail60@gmail.com','01000000060'),(61,'유혜태',4,700,'mail61@gmail.com','01000000061'),(62,'천세찬',4,800,'mail62@gmail.com','01000000062'),(63,'지바혜',3,200,'mail63@gmail.com','01000000063'),(64,'천가차',1,800,'mail64@gmail.com','01000000064'),(65,'배세사',2,800,'mail65@gmail.com','01000000065'),(66,'방나하',6,200,'mail66@gmail.com','01000000066'),(67,'최호태',1,800,'mail67@gmail.com','01000000067'),(68,'마가혜',3,100,'mail68@gmail.com','01000000068'),(69,'김성바',6,200,'mail69@gmail.com','01000000069'),(70,'방혜국',5,600,'mail70@gmail.com','01000000070'),(71,'이파파',4,300,'mail71@gmail.com','01000000071'),(72,'지윤혜',7,100,'mail72@gmail.com','01000000072'),(73,'박찬종',6,600,'mail73@gmail.com','01000000073'),(74,'방혜윤',3,300,'mail74@gmail.com','01000000074'),(75,'전호바',1,600,'mail75@gmail.com','01000000075'),(76,'유희마',1,700,'mail76@gmail.com','01000000076'),(77,'천성혜',7,500,'mail77@gmail.com','01000000077'),(78,'김나라',3,800,'mail78@gmail.com','01000000078'),(79,'최혜성',1,700,'mail79@gmail.com','01000000079'),(80,'지종라',4,905,'mail80@gmail.com','01000000080'),(81,'이바희',7,800,'mail81@gmail.com','01000000081'),(82,'최은가',4,800,'mail82@gmail.com','01000000082'),(83,'배자호',5,500,'mail83@gmail.com','01000000083'),(84,'배사파',7,500,'mail84@gmail.com','01000000084'),(85,'마성다',2,400,'mail85@gmail.com','01000000085'),(86,'최국세',3,600,'mail86@gmail.com','01000000086'),(87,'유다지',4,600,'mail87@gmail.com','01000000087'),(88,'천결신',4,400,'mail88@gmail.com','01000000088'),(89,'박태사',7,300,'mail89@gmail.com','01000000089'),(90,'원파가',7,900,'mail90@gmail.com','01000000090'),(91,'마순차',7,300,'mail91@gmail.com','01000000091'),(92,'지호희',6,700,'mail92@gmail.com','01000000092'),(93,'최가국',6,800,'mail93@gmail.com','01000000093'),(94,'마성나',1,200,'mail94@gmail.com','01000000094'),(95,'조하마',4,700,'mail95@gmail.com','01000000095'),(96,'원바가',3,300,'mail96@gmail.com','01000000096'),(97,'최신세',2,903,'mail97@gmail.com','01000000097'),(98,'김은다',5,900,'mail98@gmail.com','01000000098'),(99,'천라국',5,500,'mail99@gmail.com','01000000099'),(100,'원신국',1,200,'mail100@gmail.com','01000000100'),(101,'방국윤',5,300,'mail101@gmail.com','01000000101'),(102,'박세찬',4,600,'mail102@gmail.com','01000000102'),(103,'최종다',4,500,'mail103@gmail.com','01000000103'),(104,'이신찬',4,900,'mail104@gmail.com','01000000104'),(105,'원종마',6,900,'mail105@gmail.com','01000000105'),(106,'최신호',6,200,'mail106@gmail.com','01000000106'),(107,'지차찬',3,100,'mail107@gmail.com','01000000107'),(108,'이나종',1,100,'mail108@gmail.com','01000000108'),(109,'김결나',6,500,'mail109@gmail.com','01000000109'),(110,'조파호',3,600,'mail110@gmail.com','01000000110'),(111,'유신찬',5,200,'mail111@gmail.com','01000000111'),(112,'원세태',1,200,'mail112@gmail.com','01000000112'),(113,'방호혜',5,800,'mail113@gmail.com','01000000113'),(114,'유마자',7,200,'mail114@gmail.com','01000000114'),(115,'최순신',2,900,'mail115@gmail.com','01000000115'),(116,'조윤혜',7,100,'mail116@gmail.com','01000000116'),(117,'조호호',3,400,'mail117@gmail.com','01000000117'),(118,'마세사',3,900,'mail118@gmail.com','01000000118'),(119,'방결희',1,600,'mail119@gmail.com','01000000119'),(120,'지국혜',1,300,'mail120@gmail.com','01000000120'),(121,'박세결',3,100,'mail121@gmail.com','01000000121'),(122,'조지혜',4,800,'mail122@gmail.com','01000000122'),(123,'방은희',7,800,'mail123@gmail.com','01000000123'),(124,'이성가',7,900,'mail124@gmail.com','01000000124'),(125,'원지신',5,300,'mail125@gmail.com','01000000125'),(126,'천윤아',3,600,'mail126@gmail.com','01000000126'),(127,'원순지',1,400,'mail127@gmail.com','01000000127'),(128,'이윤바',7,908,'mail128@gmail.com','01000000128'),(129,'김신호',6,300,'mail129@gmail.com','01000000129'),(130,'원혜호',2,600,'mail130@gmail.com','01000000130'),(131,'천윤사',2,800,'mail131@gmail.com','01000000131'),(132,'천희가',3,600,'mail132@gmail.com','01000000132'),(133,'원결바',5,906,'mail133@gmail.com','01000000133'),(134,'마성호',4,100,'mail134@gmail.com','01000000134'),(135,'이성다',3,800,'mail135@gmail.com','01000000135'),(136,'조사자',5,800,'mail136@gmail.com','01000000136'),(137,'천찬혜',3,400,'mail137@gmail.com','01000000137'),(138,'전지사',6,900,'mail138@gmail.com','01000000138'),(139,'방자세',2,800,'mail139@gmail.com','01000000139'),(140,'지아마',7,700,'mail140@gmail.com','01000000140'),(141,'김찬마',2,500,'mail141@gmail.com','01000000141'),(142,'방가사',7,500,'mail142@gmail.com','01000000142'),(143,'배아순',7,400,'mail143@gmail.com','01000000143'),(144,'최호희',6,200,'mail144@gmail.com','01000000144'),(145,'최혜혜',4,400,'mail145@gmail.com','01000000145'),(146,'유태차',3,200,'mail146@gmail.com','01000000146'),(147,'원국은',1,700,'mail147@gmail.com','01000000147'),(148,'조혜은',7,400,'mail148@gmail.com','01000000148'),(149,'조가마',2,200,'mail149@gmail.com','01000000149'),(150,'김찬라',7,300,'mail150@gmail.com','01000000150'),(151,'최신세',2,900,'mail151@gmail.com','01000000151'),(152,'박성종',1,902,'mail152@gmail.com','01000000152'),(153,'지나국',6,600,'mail153@gmail.com','01000000153'),(154,'마파결',1,500,'mail154@gmail.com','01000000154'),(155,'조태국',5,200,'mail155@gmail.com','01000000155'),(156,'방나차',3,600,'mail156@gmail.com','01000000156'),(157,'김지희',3,500,'mail157@gmail.com','01000000157'),(158,'유나순',5,100,'mail158@gmail.com','01000000158'),(159,'조윤호',6,100,'mail159@gmail.com','01000000159'),(160,'배다결',7,200,'mail160@gmail.com','01000000160'),(161,'배희호',1,500,'mail161@gmail.com','01000000161'),(162,'방호성',4,400,'mail162@gmail.com','01000000162'),(163,'김세은',3,900,'mail163@gmail.com','01000000163'),(164,'최성라',4,800,'mail164@gmail.com','01000000164'),(165,'마신신',1,200,'mail165@gmail.com','01000000165'),(166,'유윤사',2,800,'mail166@gmail.com','01000000166'),(167,'전파자',3,200,'mail167@gmail.com','01000000167'),(168,'박국다',3,300,'mail168@gmail.com','01000000168'),(169,'김다바',5,200,'mail169@gmail.com','01000000169'),(170,'원호신',6,700,'mail170@gmail.com','01000000170'),(171,'김호파',5,500,'mail171@gmail.com','01000000171'),(172,'방나자',2,900,'mail172@gmail.com','01000000172'),(173,'박세자',4,300,'mail173@gmail.com','01000000173'),(174,'원결바',4,500,'mail174@gmail.com','01000000174'),(175,'김태신',5,300,'mail175@gmail.com','01000000175'),(176,'최신신',2,700,'mail176@gmail.com','01000000176'),(177,'배가하',5,300,'mail177@gmail.com','01000000177'),(178,'지나다',2,200,'mail178@gmail.com','01000000178'),(179,'박사파',7,500,'mail179@gmail.com','01000000179'),(180,'천신아',4,300,'mail180@gmail.com','01000000180'),(181,'이가세',1,900,'mail181@gmail.com','01000000181'),(182,'방신다',4,100,'mail182@gmail.com','01000000182'),(183,'방태가',6,700,'mail183@gmail.com','01000000183'),(184,'박하아',7,500,'mail184@gmail.com','01000000184'),(185,'천성가',7,700,'mail185@gmail.com','01000000185'),(186,'이호라',3,400,'mail186@gmail.com','01000000186'),(187,'천다종',1,600,'mail187@gmail.com','01000000187'),(188,'이하결',7,700,'mail188@gmail.com','01000000188'),(189,'이은호',7,400,'mail189@gmail.com','01000000189'),(190,'이성다',3,800,'mail190@gmail.com','01000000190'),(191,'이신신',1,200,'mail191@gmail.com','01000000191'),(192,'마세가',2,100,'mail192@gmail.com','01000000192'),(193,'원세순',7,700,'mail193@gmail.com','01000000193'),(194,'원윤가',1,600,'mail194@gmail.com','01000000194'),(195,'김세윤',6,900,'mail195@gmail.com','01000000195'),(196,'최찬라',1,600,'mail196@gmail.com','01000000196'),(197,'유호윤',7,400,'mail197@gmail.com','01000000197'),(198,'박차호',5,700,'mail198@gmail.com','01000000198'),(199,'마바순',2,800,'mail199@gmail.com','01000000199'),(200,'방국가',1,200,'mail200@gmail.com','01000000200'),(201,'최세마',1,300,'mail201@gmail.com','01000000201'),(202,'조라종',6,500,'mail202@gmail.com','01000000202'),(203,'이지마',4,700,'mail203@gmail.com','01000000203'),(204,'김신호',6,300,'mail204@gmail.com','01000000204'),(205,'김은다',6,200,'mail205@gmail.com','01000000205'),(206,'마세혜',7,700,'mail206@gmail.com','01000000206'),(207,'김바순',1,200,'mail207@gmail.com','01000000207'),(208,'원순세',5,400,'mail208@gmail.com','01000000208'),(209,'원마종',6,600,'mail209@gmail.com','01000000209'),(210,'마사혜',2,200,'mail210@gmail.com','01000000210'),(211,'박나신',5,300,'mail211@gmail.com','01000000211'),(212,'전호사',6,100,'mail212@gmail.com','01000000212'),(213,'지지호',2,400,'mail213@gmail.com','01000000213'),(214,'천혜파',2,900,'mail214@gmail.com','01000000214'),(215,'지사세',6,700,'mail215@gmail.com','01000000215'),(216,'방나태',6,100,'mail216@gmail.com','01000000216'),(217,'김지하',6,400,'mail217@gmail.com','01000000217'),(218,'지찬태',3,300,'mail218@gmail.com','01000000218'),(219,'조사나',4,800,'mail219@gmail.com','01000000219'),(220,'지차순',6,800,'mail220@gmail.com','01000000220'),(221,'지희태',3,300,'mail221@gmail.com','01000000221'),(222,'이희나',5,800,'mail222@gmail.com','01000000222'),(223,'배신마',7,900,'mail223@gmail.com','01000000223'),(224,'배나희',3,900,'mail224@gmail.com','01000000224'),(225,'마아세',4,800,'mail225@gmail.com','01000000225'),(226,'전바신',2,900,'mail226@gmail.com','01000000226'),(227,'박희윤',1,200,'mail227@gmail.com','01000000227'),(228,'천결호',1,100,'mail228@gmail.com','01000000228'),(229,'마사혜',2,200,'mail229@gmail.com','01000000229'),(230,'최종바',6,300,'mail230@gmail.com','01000000230'),(231,'원파가',1,200,'mail231@gmail.com','01000000231'),(232,'지희결',5,200,'mail232@gmail.com','01000000232'),(233,'김자마',6,200,'mail233@gmail.com','01000000233'),(234,'방성세',1,900,'mail234@gmail.com','01000000234'),(235,'마바성',6,600,'mail235@gmail.com','01000000235'),(236,'천마마',2,200,'mail236@gmail.com','01000000236'),(237,'최가세',6,100,'mail237@gmail.com','01000000237'),(238,'김파희',3,200,'mail238@gmail.com','01000000238'),(239,'마찬아',5,900,'mail239@gmail.com','01000000239'),(240,'김세가',1,200,'mail240@gmail.com','01000000240'),(241,'전차나',2,700,'mail241@gmail.com','01000000241'),(242,'유희국',2,100,'mail242@gmail.com','01000000242'),(243,'전희마',1,800,'mail243@gmail.com','01000000243'),(244,'마호차',3,200,'mail244@gmail.com','01000000244'),(245,'배태바',5,600,'mail245@gmail.com','01000000245'),(246,'배나희',4,300,'mail246@gmail.com','01000000246'),(247,'유은종',6,300,'mail247@gmail.com','01000000247'),(248,'원세마',6,300,'mail248@gmail.com','01000000248'),(249,'배마가',4,100,'mail249@gmail.com','01000000249'),(250,'유결호',1,700,'mail250@gmail.com','01000000250'),(251,'지태윤',4,100,'mail251@gmail.com','01000000251'),(252,'배호가',7,600,'mail252@gmail.com','01000000252');
/*!40000 ALTER TABLE `Emp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EmpTest`
--

DROP TABLE IF EXISTS `EmpTest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `EmpTest` (
  `id` int unsigned NOT NULL DEFAULT '0',
  `ename` varchar(31) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `dept` tinyint unsigned NOT NULL,
  `salary` int NOT NULL DEFAULT '0',
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
/*!50100 PARTITION BY RANGE (`id`)
(PARTITION p1 VALUES LESS THAN (100) ENGINE = InnoDB,
 PARTITION p3 VALUES LESS THAN MAXVALUE ENGINE = InnoDB) */;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EmpTest`
--

LOCK TABLES `EmpTest` WRITE;
/*!40000 ALTER TABLE `EmpTest` DISABLE KEYS */;
INSERT INTO `EmpTest` VALUES (2,'유세혜',4,300,'mail2@gmail.com','01000000002'),(3,'원사아',4,100,'mail3@gmail.com','01000000003'),(4,'김태혜',5,700,'mail4@gmail.com','01000000004'),(5,'지세국',7,400,'mail5@gmail.com','01000000005'),(6,'최가국',4,800,'mail6@gmail.com','01000000006'),(7,'배파나',1,800,'mail7@gmail.com','01000000007'),(8,'원성결',2,200,'mail8@gmail.com','01000000008'),(9,'전바찬',6,900,'mail9@gmail.com','01000000009'),(10,'지윤희',5,500,'mail10@gmail.com','01000000010'),(11,'전차가',1,900,'mail11@gmail.com','01000000011'),(12,'지호하',3,800,'mail12@gmail.com','01000000012'),(13,'최종라',5,300,'mail13@gmail.com','01000000013'),(14,'마마순',1,700,'mail14@gmail.com','01000000014'),(15,'원자파',7,200,'mail15@gmail.com','01000000015'),(16,'이결세',7,700,'mail16@gmail.com','01000000016'),(17,'원호신',2,600,'mail17@gmail.com','01000000017'),(18,'전국찬',3,904,'mail18@gmail.com','01000000018'),(19,'방성찬',3,800,'mail19@gmail.com','01000000019'),(20,'최희결',5,700,'mail20@gmail.com','01000000020'),(21,'지찬파',2,600,'mail21@gmail.com','01000000021'),(22,'최파지',4,100,'mail22@gmail.com','01000000022'),(23,'마다윤',4,300,'mail23@gmail.com','01000000023'),(24,'이윤파',6,600,'mail24@gmail.com','01000000024'),(25,'전다윤',3,800,'mail25@gmail.com','01000000025'),(26,'김나나',1,800,'mail26@gmail.com','01000000026'),(27,'원호순',7,600,'mail27@gmail.com','01000000027'),(28,'조국국',7,400,'mail28@gmail.com','01000000028'),(29,'이윤바',1,300,'mail29@gmail.com','01000000029'),(30,'김바순',2,800,'mail30@gmail.com','01000000030'),(31,'방윤윤',6,600,'mail31@gmail.com','01000000031'),(32,'방호지',4,900,'mail32@gmail.com','01000000032'),(33,'최마호',1,500,'mail33@gmail.com','01000000033'),(34,'전아가',3,600,'mail34@gmail.com','01000000034'),(35,'원성태',6,600,'mail35@gmail.com','01000000035'),(36,'마다라',3,900,'mail36@gmail.com','01000000036'),(37,'지라파',3,200,'mail37@gmail.com','01000000037'),(38,'김자나',3,300,'mail38@gmail.com','01000000038'),(39,'전가순',2,400,'mail39@gmail.com','01000000039'),(40,'유호가',6,400,'mail40@gmail.com','01000000040'),(41,'방사자',6,400,'mail41@gmail.com','01000000041'),(42,'마윤결',2,700,'mail42@gmail.com','01000000042'),(43,'마마차',1,800,'mail43@gmail.com','01000000043'),(44,'이찬가',4,100,'mail44@gmail.com','01000000044'),(45,'유태파',5,500,'mail45@gmail.com','01000000045'),(46,'유호다',4,200,'mail46@gmail.com','01000000046'),(47,'이신희',6,907,'mail47@gmail.com','01000000047'),(48,'천마라',7,200,'mail48@gmail.com','01000000048'),(49,'이순아',4,600,'mail49@gmail.com','01000000049'),(50,'최찬자',7,200,'mail50@gmail.com','01000000050'),(51,'김바가',4,500,'mail51@gmail.com','01000000051'),(52,'원가국',6,600,'mail52@gmail.com','01000000052'),(53,'방가다',7,100,'mail53@gmail.com','01000000053'),(54,'전순차',6,700,'mail54@gmail.com','01000000054'),(55,'조종차',5,600,'mail55@gmail.com','01000000055'),(56,'전호라',3,200,'mail56@gmail.com','01000000056'),(57,'천호윤',4,500,'mail57@gmail.com','01000000057'),(58,'마신혜',1,300,'mail58@gmail.com','01000000058'),(59,'전세국',2,600,'mail59@gmail.com','01000000059'),(60,'지호태',2,300,'mail60@gmail.com','01000000060'),(61,'유혜태',4,700,'mail61@gmail.com','01000000061'),(62,'천세찬',4,800,'mail62@gmail.com','01000000062'),(63,'지바혜',3,200,'mail63@gmail.com','01000000063'),(64,'천가차',1,800,'mail64@gmail.com','01000000064'),(65,'배세사',2,800,'mail65@gmail.com','01000000065'),(66,'방나하',6,200,'mail66@gmail.com','01000000066'),(67,'최호태',1,800,'mail67@gmail.com','01000000067'),(68,'마가혜',3,100,'mail68@gmail.com','01000000068'),(69,'김성바',6,200,'mail69@gmail.com','01000000069'),(70,'방혜국',5,600,'mail70@gmail.com','01000000070'),(71,'이파파',4,300,'mail71@gmail.com','01000000071'),(72,'지윤혜',7,100,'mail72@gmail.com','01000000072'),(73,'박찬종',6,600,'mail73@gmail.com','01000000073'),(74,'방혜윤',3,300,'mail74@gmail.com','01000000074'),(75,'전호바',1,600,'mail75@gmail.com','01000000075'),(76,'유희마',1,700,'mail76@gmail.com','01000000076'),(77,'천성혜',7,500,'mail77@gmail.com','01000000077'),(78,'김나라',3,800,'mail78@gmail.com','01000000078'),(79,'최혜성',1,700,'mail79@gmail.com','01000000079'),(80,'지종라',4,905,'mail80@gmail.com','01000000080'),(81,'이바희',7,800,'mail81@gmail.com','01000000081'),(82,'최은가',4,800,'mail82@gmail.com','01000000082'),(83,'배자호',5,500,'mail83@gmail.com','01000000083'),(84,'배사파',7,500,'mail84@gmail.com','01000000084'),(85,'마성다',2,400,'mail85@gmail.com','01000000085'),(86,'최국세',3,600,'mail86@gmail.com','01000000086'),(87,'유다지',4,600,'mail87@gmail.com','01000000087'),(88,'천결신',4,400,'mail88@gmail.com','01000000088'),(89,'박태사',7,300,'mail89@gmail.com','01000000089'),(90,'원파가',7,900,'mail90@gmail.com','01000000090'),(91,'마순차',7,300,'mail91@gmail.com','01000000091'),(92,'지호희',6,700,'mail92@gmail.com','01000000092'),(93,'최가국',6,800,'mail93@gmail.com','01000000093'),(94,'마성나',1,200,'mail94@gmail.com','01000000094'),(95,'조하마',4,700,'mail95@gmail.com','01000000095'),(96,'원바가',3,300,'mail96@gmail.com','01000000096'),(97,'최신세',2,903,'mail97@gmail.com','01000000097'),(98,'김은다',5,900,'mail98@gmail.com','01000000098'),(99,'천라국',5,500,'mail99@gmail.com','01000000099'),(200,'방국가',1,200,'mail200@gmail.com','01000000200'),(201,'최세마',1,300,'mail201@gmail.com','01000000201'),(202,'조라종',6,500,'mail202@gmail.com','01000000202'),(203,'이지마',4,700,'mail203@gmail.com','01000000203'),(204,'김신호',6,300,'mail204@gmail.com','01000000204'),(205,'김은다',6,200,'mail205@gmail.com','01000000205'),(206,'마세혜',7,700,'mail206@gmail.com','01000000206'),(207,'김바순',1,200,'mail207@gmail.com','01000000207'),(208,'원순세',5,400,'mail208@gmail.com','01000000208'),(209,'원마종',6,600,'mail209@gmail.com','01000000209'),(210,'마사혜',2,200,'mail210@gmail.com','01000000210'),(211,'박나신',5,300,'mail211@gmail.com','01000000211'),(212,'전호사',6,100,'mail212@gmail.com','01000000212'),(213,'지지호',2,400,'mail213@gmail.com','01000000213'),(214,'천혜파',2,900,'mail214@gmail.com','01000000214'),(215,'지사세',6,700,'mail215@gmail.com','01000000215'),(216,'방나태',6,100,'mail216@gmail.com','01000000216'),(217,'김지하',6,400,'mail217@gmail.com','01000000217'),(218,'지찬태',3,300,'mail218@gmail.com','01000000218'),(219,'조사나',4,800,'mail219@gmail.com','01000000219'),(220,'지차순',6,800,'mail220@gmail.com','01000000220'),(221,'지희태',3,300,'mail221@gmail.com','01000000221'),(222,'이희나',5,800,'mail222@gmail.com','01000000222'),(223,'배신마',7,900,'mail223@gmail.com','01000000223'),(224,'배나희',3,900,'mail224@gmail.com','01000000224'),(225,'마아세',4,800,'mail225@gmail.com','01000000225'),(226,'전바신',2,900,'mail226@gmail.com','01000000226'),(227,'박희윤',1,200,'mail227@gmail.com','01000000227'),(228,'천결호',1,100,'mail228@gmail.com','01000000228'),(229,'마사혜',2,200,'mail229@gmail.com','01000000229'),(230,'최종바',6,300,'mail230@gmail.com','01000000230'),(231,'원파가',1,200,'mail231@gmail.com','01000000231'),(232,'지희결',5,200,'mail232@gmail.com','01000000232'),(233,'김자마',6,200,'mail233@gmail.com','01000000233'),(234,'방성세',1,900,'mail234@gmail.com','01000000234'),(235,'마바성',6,600,'mail235@gmail.com','01000000235'),(236,'천마마',2,200,'mail236@gmail.com','01000000236'),(237,'최가세',6,100,'mail237@gmail.com','01000000237'),(238,'김파희',3,200,'mail238@gmail.com','01000000238'),(239,'마찬아',5,900,'mail239@gmail.com','01000000239'),(240,'김세가',1,200,'mail240@gmail.com','01000000240'),(241,'전차나',2,700,'mail241@gmail.com','01000000241'),(242,'유희국',2,100,'mail242@gmail.com','01000000242'),(243,'전희마',1,800,'mail243@gmail.com','01000000243'),(244,'마호차',3,200,'mail244@gmail.com','01000000244'),(245,'배태바',5,600,'mail245@gmail.com','01000000245'),(246,'배나희',4,300,'mail246@gmail.com','01000000246'),(247,'유은종',6,300,'mail247@gmail.com','01000000247'),(248,'원세마',6,300,'mail248@gmail.com','01000000248'),(249,'배마가',4,100,'mail249@gmail.com','01000000249'),(250,'유결호',1,700,'mail250@gmail.com','01000000250'),(251,'지태윤',4,100,'mail251@gmail.com','01000000251'),(252,'배호가',7,600,'mail252@gmail.com','01000000252'),(150,'김150수',4,300,NULL,'0101234150');
/*!40000 ALTER TABLE `EmpTest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notice`
--

DROP TABLE IF EXISTS `notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notice` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `createdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '작성일',
  `workdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '수정일',
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '제목',
  `writer` int unsigned DEFAULT NULL COMMENT '작성자',
  `contents` text COLLATE utf8mb4_unicode_ci COMMENT '내용',
  PRIMARY KEY (`id`),
  KEY `fk_Notice_writer` (`writer`),
  FULLTEXT KEY `ft_idx_Notice_title_contents` (`title`,`contents`),
  CONSTRAINT `fk_Notice_writer` FOREIGN KEY (`writer`) REFERENCES `Emp` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notice`
--

LOCK TABLES `notice` WRITE;
/*!40000 ALTER TABLE `notice` DISABLE KEYS */;
INSERT INTO `notice` VALUES (1,'2025-05-08 02:18:14','2025-05-08 02:18:14','세종대왕',NULL,'조선의 제4대 국왕이다.'),(2,'2025-05-08 02:18:14','2025-05-08 02:18:14','단군',NULL,'단군왕검(檀君王儉)은 한민족의 시조이자 고조선(古朝鮮)의 국조(國祖), 대종교의 시작.'),(3,'2025-05-08 02:18:14','2025-05-08 02:18:14','정약용',NULL,'조선 후기의 문신이자 실학자·저술가·시인·철학자·과학자·공학자이다.'),(4,'2025-05-08 02:18:14','2025-05-08 02:18:14','계백',NULL,'백제 말기의 군인이다.'),(5,'2025-05-08 02:18:14','2025-05-08 02:18:14','이순신',NULL,'조선 중기의 무신이었다. 본관은 덕수(德水), 자는 여해(汝諧), 시호는 충무(忠武).'),(6,'2025-05-08 02:18:14','2025-05-08 02:18:14','김유신',NULL,'신라의 화랑의 우두머리였으며 태대각간(太大角干)이었고 신라에 귀순한 가야 왕족의 후손.');
/*!40000 ALTER TABLE `notice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PartiRangeTest`
--

DROP TABLE IF EXISTS `PartiRangeTest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PartiRangeTest` (
  `studentno` varchar(7) COLLATE utf8mb4_unicode_ci NOT NULL,
  `enteryear` smallint NOT NULL,
  `studentname` varchar(31) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
/*!50100 PARTITION BY RANGE (`enteryear`)
(PARTITION p1 VALUES LESS THAN (2000) ENGINE = InnoDB,
 PARTITION p2 VALUES LESS THAN (2010) ENGINE = InnoDB,
 PARTITION p3 VALUES LESS THAN MAXVALUE ENGINE = InnoDB) */;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PartiRangeTest`
--

LOCK TABLES `PartiRangeTest` WRITE;
/*!40000 ALTER TABLE `PartiRangeTest` DISABLE KEYS */;
INSERT INTO `PartiRangeTest` VALUES ('8809080',1988,'팔팔학번'),('0809080',2008,'공팔학번'),('1809080',2018,'일팔학번'),('249080',2024,'이사학번');
/*!40000 ALTER TABLE `PartiRangeTest` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Test`
--

DROP TABLE IF EXISTS `Test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Test` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ttt` varchar(31) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dept` tinyint unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Test`
--

LOCK TABLES `Test` WRITE;
/*!40000 ALTER TABLE `Test` DISABLE KEYS */;
INSERT INTO `Test` VALUES (1,'aaa1',3),(2,'aaa2',4);
/*!40000 ALTER TABLE `Test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'testdb'
--
