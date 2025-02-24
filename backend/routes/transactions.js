const express = require('express');
const router = express.Router();
const db = require('../db');

// ✅ Hire a vehicle
router.post('/hire', (req, res) => {
    const { hirer_id, vehicle_id, duration, total_price } = req.body;

    db.query(
        'INSERT INTO transactions (hirer_id, vehicle_id, duration, total_price, status) VALUES (?, ?, ?, ?, "Pending")',
        [hirer_id, vehicle_id, duration, total_price],
        (err, result) => {
            if (err) return res.status(500).json({ message: 'Database error' });
            res.status(201).json({ message: 'Vehicle hired successfully' });
        }
    );
});

// ✅ View all transactions
router.get('/all', (req, res) => {
    db.query('SELECT * FROM transactions', (err, result) => {
        if (err) return res.status(500).json({ message: 'Database error' });
        res.status(200).json(result);
    });
});

// ✅ Cancel a transaction
router.put('/cancel/:transaction_id', (req, res) => {
    const transactionId = req.params.transaction_id;

    db.query(
        'UPDATE transactions SET status = "Cancelled" WHERE id = ?',
        [transactionId],
        (err, result) => {
            if (err) return res.status(500).json({ message: 'Database error' });
            res.status(200).json({ message: 'Transaction cancelled successfully' });
        }
    );
});

module.exports = router;
