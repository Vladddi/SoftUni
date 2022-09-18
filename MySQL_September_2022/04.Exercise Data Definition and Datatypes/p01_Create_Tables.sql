CREATE DATABASE `minions`;
USE `minions`;

/* p01_Create_Tables*/

CREATE TABLE `minions` (
`id` INT PRIMARY KEY AUTO_INCREMENT, 
`name` VARCHAR(30),
`age` INT
);

DROP TABLE `towns`;

CREATE TABLE `towns` (
`town_id` INT PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(30)
);

ALTER TABLE `towns`
CHANGE COLUMN `town_id` `id` INT;

/* p02_Alter Minions Table */

ALTER TABLE `minions`
ADD COLUMN `town_id` INT,
ADD CONSTRAINT fk_minions_towns 
FOREIGN KEY minions(`town_id`) 
REFERENCES `towns`(`id`);

/* p03_Insert_Records_in_Both_Tables */

INSERT INTO `towns`(`id`,`name`)
VALUES ("1", "Sofia"),
 ("2", "Plovdiv"),
 ("3", "Varna");
 
INSERT INTO `minions`(`id`,`name`,`age`,`town_id`)
VALUES ("1", "Kevin", "22", "1"),
 ("2", "Bob", "15", "3"),
 ("3", "Steward", NULL, "2");

/* p04_Truncate_Table_Minions */

TRUNCATE TABLE `minions`;

/* p05_Drop_All_Tables */

DROP TABLE `minions`;
DROP TABLE `towns`;

/* p06_Create_Table_People */

/* p07_Create_Table_Users */

/* p08_Change_Primary_Key */

ALTER TABLE `users`
DROP PRIMARY KEY, 
ADD CONSTRAINT pk_users
PRIMARY KEY `users`(`id`, `username`);

/* p09_Set_Default_Value_of_a_Field */
-- !!! ne minava-- compile time error
ALTER TABLE `users`
CHANGE COLUMN `last_login_time` `last_login_time`
DATE DEFAULT NOW();
-- zadacha, pri koqto zapisvame vremeto, kogato potrebitelq se log-ne

/* p10_Set_Unique_Field */


/* p11_Movies_Database */



