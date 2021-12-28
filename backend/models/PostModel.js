const mongoose = require('mongoose');
const autoIncrement = require('mongoose-sequence')(mongoose);

const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
		maxlength: 50
	},
	content: {
		type: String,
		required: true,
		trim: true,
		maxlength: 500
	},
	timestamp: {
		type: Date,
		required: true,
		default: () => Date.now()
	}
}, {
	versionKey: false
});

postSchema.plugin(autoIncrement, {inc_field: 'id'});

const postModel = mongoose.model('posts', postSchema);
module.exports = postModel;