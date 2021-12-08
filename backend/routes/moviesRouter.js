var express = require('express');
var router = express.Router();
var movies = require('../movies.json');

router.get('/', (req, res) => {
	res.send(movies);
});

module.exports = router;