const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const postRouter = require('./routes/postRouter');
require('dotenv').config()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/api/post', postRouter);

mongoose.connect(process.env.DB_URL, {
	useNewUrlParser: true,
	// useCreateIndex: true,
}).then(() => {
	console.log('Connected to MongoDB');
	app.listen(process.env.PORT, () => {
		console.log(`Listening on ${process.env.PORT}`);
	});
}).catch((err) => {
	console.log(err);
});