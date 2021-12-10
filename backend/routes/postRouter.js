const express = require('express');
const router = express.Router();
const PostModel = require('../models/PostModel');

// Create a post
router.post('/', async (req, res) => {
	try {
		const post = new PostModel(req.body);
		await post.save();
		res.redirect('/post');
	} catch (err) {
		console.log(err);
		res.status(400).send(err);
	}
});

// Read posts
router.get('/', async (req, res) => {
	try {
		const posts = await PostModel.find();
		console.log(posts);
		res.send(posts);
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
});

// Read a post
router.get('/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const post = await PostModel.findById(id);
		await res.send(post);
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
});

// Update a post
router.put('/:id', async (req, res) => {
	try {
		const id = req.params.id;
		await PostModel.findByIdAndUpdate(id, req.body, { new: true });
		res.redirect('/post');
	} catch (err) {
		console.log(err);
		res.status(400).send(err);
	}
});

// Delete a post
router.delete('/:id', async (req, res) => {
	try {
		const id = req.params.id;
		await PostModel.findByIdAndDelete(id);
	} catch (err) {
		console.log(err);
		res.status(500).send(err);
	}
});

module.exports = router;