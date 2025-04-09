const express = require('express');
const { createLecture, getLectures, getLecture } = require('../controllers/lectureController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createLecture);
router.get('/', protect, getLectures);
router.get('/:id', protect, getLecture);

module.exports = router;