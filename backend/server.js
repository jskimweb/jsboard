const mongoose = require('mongoose');
const express = require('express');
const app = express();
const history = require('connect-history-api-fallback');
const path = require('path');
const postRouter = require('./routes/postRouter');
const searchRouter = require('./routes/searchRouter');

require('dotenv').config()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(history()); // static 위에 작성
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/api/post', postRouter);
app.use('/api/search', searchRouter);

mongoose.connect(process.env.DB_URL, {
	useNewUrlParser: true
}).then(() => {
	console.log('Connected to MongoDB');
	app.listen(process.env.PORT, () => {
		console.log(`Listening on ${process.env.PORT}`);
	});
}).catch((err) => {
	console.log(err);
});