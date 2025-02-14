const express = require('express');
const cors = require('cors'); // Allow frontend to communicate with backend
const bodyParser = require('express');
const mysql = require("mysql2");
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests

// Simulated User Data (Replace with actual database logic later)
const users = [
    { email: 'user@example.com', password: 'password123' }, 
    { email: 'admin@example.com', password: 'admin2025' }
];

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


// Handle login request
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        res.json({ success: true, message: 'Login successful!', redirect: 'index.html' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
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

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
