const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const router = express.Router();

const db = new sqlite3.Database('./database/database.db');

db.serialize(() => {
	db.run(
		'CREATE TABLE IF NOT EXISTS foods (id INTEGER PRIMARY KEY, description TEXT, calories INTEGER, protein REAL, fat REAL, carbs REAL)'
	);
});

router.get('/', (req, res, next) => {
	// Retrieve all food items from the database
	db.all('SELECT * FROM foods', [], (err, rows) => {
		if (err) {
			console.error(err.message);
			return res.status(500).json({
				error: 'Failed to retrieve food items',
			});
		}
		res.json(rows);
	});
});

router.post('/', (req, res, next) => {
	const { description, calories, protein, fat, carbs } = req.body;

	if (!description || !calories) {
		return res.status(400).json({
			error: 'Description and calories are required',
		});
	}

	// Insert new food item into the database
	db.run(
		'INSERT INTO foods (description, calories, protein, fat, carbs) VALUES (?, ?, ?, ?, ?)',
		[description, calories, protein, fat, carbs],
		function (err) {
			if (err) {
				console.error(err.message);
				return res.status(500).json({
					error: 'Failed to add food item',
				});
			}
			res.json({
				id: this.lastID,
				description,
				calories,
				protein,
				fat,
				carbs,
			});
		}
	);
});

module.exports = router;
