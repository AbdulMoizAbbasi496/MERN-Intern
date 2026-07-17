require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));

// Import Student model
const Student = require('./models/Student.model');

// Routes

// GET all students
app.get('/api/students', async (req, res) => {
    const students = await Student.find();
    res.json(students);
});

// POST add student
app.post('/api/students', async (req, res) => {
    const newStudent = new Student({ name: req.body.name });
    await newStudent.save();
    res.status(201).json(newStudent);
});

// PUT update student
app.put('/api/students/:id', async (req, res) => {
    const student = await Student.findByIdAndUpdate(
        req.params.id,
        { name: req.body.name },
        { new: true }
    );
    if (!student) return res.status(404).json({ error: 'Not found' });
    res.json(student);
});

// DELETE student
app.delete('/api/students/:id', async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: 'Student deleted' });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
