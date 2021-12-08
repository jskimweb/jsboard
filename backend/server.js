const express = require('express');
const app = express();
const path = require('path');
// const writeRouter = require('./routes/writeRouter');
const postRouter = require('./routes/postRouter');
const portNumber = 3000;

app.use('/', express.static(path.join(__dirname, 'public')));
// app.use('/api/write', writeRouter);
app.use('/api/post', postRouter);

app.listen(portNumber, () => {
	console.log(`listening on ${portNumber}`);
});