CREATE DATABASE ucode_web;

CREATE USER 'vhunko'@'localhost' IDENTIFIED BY 'securepass'; 

GRANT ALL ON ucode_web.* TO 'vhunko'@'localhost';
