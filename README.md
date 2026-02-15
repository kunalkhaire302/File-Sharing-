<div align="center">
  
# 📁 **FileShare**  
### *Secure, Simple, Seamless File Sharing*

[![GitHub Stars](https://img.shields.io/github/stars/YashChaudhari999/FileShare?style=for-the-badge&logo=github&color=gold)](https://github.com/YashChaudhari999/FileShare/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/YashChaudhari999/FileShare?style=for-the-badge&logo=github&color=blue)](https://github.com/YashChaudhari999/FileShare/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/YashChaudhari999/FileShare?style=for-the-badge&logo=github&color=red)](https://github.com/YashChaudhari999/FileShare/issues)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)](https://pages.github.com/)

**🚀 Instantly upload & download files – no sign‑up required (or optional account for history).**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-https%3A%2F%2Fkunalkhaire302.github.io%2FFileSharing--Website%2F-blueviolet?style=for-the-badge&logo=googlechrome&logoColor=white)](https://kunalkhaire302.github.io/FileSharing-Website/)

</div>

---

## 🌟 **Overview**

**FileShare** is a modern, lightweight web application that lets you **upload any file and share it instantly** via a unique code. Whether you're sending a document to a colleague or sharing a photo with friends, FileShare makes it **secure, fast, and hassle‑free**.

Built with a **Node.js + Express** backend and a **static frontend** hosted on GitHub Pages, it combines simplicity with powerful features:

- 🔐 **Optional user accounts** to keep track of your uploads
- ⚡ **No‑account uploads** for quick, anonymous sharing
- 🗄️ **Files stored securely** as BLOBs in MySQL
- 📱 **Fully responsive** – works on desktop, tablet, and mobile

---

## ✨ **Features**

| Feature | Description |
|:--------|:------------|
| **📤 Upload & Download** | Drag‑and‑drop or select files – get a unique code to share. |
| **👤 User Accounts** | Register to see your upload history and manage files. |
| **🔒 Secure Storage** | Passwords hashed with bcrypt; files stored as BLOBs in MySQL. |
| **🎨 Clean Interface** | Minimalistic design focused on usability. |
| **🌐 Cross‑Platform** | Works everywhere – no app installation needed. |
| **📦 Lightweight** | Fast load times and minimal dependencies. |

---

## 🛠️ **Tech Stack**

<div align="center">

| Frontend | Backend | Database | Hosting |
|:--------:|:-------:|:--------:|:-------:|
| HTML5<br>CSS3<br>JavaScript | Node.js<br>Express.js<br>Multer<br>bcrypt | MySQL | GitHub Pages (frontend)<br>Render (backend) |

</div>

<p align="center">
  <img src="https://skillicons.dev/icons?i=html,css,js,nodejs,express,mysql,github" />
</p>

---

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js (v14+)
- MySQL (local or cloud instance)
- Git

### **1. Clone the Repository**
```bash
git clone https://github.com/kunalkhaire302/FileShare.git
cd FileShare
2. Install Backend Dependencies
bash
npm install express multer bcrypt mysql2 cors body-parser jsonwebtoken
3. Set Up the Database
Create a MySQL database named fileshare and run the following SQL:

sql
CREATE DATABASE fileshare;
USE fileshare;

-- Users table (optional accounts)
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,  -- bcrypt hashed
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Uploads for logged‑in users
CREATE TABLE uploads_user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  file_name VARCHAR(255) NOT NULL,
  file_data LONGBLOB NOT NULL,
  unique_code VARCHAR(100) NOT NULL,
  upload_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Anonymous uploads
CREATE TABLE uploads (
  id INT AUTO_INCREMENT PRIMARY KEY,
  file_name VARCHAR(255) NOT NULL,
  file_data LONGBLOB NOT NULL,
  unique_code VARCHAR(100) NOT NULL,
  upload_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
Configure your database credentials in the backend code (e.g., in a .env file or directly in app.js).

4. Run the Backend Server
bash
node app.js
The server will start on http://localhost:3000 (or your configured port).

5. Open the Frontend
Simply open index.html in your browser, or serve it using a local development server (e.g., Live Server in VS Code).
For production, the frontend is hosted on GitHub Pages – you can access it at:
👉 https://kunalkhaire302.github.io/FileSharing-Website/

☁️ Deployment
Frontend (GitHub Pages)
Push your frontend code to a GitHub repository.

Go to Settings > Pages and select the branch (usually main or gh-pages).

Your site will be live at https://<username>.github.io/<repository>/.

Backend (Render)
Create a new Web Service on Render.

Connect your GitHub repository containing the backend code.

Set the build command (e.g., npm install) and start command (node app.js).

Add environment variables for database credentials.

Update your frontend's API endpoint to point to your Render URL.

📖 Usage
Visit the homepage – you'll see upload and download options.

Upload a file – drag & drop or browse. After upload, you'll receive a unique code.

Share the code – anyone with the code can download the file.

Register (optional) – create an account to view your upload history and manage files.

Download – enter a code on the download page to retrieve the file.

🤝 Contributing
Contributions are what make the open‑source community such an amazing place! Any contributions you make are greatly appreciated.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
Distributed under the MIT License. See LICENSE for more information.

📬 Contact
Project Maintainer – Kunal Khiare
Live Frontend – FileShare on GitHub Pages
Backend Repository – FileShare Backend

<p align="center"> <a href="https://github.com/kunalkhaire302/FileShare/issues">Report Bug</a> • <a href="https://github.com/YashChaudhari999/FileShare/issues">Request Feature</a> </p>
<div align="center">
⭐ If you find this project useful, please give it a star! ⭐
https://img.shields.io/github/stars/YashChaudhari999/FileShare?style=social

Made with ❤️ and Node.js

</div> ```
