const express = require('express');
const router = express.Router();

const { createCollege, collegeDetails } = require('../controller/college');
const { createIntern } = require('../controller/intern');

router.post('/functionup/colleges', createCollege);
router.post('/functionup/interns', createIntern);
router.get('/functionup/collegeDetails', collegeDetails);

module.exports = router;
