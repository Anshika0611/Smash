const Lecture = require('../models/lectureModel.js');
const fs = require('fs');
const path = require('path');

const createLecture = async (req, res) => {
    const { title, description } = req.body;

    const file = req.file;

    if (!file) {
        res.status(400).json({ message: 'No file uploaded' });
        return;
    }

    const filePath = path.join(__dirname, '../uploads', file.filename);

    fs.renameSync(file.path, filePath);

    const lecture = await Lecture.create({
        title,
        description,
        videoUrl: `/uploads/${file.filename}`,
        uploadedBy: req.user.id,
    });

    res.status(201).json(lecture);
};

const getLectures = async (req, res) => {
    const lectures = await Lecture.find().populate('uploadedBy', 'name');
    res.json(lectures);
};

const getLecture = async (req, res) => {
    const lecture = await Lecture.findById(req.params.id).populate('uploadedBy', 'name');
    if (lecture) {
        res.json(lecture);
    } else {
        res.status(404).json({ message: 'Lecture not found' });
    }
};

module.exports = { createLecture, getLectures, getLecture };