const mysql = require('mysql2');
require('dotenv').config();

// Create a MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,  // Database Host
    user: process.env.DB_USER,  // Database User
    password: process.env.DB_PASSWORD,  // Database Password
    database: process.env.DB_NAME,  // Database Name
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('✅ Connected to MySQL database!');
});

module.exports = db;
