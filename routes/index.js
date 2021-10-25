const express = require("express");
const router = express.Router();
const data = require("../data/sample.json");

/* GET home page. */

// router.get("/data", function (req, res, next) {
// 	res.json(data);
// });

router.get('/data/:loan_number', async (req, res, next) => {
	const { loan_number } = req.params;
	try {
		for (let i = 0; i < data.length; i++) {
			const loanNumInJson = data[i].loan_number;
			if (loan_number === loanNumInJson) {
				await res.status(200).json(data[i]);
			}
		}
		await res.status(400).json({
			error: `Cannot GET ${loan_number}: no matching records!`
		});
	}
	catch (err) {
		next(err);
	}
});

router.get('/attribute', async (req, res, next) => {
	try {
		const results = data.filter((item) => {
			const regex = new RegExp(`^${req.query.first_name || req.query.last_name || req.query.city}`, 'gi');
			return item.first_name.match(regex) || item.last_name.match(regex) || item.city.match(regex);
		});
		if (results.length > 0) {
			return await res.status(200).json(results);
		}
		else {
			return await res.status(404).json({
				error: `Cannot GET ${req.query}: no matching records!`
			});
		}
	}
	catch (err) {
		next(err);
	}
});

module.exports = router;