CREATE DATABASE `movies`;
USE `movies`;
/* p12_Car_Data_Base */

CREATE TABLE categories (
`id` INT PRIMARY KEY AUTO_INCREMENT, 
`category` VARCHAR(30) NOT NULL, 
`daily_rate` DOUBLE, 
`weekly_rate` DOUBLE, 
`monthly_rate` DOUBLE, 
`weekend_rate` DOUBLE
);

INSERT INTO `categories` (`category`)
VALUES
('action'),
('drama'),
('comedy');

CREATE TABLE `cars`(
`id` INT PRIMARY KEY AUTO_INCREMENT, 
`plate_number` VARCHAR(10) NOT NULL, 
`make` DATE, 
`model` VARCHAR(30) NOT NULL, 
`car_year` YEAR, 
`category_id` INT, 
`doors` INT, 
`picture` BLOB, 
`car_condition` TEXT, 
`available` BOOLEAN,
CONSTRAINT fk_cars_category
FOREIGN KEY cars(`id`) REFERENCES categories(`id`) 
);

INSERT INTO `cars` (`plate_number`, `model`)
VALUES
('asdasd', 'toyota'),
('asddsa', 'bmw'),
('comedy', 'skoda');

INSERT INTO `cars` (`plate_number`, `model`, `category_id`)
VALUES
(`fasdff`, `toyota`, 2);

CREATE TABLE `employees` (
`id` INT PRIMARY KEY AUTO_INCREMENT, 
`first_name` VARCHAR(15), 
`last_name` VARCHAR(15), 
`title` VARCHAR(30), 
`notes` TEXT
);
 
 CREATE TABLE `customers`(
 `id` INT PRIMARY KEY AUTO_INCREMENT, 
 `driver_licence_number` INT(6), 
 `full_name` VARCHAR(31), 
 `address` VARCHAR(20), 
 `city `VARCHAR(20), 
 `zip_code`INT(4), 
 `notes` TEXT);
 
 CREATE TABLE `rental_orders`(
 `id` INT PRIMARY KEY AUTO_INCREMENT, 
 `employee_id` INT, 
 `customer_id` INT, 
 `car_id` INT, 
 `car_condition` TEXT, 
 `tank_level` INT, 
 `kilometrage_start` INT, 
 `kilometrage_end` INT, 
 `total_kilometrage` INT(255), 
 `start_date` DATETIME, 
 `end_date` INT, 
 `total_days` INT, 
 `rate_applied` DOUBLE, 
 `tax_rate` DOUBLE, 
 `order_status` BOOlEAN, 
 `notes` TEXT,
 CONSTRAINT fk_rental_orders_employee
 FOREIGN KEY rental_orders(employee_id) REFERENCES employees(id),
 CONSTRAINT fk_rental_orders_customer
 FOREIGN KEY rental_orders(customer_id) REFERENCES customers(id),
 CONSTRAINT fk_rental_orders_car
 FOREIGN KEY rental_orders(car_id) REFERENCES cars(id),
 );
 