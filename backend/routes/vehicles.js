const express = require('express');
const router = express.Router();
const db = require('../db');

// ✅ Add a new vehicle
router.post('/add', (req, res) => {
    const { owner_id, model, price, year, insurance, number_plate } = req.body;

    db.query(
        'INSERT INTO vehicles (owner_id, model, price, year, insurance, number_plate) VALUES (?, ?, ?, ?, ?, ?)',
        [owner_id, model, price, year, insurance, number_plate],
        (err, result) => {
            if (err) return res.status(500).json({ message: 'Database error' });
            res.status(201).json({ message: 'Vehicle added successfully' });
        }
    );
});

// ✅ View all vehicles of an owner
router.get('/owner/:owner_id', (req, res) => {
    const ownerId = req.params.owner_id;

    db.query('SELECT * FROM vehicles WHERE owner_id = ?', [ownerId], (err, result) => {
        if (err) return res.status(500).json({ message: 'Database error' });
        res.status(200).json(result);
    });
});

// ✅ Update vehicle details
router.put('/update/:vehicle_id', (req, res) => {
    const vehicleId = req.params.vehicle_id;
    const { model, price, year, insurance } = req.body;

    db.query(
        'UPDATE vehicles SET model = ?, price = ?, year = ?, insurance = ? WHERE id = ?',
        [model, price, year, insurance, vehicleId],
        (err, result) => {
            if (err) return res.status(500).json({ message: 'Database error' });
            res.status(200).json({ message: 'Vehicle updated successfully' });
        }
    );
});

// ✅ Remove a vehicle
router.delete('/delete/:vehicle_id', (req, res) => {
    const vehicleId = req.params.vehicle_id;

    db.query('DELETE FROM vehicles WHERE id = ?', [vehicleId], (err, result) => {
        if (err) return res.status(500).json({ message: 'Database error' });
        res.status(200).json({ message: 'Vehicle removed successfully' });
    });
});

module.exports = router;
