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
		trim: true
	}
}, {
	versionKey: false,
	timestamps: true
});

postSchema.plugin(autoIncrement, {inc_field: 'id'});

const postModel = mongoose.model('posts', postSchema);
module.exports = postModel;