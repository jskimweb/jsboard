const express = require('express');
const app = express();
const path = require('path');
const moviesRouter = require('./routes/moviesRouter');
const portNumber = 3000;

app.use('/', express.static(path.join(__dirname, '/public')));
app.use('/api/movies', moviesRouter);

app.listen(portNumber, () => {
	console.log(`listening on ${portNumber}`);
});

// app.get('/', (req, res) => {
// 	res.sendFile(path.join(__dirname, '/public/index.html'));
// });