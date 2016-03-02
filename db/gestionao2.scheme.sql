-- MySQL dump 10.13  Distrib 5.6.25, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: gestionao2
-- ------------------------------------------------------
-- Server version	5.6.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `acteur`
--

DROP TABLE IF EXISTS `acteur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `acteur` (
  `ID_profil` int(11) NOT NULL,
  `ID_agent` int(11) NOT NULL,
  PRIMARY KEY (`ID_profil`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `annee_budgetaire`
--

DROP TABLE IF EXISTS `annee_budgetaire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `annee_budgetaire` (
  `ID_annee_budgetaire` int(4) NOT NULL,
  `cle_annee` int(4) NOT NULL,
  `cle_budget_actuel` float NOT NULL,
  `cle_budget_annuel` float NOT NULL,
  `annee_encours` tinyint(1) NOT NULL,
  PRIMARY KEY (`ID_annee_budgetaire`),
  KEY `ID_annee_budgetaire` (`ID_annee_budgetaire`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `appelsoffres`
--

DROP TABLE IF EXISTS `appelsoffres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `appelsoffres` (
  `IdAppelOffre` int(11) NOT NULL AUTO_INCREMENT,
  `IdSource` int(11) DEFAULT NULL,
  `NumSource` varchar(5) DEFAULT '',
  `NumAnnonce` varchar(12) DEFAULT '',
  `DateParution` date DEFAULT NULL,
  `IdConsultation` int(11) DEFAULT NULL,
  `Objet` varchar(255) DEFAULT '',
  `Client` varchar(255) DEFAULT '',
  `Observation` varchar(255) DEFAULT '',
  `IdDepartement` varchar(255) DEFAULT NULL,
  `DateLimite` date DEFAULT NULL,
  `IdThematique` int(11) DEFAULT NULL,
  `_BLOB` text,
  `DateTransmission` date DEFAULT NULL,
  `Semaine` varchar(7) DEFAULT NULL,
  `IdSuiteDonnee` int(11) DEFAULT NULL,
  `Motif` varchar(200) DEFAULT '',
  `Montant` float DEFAULT NULL,
  `IdNaturePrestation` int(11) DEFAULT NULL,
  `CoefBareme` varchar(10) DEFAULT '',
  `RefAffaire` varchar(20) DEFAULT '',
  `IdResultat` int(11) DEFAULT NULL,
  `Commentaire` varchar(250) DEFAULT '',
  `MailOK` tinyint(4) DEFAULT NULL,
  `IdUnite` int(11) DEFAULT NULL,
  `IdDomaine` int(11) DEFAULT NULL,
  `IdDonneurOrdre` int(11) DEFAULT NULL,
  `Keywords` text,
  PRIMARY KEY (`IdAppelOffre`)
) ENGINE=MyISAM AUTO_INCREMENT=8934 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `avancement`
--

DROP TABLE IF EXISTS `avancement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `avancement` (
  `ID_avancement` int(4) NOT NULL AUTO_INCREMENT,
  `cle_avacement` int(4) NOT NULL,
  `libelle_avancement` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ID_avancement`),
  KEY `ID_avancement` (`ID_avancement`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `base`
--

DROP TABLE IF EXISTS `base`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `base` (
  `ID_demande` int(11) NOT NULL AUTO_INCREMENT,
  `service` int(4) NOT NULL,
  `departement` int(4) NOT NULL,
  `agent_demandeur` int(4) NOT NULL,
  `agent_beneficiaire` int(4) NOT NULL,
  `budget_annuel` float NOT NULL,
  `budget_actuel` float NOT NULL,
  `date_de_demande` datetime DEFAULT NULL,
  `nature` int(4) NOT NULL,
  `sous_nature` int(4) NOT NULL,
  `evolution` int(4) NOT NULL,
  `quantité` tinyint(4) NOT NULL,
  `phasage` int(2) NOT NULL,
  `libelle_commande` longtext COLLATE utf8_unicode_ci NOT NULL,
  `motivation_demande` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `commentaire_demande` longtext COLLATE utf8_unicode_ci,
  `commentaire_s2i` longtext COLLATE utf8_unicode_ci,
  `etat_s2i` int(2) NOT NULL DEFAULT '0',
  `priorite_valide` tinyint(1) NOT NULL DEFAULT '-1',
  `etape_valide` tinyint(1) NOT NULL DEFAULT '-1',
  `priorite_niveau` int(2) NOT NULL DEFAULT '-1',
  `avancement` int(4) NOT NULL DEFAULT '0',
  `special` tinyint(1) NOT NULL DEFAULT '-1',
  `annulation` tinyint(1) NOT NULL DEFAULT '-1',
  `cloture` tinyint(1) NOT NULL DEFAULT '-1',
  `annee_budget` int(4) NOT NULL,
  `domaine_metier` int(4) NOT NULL,
  `date_modif` datetime DEFAULT NULL,
  PRIMARY KEY (`ID_demande`)
) ENGINE=MyISAM AUTO_INCREMENT=59 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `consultations`
--

DROP TABLE IF EXISTS `consultations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `consultations` (
  `IdConsultation` int(11) NOT NULL AUTO_INCREMENT,
  `LibCourtConsultation` varchar(4) NOT NULL DEFAULT '',
  `LibLongConsultation` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`IdConsultation`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contacts` (
  `Rang` int(11) NOT NULL DEFAULT '0',
  `Kage` int(11) NOT NULL DEFAULT '0',
  `Role` varchar(60) NOT NULL DEFAULT '',
  PRIMARY KEY (`Rang`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `curvitae`
--

DROP TABLE IF EXISTS `curvitae`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `curvitae` (
  `IdCurVitae` int(11) NOT NULL AUTO_INCREMENT,
  `Kage` int(11) NOT NULL DEFAULT '0',
  `Fichier` varchar(60) NOT NULL DEFAULT '',
  `IdUnite` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`IdCurVitae`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `departements`
--

DROP TABLE IF EXISTS `departements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `departements` (
  `IdDepartement` int(11) NOT NULL AUTO_INCREMENT,
  `NumDepartement` varchar(10) NOT NULL DEFAULT '',
  `LibelleDepartement` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`IdDepartement`)
) ENGINE=MyISAM AUTO_INCREMENT=120 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `docs`
--

DROP TABLE IF EXISTS `docs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `docs` (
  `docId` varchar(255) NOT NULL DEFAULT 'NO',
  `_blob` longtext,
  `filename` varchar(255) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  PRIMARY KEY (`docId`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `domaine`
--

DROP TABLE IF EXISTS `domaine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `domaine` (
  `id_domaine` int(11) NOT NULL AUTO_INCREMENT,
  `nom_domaine` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_domaine`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `domaine_metier`
--

DROP TABLE IF EXISTS `domaine_metier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `domaine_metier` (
  `ID_domaine_metier` int(4) NOT NULL,
  `libelle_domaine_metier` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ID_domaine_metier`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `domaines`
--

DROP TABLE IF EXISTS `domaines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `domaines` (
  `IdDomaine` int(11) NOT NULL AUTO_INCREMENT,
  `LibCourtDomaine` varchar(50) NOT NULL DEFAULT '',
  `LibLongDomaine` varchar(60) NOT NULL DEFAULT '',
  `MailDomaine` varchar(60) DEFAULT '',
  PRIMARY KEY (`IdDomaine`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `donneursordres`
--

DROP TABLE IF EXISTS `donneursordres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `donneursordres` (
  `IdDonneurOrdre` int(11) NOT NULL AUTO_INCREMENT,
  `LibelleDonneurOrdre` varchar(40) NOT NULL DEFAULT '',
  PRIMARY KEY (`IdDonneurOrdre`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `emailsnotification`
--

DROP TABLE IF EXISTS `emailsnotification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `emailsnotification` (
  `IdAppelOffre` int(11) NOT NULL DEFAULT '0',
  `IdDestinataire` int(11) NOT NULL DEFAULT '0',
  `typeDestinataire` varchar(4) NOT NULL DEFAULT '',
  PRIMARY KEY (`IdAppelOffre`,`IdDestinataire`,`typeDestinataire`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `evolution`
--

DROP TABLE IF EXISTS `evolution`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `evolution` (
  `ID_evolution` int(4) NOT NULL AUTO_INCREMENT,
  `libelle_evolution` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ID_evolution`),
  KEY `ID_evolution` (`ID_evolution`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `fichiers`
--

DROP TABLE IF EXISTS `fichiers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fichiers` (
  `IdFichier` int(11) NOT NULL AUTO_INCREMENT,
  `IdAO` int(11) DEFAULT NULL,
  `FichierLien` varchar(255) DEFAULT NULL,
  `TailleFichier` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`IdFichier`)
) ENGINE=MyISAM AUTO_INCREMENT=9685 DEFAULT CHARSET=latin1 COMMENT='Table des fichiers pièces jointes d''un appel d''offre';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `keywords`
--

DROP TABLE IF EXISTS `keywords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `keywords` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `keyword` varchar(255) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `mails`
--

DROP TABLE IF EXISTS `mails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mails` (
  `idao` int(11) NOT NULL DEFAULT '-1',
  `value` text,
  PRIMARY KEY (`idao`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `nature`
--

DROP TABLE IF EXISTS `nature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nature` (
  `ID_nature` int(4) NOT NULL AUTO_INCREMENT,
  `ID_domaine_metier` int(4) NOT NULL,
  `libelle_nature` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ID_nature`,`ID_domaine_metier`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `naturesprestations`
--

DROP TABLE IF EXISTS `naturesprestations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `naturesprestations` (
  `IdNaturePrestation` int(11) NOT NULL AUTO_INCREMENT,
  `LibelleNaturePrestation` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`IdNaturePrestation`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `parametres`
--

DROP TABLE IF EXISTS `parametres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `parametres` (
  `AnneeEnCours` varchar(4) NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `priorite`
--

DROP TABLE IF EXISTS `priorite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `priorite` (
  `ID_priorite` tinyint(4) NOT NULL,
  `libelle_priorite` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ID_priorite`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `profil`
--

DROP TABLE IF EXISTS `profil`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profil` (
  `ID_profil` int(4) NOT NULL AUTO_INCREMENT,
  `type_profil` int(4) NOT NULL,
  `libelle_profil` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  KEY `ID_profil` (`ID_profil`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `profils`
--

DROP TABLE IF EXISTS `profils`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `profils` (
  `IdProfil` int(11) NOT NULL AUTO_INCREMENT,
  `IdTypeProfil` int(11) NOT NULL DEFAULT '0',
  `PassportUID` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`IdProfil`)
) ENGINE=MyISAM AUTO_INCREMENT=104 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `resultats`
--

DROP TABLE IF EXISTS `resultats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resultats` (
  `IdResultat` int(11) NOT NULL AUTO_INCREMENT,
  `LibelleResultat` varchar(10) NOT NULL DEFAULT '',
  PRIMARY KEY (`IdResultat`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sources`
--

DROP TABLE IF EXISTS `sources`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sources` (
  `IdSource` int(11) NOT NULL AUTO_INCREMENT,
  `NomSource` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`IdSource`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sous_nature`
--

DROP TABLE IF EXISTS `sous_nature`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sous_nature` (
  `ID_sous_nature` int(4) NOT NULL AUTO_INCREMENT,
  `ID_nature` int(4) NOT NULL,
  `libelle_sous_nature` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `prix_sous_nature` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`ID_sous_nature`,`ID_nature`),
  KEY `ID_sous_nature` (`ID_sous_nature`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `suitesdonnees`
--

DROP TABLE IF EXISTS `suitesdonnees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `suitesdonnees` (
  `IdSuiteDonnee` int(11) NOT NULL AUTO_INCREMENT,
  `LibelleSuiteDonnee` varchar(10) NOT NULL DEFAULT '',
  PRIMARY KEY (`IdSuiteDonnee`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `thematiques`
--

DROP TABLE IF EXISTS `thematiques`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `thematiques` (
  `id_thematique` int(11) NOT NULL AUTO_INCREMENT,
  `id_domaine` int(11) NOT NULL DEFAULT '0',
  `nom_thematique` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_thematique`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `typesprofils`
--

DROP TABLE IF EXISTS `typesprofils`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `typesprofils` (
  `IdTypeProfil` int(11) NOT NULL AUTO_INCREMENT,
  `LibelleTypeProfil` varchar(15) NOT NULL DEFAULT '',
  PRIMARY KEY (`IdTypeProfil`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `unites`
--

DROP TABLE IF EXISTS `unites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `unites` (
  `IdUnite` int(11) NOT NULL AUTO_INCREMENT,
  `MailUnite` varchar(150) NOT NULL DEFAULT '',
  `Url` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`IdUnite`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-11-06 15:03:10
