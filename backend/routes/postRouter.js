const express = require('express');
const router = express.Router();
const PostModel = require('../models/PostModel');

// Create a post
router.post('/', async (req, res) => {
	try {
		const post = await new PostModel(req.body)
		await post.save();
	} catch (err) {
		console.log(err);
		res.status(400).send(err);
	}
});

// Read posts
router.get('/', async (req, res) => {
	try {
		const currentPage = req.query.page;
		const limitPosts = 10;
		const skipPosts = (currentPage - 1) * limitPosts;
		const totalPosts = (await PostModel.find()).length;
		const posts = await PostModel
			.find()
			.sort({ id: -1 })
			.skip(skipPosts)
			.limit(limitPosts);
		res.send({
			content: posts,
			length: totalPosts,
			limit: limitPosts
		});
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
});

// Read a post
router.get('/:id', async (req, res) => {
	try {
		const postId = req.params.id;
		const post = await PostModel.findOne({ id: postId });
		await res.send(post);
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
});

// Update a post
router.put('/:id', async (req, res) => {
	try {
		const postId = req.params.id;
		await PostModel.findOneAndUpdate({ id: postId }, req.body);
	} catch (err) {
		console.log(err);
		res.status(400).send(err);
	}
});

// Delete a post
router.delete('/:id', async (req, res) => {
	try {
		const postId = req.params.id;
		await PostModel.findOneAndDelete({ id: postId });
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
});

module.exports = router;