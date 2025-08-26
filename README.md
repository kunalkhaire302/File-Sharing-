# FileShare

FileShare is a web application that allows users to upload and download files securely. This project consists of a Node.js backend and a static frontend hosted on GitHub Pages.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Usage](#usage)
- [License](#license)

## Features

- Upload files securely to the server.
- Download files from the server.
- User-friendly interface for easy navigation.
- Responsive design for mobile and desktop views.

## Technologies Used

- **Frontend**:
  - HTML
  - CSS
  - JavaScript
- **Backend**:
  - Node.js
  - Express.js
  - MySQL
- **Hosting**:
  - GitHub Pages (for frontend & backend)
  - [Render](https://render.com)

## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YashChaudhari999/FileShare.git
   
2. **Navigate to the project directory**:
   ```bash
   cd FileShare
   
3. **Install dependencies (for the backend)**:
   ```bash
   npm install express multer bcrypt mysql2 cors body-parser jsonwebtoken
   
4. **Set up the database**:
-Create a MySQL database and configure your database connection settings in the backend code
   ```bash
   CREATE DATABASE fileshare;
   USE fileshare;
   
   -- User Tabl
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

5. **Install dependencies (for the backend)**:
   ```bash
   node app.js
   
6. Open your browser and go to
     ```bash
   http://localhost:3000
(or whichever port your server is running on).

## Deployment

**Frontend Deployment**
-The frontend is hosted on GitHub Pages. To access the live version, visit:

https://github.com/YashChaudhari999/FileShare

**Backend Deployment**
-The backend is deployed on Render (or any chosen service). Make sure to update your frontend code to point to the correct backend API URL.

## Usage

1. Navigate to the homepage.
2. Use the navigation links to upload or download files.
3. Follow the prompts to complete file operations.

## License

- This project is licensed under the MIT License. See the LICENSE file for more details.

