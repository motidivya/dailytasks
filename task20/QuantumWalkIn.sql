-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema walk_in_schema
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema walk_in_schema
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `walk_in_schema` DEFAULT CHARACTER SET utf8 ;
USE `walk_in_schema` ;

-- -----------------------------------------------------
-- Table `walk_in_schema`.`walk_in`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `walk_in_schema`.`walk_in` ;

CREATE TABLE IF NOT EXISTS `walk_in_schema`.`walk_in` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `upload_resume` BLOB(1) NULL,
  `expiry_date` DATE NULL,
  `date_created` DATE NULL,
  `location` VARCHAR(45) NULL,
  `guId` VARCHAR(45) NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `title_UNIQUE` (`title` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `walk_in_schema`.`applicant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `walk_in_schema`.`applicant` ;

CREATE TABLE IF NOT EXISTS `walk_in_schema`.`applicant` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email_id` VARCHAR(45) NOT NULL,
  `password_hash` VARCHAR(32) NOT NULL,
  `created` DATETIME NULL,
  `updated` DATETIME NULL,
  `phone_number` BIGINT NOT NULL,
  `resume` BLOB NULL,
  `portfolio` VARCHAR(500) NULL,
  `referral` VARCHAR(45) NULL,
  `updates` TINYINT NULL,
  `picture` BLOB NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
COMMENT = 'Applicant is the user that may or may not apply to any walkin.';


-- -----------------------------------------------------
-- Table `walk_in_schema`.`date`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `walk_in_schema`.`date` ;

CREATE TABLE IF NOT EXISTS `walk_in_schema`.`date` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NULL,
  `walk_in_id` INT NOT NULL,
  PRIMARY KEY (`id`, `walk_in_id`),
  INDEX `fk_date_walk_in1_idx` (`walk_in_id` ASC) VISIBLE,
  CONSTRAINT `fk_date_walk_in1`
    FOREIGN KEY (`walk_in_id`)
    REFERENCES `walk_in_schema`.`walk_in` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `walk_in_schema`.`application`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `walk_in_schema`.`application` ;

CREATE TABLE IF NOT EXISTS `walk_in_schema`.`application` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `applicant_id` INT NOT NULL,
  `walk_in_id` INT NOT NULL,
  `date_id` INT NOT NULL,
  `date_walk_in_id` INT NOT NULL,
  `venue` TEXT(200) NOT NULL,
  `things_to_remember` TEXT(200) NULL,
  PRIMARY KEY (`id`, `date_id`, `date_walk_in_id`),
  INDEX `fk_applications_applicant1_idx` (`applicant_id` ASC) VISIBLE,
  INDEX `fk_application_walk_in1_idx` (`walk_in_id` ASC) VISIBLE,
  INDEX `fk_application_date1_idx` (`date_id` ASC, `date_walk_in_id` ASC) VISIBLE,
  CONSTRAINT `fk_applications_applicant1`
    FOREIGN KEY (`applicant_id`)
    REFERENCES `walk_in_schema`.`applicant` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_application_walk_in1`
    FOREIGN KEY (`walk_in_id`)
    REFERENCES `walk_in_schema`.`walk_in` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_application_date1`
    FOREIGN KEY (`date_id` , `date_walk_in_id`)
    REFERENCES `walk_in_schema`.`date` (`id` , `walk_in_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `walk_in_schema`.`job_role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `walk_in_schema`.`job_role` ;

CREATE TABLE IF NOT EXISTS `walk_in_schema`.`job_role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `gross_compensation` INT NOT NULL,
  `role_description` TEXT(500) NOT NULL,
  `requirements` TEXT(500) NOT NULL,
  `walk_in_id` INT NOT NULL,
  `application_id` INT NOT NULL,
  PRIMARY KEY (`id`, `walk_in_id`, `application_id`),
  INDEX `fk_job_roles_walk_in1_idx` (`walk_in_id` ASC) VISIBLE,
  INDEX `fk_job_role_application1_idx` (`application_id` ASC) VISIBLE,
  CONSTRAINT `fk_job_roles_walk_in1`
    FOREIGN KEY (`walk_in_id`)
    REFERENCES `walk_in_schema`.`walk_in` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_job_role_application1`
    FOREIGN KEY (`application_id`)
    REFERENCES `walk_in_schema`.`application` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `walk_in_schema`.`special_opportunities`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `walk_in_schema`.`special_opportunities` ;

CREATE TABLE IF NOT EXISTS `walk_in_schema`.`special_opportunities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `walk_in_id` INT NOT NULL,
  PRIMARY KEY (`id`, `walk_in_id`),
  INDEX `fk_special_opportunities_walk_in1_idx` (`walk_in_id` ASC) VISIBLE,
  CONSTRAINT `fk_special_opportunities_walk_in1`
    FOREIGN KEY (`walk_in_id`)
    REFERENCES `walk_in_schema`.`walk_in` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `walk_in_schema`.`prerequisites_application_process`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `walk_in_schema`.`prerequisites_application_process` ;

CREATE TABLE IF NOT EXISTS `walk_in_schema`.`prerequisites_application_process` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `general_instructions` TEXT NOT NULL,
  `minimum_system_requirements` TEXT NOT NULL,
  `process` TEXT NOT NULL,
  `walk_in_id` INT NOT NULL,
  PRIMARY KEY (`id`, `walk_in_id`),
  INDEX `fk_prerequisites_application_process_walk_in1_idx` (`walk_in_id` ASC) VISIBLE,
  CONSTRAINT `fk_prerequisites_application_process_walk_in1`
    FOREIGN KEY (`walk_in_id`)
    REFERENCES `walk_in_schema`.`walk_in` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `walk_in_schema`.`time_slot`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `walk_in_schema`.`time_slot` ;

CREATE TABLE IF NOT EXISTS `walk_in_schema`.`time_slot` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `start_time` TIME NOT NULL,
  `end_time` TIME NOT NULL,
  `walk_in_id` INT NOT NULL,
  PRIMARY KEY (`id`, `walk_in_id`),
  INDEX `fk_time_slot_walk_in1_idx` (`walk_in_id` ASC) VISIBLE,
  CONSTRAINT `fk_time_slot_walk_in1`
    FOREIGN KEY (`walk_in_id`)
    REFERENCES `walk_in_schema`.`walk_in` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `walk_in_schema`.`educational_qualification`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `walk_in_schema`.`educational_qualification` ;

CREATE TABLE IF NOT EXISTS `walk_in_schema`.`educational_qualification` (
  `id` INT NOT NULL,
  `aggregate_percentage` FLOAT NULL,
  `year_of_passing` INT NULL,
  `applicant_id` INT NOT NULL,
  `college_name` VARCHAR(45) NULL,
  `college_location` VARCHAR(45) NULL,
  PRIMARY KEY (`id`, `applicant_id`),
  INDEX `fk_educational_qualifications_applicant1_idx` (`applicant_id` ASC) VISIBLE,
  CONSTRAINT `fk_educational_qualifications_applicant1`
    FOREIGN KEY (`applicant_id`)
    REFERENCES `walk_in_schema`.`applicant` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `walk_in_schema`.`college`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `walk_in_schema`.`college` ;

CREATE TABLE IF NOT EXISTS `walk_in_schema`.`college` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `location` VARCHAR(45) NULL,
  `educational_qualifications_id` INT NOT NULL,
  `educational_qualifications_applicant_id` INT NOT NULL,
  PRIMARY KEY (`id`, `educational_qualifications_id`, `educational_qualifications_applicant_id`),
  INDEX `fk_college_educational_qualifications1_idx` (`educational_qualifications_id` ASC, `educational_qualifications_applicant_id` ASC) VISIBLE,
  CONSTRAINT `fk_college_educational_qualifications1`
    FOREIGN KEY (`educational_qualifications_id` , `educational_qualifications_applicant_id`)
    REFERENCES `walk_in_schema`.`educational_qualification` (`id` , `applicant_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `walk_in_schema`.`professional_qualification`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `walk_in_schema`.`professional_qualification` ;

CREATE TABLE IF NOT EXISTS `walk_in_schema`.`professional_qualification` (
  `id` INT NOT NULL,
  `professional_qualificationscol` VARCHAR(45) NULL,
  `applicant_id` INT NOT NULL,
  `years_of_experience` INT NULL,
  `current_ctc` BIGINT NULL,
  `expected_ctc` BIGINT NULL,
  `expertise_technologies` VARCHAR(45) NULL,
  `notice_period` TINYINT NULL,
  `length_of_notice_period` DATE NULL,
  `past_appearances` TINYINT NULL,
  `role` VARCHAR(45) NULL,
  PRIMARY KEY (`id`, `applicant_id`),
  INDEX `fk_professional_qualifications_applicant1_idx` (`applicant_id` ASC) VISIBLE,
  CONSTRAINT `fk_professional_qualifications_applicant1`
    FOREIGN KEY (`applicant_id`)
    REFERENCES `walk_in_schema`.`applicant` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `walk_in_schema`.`type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `walk_in_schema`.`type` ;

CREATE TABLE IF NOT EXISTS `walk_in_schema`.`type` (
  `id` INT NOT NULL,
  `type` VARCHAR(45) NULL,
  `professional_qualifications_id` INT NOT NULL,
  `professional_qualifications_applicant_id` INT NOT NULL,
  PRIMARY KEY (`id`, `professional_qualifications_id`, `professional_qualifications_applicant_id`),
  INDEX `fk_type_professional_qualifications1_idx` (`professional_qualifications_id` ASC, `professional_qualifications_applicant_id` ASC) VISIBLE,
  CONSTRAINT `fk_type_professional_qualifications1`
    FOREIGN KEY (`professional_qualifications_id` , `professional_qualifications_applicant_id`)
    REFERENCES `walk_in_schema`.`professional_qualification` (`id` , `applicant_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `walk_in_schema`.`expertise_technology`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `walk_in_schema`.`expertise_technology` ;

CREATE TABLE IF NOT EXISTS `walk_in_schema`.`expertise_technology` (
  `id` INT NOT NULL,
  `professional_qualifications_id` INT NOT NULL,
  `professional_qualifications_applicant_id` INT NOT NULL,
  PRIMARY KEY (`id`, `professional_qualifications_id`, `professional_qualifications_applicant_id`),
  INDEX `fk_expertise_technologies_professional_qualifications1_idx` (`professional_qualifications_id` ASC, `professional_qualifications_applicant_id` ASC) VISIBLE,
  CONSTRAINT `fk_expertise_technologies_professional_qualifications1`
    FOREIGN KEY (`professional_qualifications_id` , `professional_qualifications_applicant_id`)
    REFERENCES `walk_in_schema`.`professional_qualification` (`id` , `applicant_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `walk_in_schema`.`familiar_technology`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `walk_in_schema`.`familiar_technology` ;

CREATE TABLE IF NOT EXISTS `walk_in_schema`.`familiar_technology` (
  `id` INT NOT NULL,
  `professional_qualifications_id` INT NOT NULL,
  `professional_qualifications_applicant_id` INT NOT NULL,
  PRIMARY KEY (`id`, `professional_qualifications_id`, `professional_qualifications_applicant_id`),
  INDEX `fk_expertise_technologies_professional_qualifications1_idx` (`professional_qualifications_id` ASC, `professional_qualifications_applicant_id` ASC) VISIBLE,
  CONSTRAINT `fk_expertise_technologies_professional_qualifications10`
    FOREIGN KEY (`professional_qualifications_id` , `professional_qualifications_applicant_id`)
    REFERENCES `walk_in_schema`.`professional_qualification` (`id` , `applicant_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `walk_in_schema`.`technology`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `walk_in_schema`.`technology` ;

CREATE TABLE IF NOT EXISTS `walk_in_schema`.`technology` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `expertise_technologies_id` INT NOT NULL,
  `familiar_technologies_id` INT NOT NULL,
  `familiar_technologies_professional_qualifications_id` INT NOT NULL,
  `familiar_technologies_professional_qualifications_applicant_id` INT NOT NULL,
  PRIMARY KEY (`id`, `expertise_technologies_id`, `familiar_technologies_id`, `familiar_technologies_professional_qualifications_id`, `familiar_technologies_professional_qualifications_applicant_id`),
  INDEX `fk_technologies_expertise_technologies1_idx` (`expertise_technologies_id` ASC) VISIBLE,
  INDEX `fk_technologies_familiar_technologies1_idx` (`familiar_technologies_id` ASC, `familiar_technologies_professional_qualifications_id` ASC, `familiar_technologies_professional_qualifications_applicant_id` ASC) VISIBLE,
  CONSTRAINT `fk_technologies_expertise_technologies1`
    FOREIGN KEY (`expertise_technologies_id`)
    REFERENCES `walk_in_schema`.`expertise_technology` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_technologies_familiar_technologies1`
    FOREIGN KEY (`familiar_technologies_id` , `familiar_technologies_professional_qualifications_id` , `familiar_technologies_professional_qualifications_applicant_id`)
    REFERENCES `walk_in_schema`.`familiar_technology` (`id` , `professional_qualifications_id` , `professional_qualifications_applicant_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `walk_in_schema`.`stream`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `walk_in_schema`.`stream` ;

CREATE TABLE IF NOT EXISTS `walk_in_schema`.`stream` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `educational_qualification_id` INT NOT NULL,
  `educational_qualification_applicant_id` INT NOT NULL,
  PRIMARY KEY (`id`, `educational_qualification_id`, `educational_qualification_applicant_id`),
  INDEX `fk_stream_educational_qualification1_idx` (`educational_qualification_id` ASC, `educational_qualification_applicant_id` ASC) VISIBLE,
  CONSTRAINT `fk_stream_educational_qualification1`
    FOREIGN KEY (`educational_qualification_id` , `educational_qualification_applicant_id`)
    REFERENCES `walk_in_schema`.`educational_qualification` (`id` , `applicant_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `walk_in_schema`.`qualification`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `walk_in_schema`.`qualification` ;

CREATE TABLE IF NOT EXISTS `walk_in_schema`.`qualification` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `educational_qualification_id` INT NOT NULL,
  `educational_qualification_applicant_id` INT NOT NULL,
  PRIMARY KEY (`id`, `educational_qualification_id`, `educational_qualification_applicant_id`),
  INDEX `fk_qualification_educational_qualification1_idx` (`educational_qualification_id` ASC, `educational_qualification_applicant_id` ASC) VISIBLE,
  CONSTRAINT `fk_qualification_educational_qualification1`
    FOREIGN KEY (`educational_qualification_id` , `educational_qualification_applicant_id`)
    REFERENCES `walk_in_schema`.`educational_qualification` (`id` , `applicant_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
