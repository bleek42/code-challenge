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
	const lastName = req.query.last_name;
	const city = req.query.city;
	if (firstName !== undefined || lastName !== undefined || city !== undefined) {
		try {
			for (let i = 0; i < data.length; i++) {
				const firstNameInJson = data[i].first_name;
				const lastNameInJson = data[i].last_name;
				const cityInJson = data[i].city;
				for (let j = 0; j < firstNameInJson.length; j++) {
					const searchArray = [];
					if (firstName[j] === firstNameInJson[j]) {
						searchArray.push(data[i]);
						console.log(searchArray);
					}
					return res.status(200).json(searchArray);
				}
			}
			return res.status(404).json({ error: `Cannot GET ${firstName}!` });
		}
		catch (err) {
			next(err);
		}
	}
});

module.exports = router;