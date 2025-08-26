CREATE DATABASE fileshare;

USE fileshare;

-- User Table
CREATE  TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL, -- Store hashed passwords
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Uploads Table For Logged In Users
CREATE TABLE uploads_user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,  -- Reference to users table
    file_name VARCHAR(255) NOT NULL,
    file_data LONGBLOB NOT NULL,
    unique_code VARCHAR(100) NOT NULL,
    upload_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);


-- Uploads Table Who are not logged In
CREATE TABLE uploads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    file_name VARCHAR(255) NOT NULL,
    file_data LONGBLOB NOT NULL,
    unique_code VARCHAR(100) NOT NULL,
    upload_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);