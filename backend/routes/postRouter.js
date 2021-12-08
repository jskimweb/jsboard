const express = require('express');
const router = express.Router();

const {
	MongoClient
} = require('mongodb');
const uri = "mongodb+srv://admin:1q2w3e4r@cluster0.pzhqx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
const postCollection = client.db('mydb').collection('post');

client.connect(err => {
	if (err) console.log(err);
});

router.get('/', async (req, res) => {
	const posts = await postCollection.find().toArray();
	console.log(posts);
	res.send(posts);
});

module.exports = router;