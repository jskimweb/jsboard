const express = require('express');
const router = express.Router();
const PostModel = require('../models/PostModel');

// Search posts
router.post('/', async (req, res) => {
	try {
		const posts = await PostModel.find({ title: req.body.title });
		res.send(posts);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;