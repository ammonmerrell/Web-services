const express = require('express')
const router= express.Router();

const professionalControllers = require('../controllers/professional.js');

router.get('/', professionalControllers.getAll);

router.get('/:id', professionalControllers.getAll);

module.exports = router;