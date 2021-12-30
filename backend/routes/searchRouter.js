const express = require('express');
const router = express.Router();
const PostModel = require('../models/PostModel');

// Search posts
router.post('/', async (req, res) => {
	try {
		const posts = await PostModel
			.find({ title: { $regex: req.body.title, $options: 'i' } })
			.sort({ id: -1 });
		res.send(posts);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;