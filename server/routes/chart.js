const express = require("express");
const router = express.Router();
const { getChart } = require("../billboard-top-100.js");
//=================================
//             Chart
//=================================

router.get("/getChart", (req, res) => {
	getChart("hot-100", (err, chart) => {
		if (err) return res.status(400).json({ success: false, err });
		else return res.status(200).json({ success: true, chart });
		// use chart
	});
});

router.post("/searchChart", (req, res) => {
	console.log(req.body);
	getChart("hot-100", req.body.today, (err, chart) => {
		if (err) return res.status(400).json({ success: false, err });
		else return res.status(200).json({ success: true, chart });
	});
});

module.exports = router;
