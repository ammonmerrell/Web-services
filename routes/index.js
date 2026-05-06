const router = require('express').Router();

router.get('/', (req, res) => {res.send('Hello World');} );

router.use('/professional', require('./professional'));


module.exports = router;