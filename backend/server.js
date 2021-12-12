const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const postRouter = require('./routes/postRouter');
const portNumber = 3000;

mongoose.connect('mongodb+srv://admin:1q2w3e4r@cluster0.pzhqx.mongodb.net/mydb?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	// useCreateIndex: true,
}).then(() => {
	console.log('Connected to MongoDB');
}).catch((err) => {
	console.log(err);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/api/post', postRouter);

app.listen(portNumber, () => {
	console.log(`Listening on ${portNumber}`);
});