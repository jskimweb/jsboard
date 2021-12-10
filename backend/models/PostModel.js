const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
		maxlength: 50
	},
	content: {
		type: String,
		trim: true,
		required: true
	}
}, {
	versionKey: false
});

const postModel = mongoose.model('posts', postSchema);
module.exports = postModel;