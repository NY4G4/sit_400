const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Replace with your MySQL username
  password: "", // Replace with your MySQL password
  database: "clars_vehicles_limited", // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database!");
});

// User Registration Endpoint
app.post("/register", (req, res) => {
  const { idNumber, name, email, password, role, dateOfBirth, licenseNumber } = req.body;

  if (!idNumber || !name || !email || !password || !role || !dateOfBirth) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const query = `INSERT INTO users (idNumber, name, email, password, role, dateOfBirth, licenseNumber) VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const values = [idNumber, name, email, password, role, dateOfBirth, licenseNumber || null];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error("Error registering user:", err);
      return res.status(500).json({ error: "Failed to register user." });
    }
    res.status(201).json({ message: "User registered successfully!", userId: results.insertId });
  });
});

// Fetch All Users Endpoint
app.get("/users", (req, res) => {
  const query = "SELECT * FROM users";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      return res.status(500).json({ error: "Failed to fetch users." });
    }
    res.status(200).json(results);
  });
});

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
