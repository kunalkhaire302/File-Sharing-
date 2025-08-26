const express = require("express");
const multer = require("multer");
const bcrypt = require("bcrypt");
const mysql = require("mysql2");
const crypto = require("crypto");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "656973";
const app = express();

app.use(cors());
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies (form data)

const port = 3001;

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "fileshare"
});

db.connect(err => {
  if (err) {
    console.error("Error connecting to MySQL: ", err);
  } else {
    console.log("Connected to MySQL");
  }
});

// Serve static files from the "public" directory
app.use(express.static("public"));

// Register User
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (result.length > 0) {
        return res.status(400).json({ message: "Email already exists" });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert new user
      db.query(
        "INSERT INTO users SET ?",
        { name, email, password: hashedPassword },
        (err, result) => {
          if (err) throw err;
          return res
            .status(201)
            .json({ message: "User registered successfully!" });
        }
      );
    }
  );
});

// Login User
app.post("/login", (req, res) => {
  const { lemail, lpassword, remember } = req.body;
  console.log(lemail, lpassword, remember);
  db.query(
    "SELECT * FROM users WHERE email = ?",
    [lemail],
    async (err, result) => {
      if (err) return res.status(500).json({ message: "Server error" });

      if (result.length === 0) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const user = result[0];

      // Check password
      const isMatch = await bcrypt.compare(lpassword, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      // Determine token expiration based on "Remember Me" checkbox
      const expiresIn = remember ? "7d" : "1h"; // 7 days if checked, 1 hour if not

      // If login is successful
      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn });
      return res.json({ message: "Login successful", token });
    }
  );
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Upload route
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const fileName = req.file.originalname;
  const fileData = req.file.buffer; // File data is stored in memory

  // Generate a unique code
  const uniqueCode = crypto.randomBytes(6).toString("hex"); // Generate 6-byte hex code

  // Insert file data into the database
  const sql = `INSERT INTO uploads (file_name, file_data, unique_code) VALUES (?, ?, ?)`;

  db.query(sql, [fileName, fileData, uniqueCode], (err, result) => {
    if (err) {
      console.error("Error saving to database: ", err);
      return res.status(500).send("Error saving file info");
    }
    // Send JSON response
    res.json({
      message: "File uploaded successfully.",
      uniqueCode: uniqueCode
    });
    console.log(
      `File uploaded successfully. Use this code to download: ${uniqueCode}`
    );
  });
});

// Route to download file using unique code
app.get("/download/:code", (req, res) => {
  const uniqueCode = req.params.code;

  const sql = `SELECT * FROM uploads WHERE unique_code = ?`;
  db.query(sql, [uniqueCode], (err, result) => {
    if (err) {
      return res.status(500).send("Error fetching file info");
    }

    if (result.length === 0) {
      return res.status(404).send("File not found");
    }

    const file = result[0];
    res.setHeader("Content-Type", "application/octet-stream");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${file.file_name}`
    ); // Set the correct filename
    res.send(file.file_data); // Send the binary file data for download
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
