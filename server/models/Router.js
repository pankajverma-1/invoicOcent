const express = require('express');
const { runData } = require('./Controller');

const router = express.Router();

// router.get('/', runData);
router.post('/', runData);

module.exports = router;