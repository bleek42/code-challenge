const express = require("express");
const router = express.Router();
const data = require("../data/sample.json");
const { readFile } = require('fs/promises');

/* GET home page. */

// router.get("/data", function (req, res, next) {
// 	res.json(data);
// });

router.get('/data/:loan_number', async (req, res, next) => {
	const { loan_number } = req.params;
	console.log('hi');
	try {
		for (let i = 0; i < data.length; i++) {
			const loanNumInJson = data[i].loan_number;
			if (loan_number === loanNumInJson) {
				return res.status(200).json(data[i]);
			}
		}
		res.status(400).json({
			error: `Cannot GET ${loan_number}: record does not exist!`
		});
	}
	catch (err) {
		next(err);
	}
});

router.get('/attribute', async (req, res, next) => {
	const firstName = req.query.first_name;
	console.log(typeof firstName);
	try {
		for (let i = 0; i < data.length; i++) {
			const firstNameInJson = data[i].firstName;
			if (firstName === firstNameInJson) {
				return res.status(200).json(data[i]);
			}
			else {
				return res.status(404).json({ error: `Cannot GET ${firstName}!` });
			}
		}

	}
	catch (err) {
		next(err);
	}
});

module.exports = router;