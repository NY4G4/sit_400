const express = require('express');
const router = express.Router();
const db = require('../db');

// ✅ Register a new user
router.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Check if user exists
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }
        if (result.length > 0) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Insert user into database
        db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, password], (err, result) => {
                if (err) {
                    return res.status(500).json({ message: 'Database error' });
                }
                res.status(201).json({ message: 'User registered successfully' });
            });
    });
});

// ✅ User Login
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }
        if (result.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        res.status(200).json({ message: 'Login successful', redirect: '/dashboard.html' });
    });
});

module.exports = router;
